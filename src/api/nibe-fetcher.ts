//
// nibe-fetcher
//
// original author: Timo Behrmann (timo.behrmann@gmail.com)
// modified by Sebastian Haesselbarth (seb@sebmail.de)
// modified by Hubert Pruszynski (hubert.pruszynski@gmail.com)
//
// original sources: https://github.com/z0mt3c/nibe-fetcher
// modified sources: https://github.com/sebilm/ioBroker.nibeuplink
//
// license: MIT
//
// this version is based on modified nibe-fetcher from ioBroker.nibeuplink, version 1.1.1
//
import axios, { AxiosError } from 'axios';
import * as eventEmitter from 'events';
import * as fs from 'fs';
import * as jsonfile from 'jsonfile';
import * as nibeDto from './nibe-dto';
import * as parameters from './parameters';

interface Logger {
    info(message: string, ...parameters: any[]): void;
    warn(message: string, ...parameters: any[]): void;
    error(message: string, ...parameters: any[]): void;
    debug(message: string, ...parameters: any[]): void;
}

interface Options {
    authCode: string;
    clientId: string;
    clientSecret: string;
    systemId: string;
    redirectUri: string;
    enableManage: boolean;
    managedParameters: nibeDto.ManagedParameter[];
    interval: number;
    language: string;
    sessionStore: string;
}

interface Session extends nibeDto.Session {
    expires_at?: number;
    authCode?: string;
}

const consts = {
    baseUrl: 'https://api.nibeuplink.com',
    scope: 'READSYSTEM WRITESYSTEM',
    timeout: 45000,
    userAgent: 'fetcher.nibeuplink',
    renewBeforeExpiry: 5 * 60 * 1000,
    parameters: parameters.NibeParameters,
};

const versionKeys = ['VERSIO', 'VERSIE', 'VARIANTA', 'WERSJA', 'VERSJON'];
const serialNumberKeys = ['SERIENNUMMER', 'SERIENUMMER', 'NUMER_SERYJNY', 'NUM_RO_DE_S_RIE', 'SARJANUMERO', 'S_RIOV_SLO'];
const productKeys = ['PRODUKT', 'PRODUIT', 'TUOTE', 'V_ROBEK'];

declare global {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Array<T> {
        inPartsOf<T>(number: number): T[][];
    }
}

Array.prototype.inPartsOf = function <T>(number: number) {
    const parts: number = Math.floor(this.length / number); // number of parts - 1
    const lastLength: number = this.length % number;
    const result: T[][] = [];
    for (let i = 0; i < parts; i++) {
        const start: number = i * number;
        const part: T[] = this.slice(start, start + number);
        result.push(part);
    }
    if (lastLength > 0) {
        const lastPart = this.slice(parts * number);
        result.push(lastPart);
    }
    return result;
};

function getProperty<T, K extends keyof T>(obj: T, propertyName: K): T[K] {
    return obj[propertyName];
}

function groupBy<T, K extends keyof any>(list: T[], getKey: (item: T) => K): Record<K, T[]> {
    return list.reduce((previous, currentItem) => {
        const group = getKey(currentItem);
        if (!previous[group]) {
            previous[group] = [];
        }
        previous[group].push(currentItem);
        return previous;
    }, {} as Record<K, T[]>);
}

/**
 * Parse the string as int to number. If it is NaN, it returns the default value.
 * If the default value is not given, it is 0.
 * @param str The string to parse.
 * @param def The default value. The default default value is 0.
 * @returns The parsed number or the default value if the parse result is NaN.
 */
function parseIntOrDefault(str: string, def = 0): number {
    const num = parseInt(str);
    if (isNaN(num)) {
        return def;
    } else {
        return num;
    }
}

export class Fetcher extends eventEmitter.EventEmitter {
    constructor(options: Options, log: Logger) {
        super();

        this.options = options;
        this.log = log;

        axios.defaults.baseURL = consts.baseUrl;
        axios.defaults.headers.common['user-agent'] = consts.userAgent;
        axios.defaults.timeout = consts.timeout;

        this.start();
    }

    private options: Options;
    private log: Logger;
    private interval: NodeJS.Timeout | null | undefined;
    private active: boolean | undefined;
    private units: nibeDto.SystemUnit[] | null | undefined;
    private auth: Session | null | undefined;

    start(): void {
        if (this.interval != null) {
            return;
        }

        this.active = false;

        const exec = (): void => {
            if (this.active) {
                return;
            }
            this.active = true;
            this.fetch().then(() => {
                this.active = false;
            });
        };
        this.interval = setInterval(exec, <number>this.options.interval * 1000);

        exec();
    }

    stop(): void {
        if (this.interval == null) {
            return;
        }
        clearInterval(this.interval);
        this.interval = null;
    }

    async fetch(): Promise<void> {
        this.log.debug('Fetch data.');
        try {
            if (this.hasNewAuthCode()) {
                this.clearSesssion();
            }
            if (!this.hasRefreshToken()) {
                if (this.options.authCode) {
                    const token = await this.getToken(this.options.authCode);
                    this.setSession(token);
                } else {
                    this.log.error('You need to get and set a new Auth-Code. You can do this in the adapter setting.');
                    this.stop();
                    return;
                }
            }
            if (this.isTokenExpired()) {
                this.log.debug('Token is expired / expires soon - refreshing');
                const token = await this.getRefreshToken();
                this.setSession(token);
            }

            if (this.units == null) {
                this.units = await this.fetchUnits();
            }
            const unitData = await Promise.all(
                this.units.map(async (unit) => {
                    const categories = await this.fetchCategories(unit);
                    const newUnit: nibeDto.SystemUnit = {
                        systemUnitId: unit.systemUnitId,
                        name: unit.name,
                        shortName: unit.shortName,
                        product: unit.product,
                        softwareVersion: unit.softwareVersion,
                        categories: categories,
                    };
                    return newUnit;
                }),
            );
            const allData: nibeDto.Data = {
                unitData: unitData,
            };
            if (this.options.enableManage == true && this.options.managedParameters != null && this.options.managedParameters.length > 0) {
                const parametersByUnit = groupBy(this.options.managedParameters, (x) => x.unit);
                const parametersGroups = Object.values(parametersByUnit);
                const allManageData = await Promise.all(
                    parametersGroups.map(async (group) => {
                        const unit = group[0].unit;
                        const parameters = group.map((x) => parseIntOrDefault(x.parameter));
                        const result = await this.fetchParams(unit, parameters);
                        this.processParams(result);
                        const manageData: nibeDto.ManageData = {
                            unit: unit,
                            parameters: result,
                        };
                        return manageData;
                    }),
                );
                allData.manageData = allManageData;
            }
            this.log.debug('All data fetched.');
            this._onData(allData);
        } catch (error) {
            this._onError(error);
        }
    }

    private async getToken(authCode: string): Promise<Session> {
        this.log.debug('token()');
        const data = {
            grant_type: 'authorization_code',
            client_id: this.options.clientId,
            client_secret: this.options.clientSecret,
            code: authCode,
            redirect_uri: this.options.redirectUri,
            scope: consts.scope,
        };
        return await this.postTokenRequest(data);
    }

    private async getRefreshToken(): Promise<Session> {
        this.log.debug('Refresh token.');
        const data = {
            grant_type: 'refresh_token',
            refresh_token: this.getSession('refresh_token'),
            client_id: this.options.clientId,
            client_secret: this.options.clientSecret,
        };
        return await this.postTokenRequest(data);
    }

    private async postTokenRequest(body: any): Promise<Session> {
        const stringBody = new URLSearchParams(body).toString();
        const url = '/oauth/token';
        try {
            const { data } = await axios.post<Session>(url, stringBody, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            const expiresIn = data.expires_in ?? 1800;
            data.expires_at = Date.now() + expiresIn * 1000;
            return data;
        } catch (error) {
            throw this.checkError(url, error);
        }
    }

    private async fetchUnits(): Promise<nibeDto.SystemUnit[]> {
        this.log.debug('Fetch units.');
        const units = await this.getFromNibeuplink<nibeDto.SystemUnit[]>('units');
        this.log.debug(`${units.length} units fetched.`);
        return units;
    }

    private async fetchCategories(unit: nibeDto.SystemUnit): Promise<nibeDto.Category[]> {
        this.log.debug('Fetch categories.');
        const url = `serviceinfo/categories?parameters=true&systemUnitId=${unit.systemUnitId}`;
        const categories = await this.getFromNibeuplink<nibeDto.Category[]>(url);
        categories.forEach((category) => this.processParams(category.parameters));
        this.log.debug(`${categories.length} categories fetched.`);
        return categories;
    }

    private async fetchParams(unit: string, parameters: number[]): Promise<nibeDto.Parameter[]> {
        this.log.debug(`Fetch params ${parameters} of unit ${unit}.`);
        const result = await Promise.all(
            parameters.inPartsOf<number>(15).map(async (p) => {
                const paramStr = p.join('&parameterIds=');
                const url = `parameters?parameterIds=${paramStr}&systemUnitId=${unit}`;
                return await this.getFromNibeuplink<nibeDto.Parameter[]>(url);
            }),
        );
        
        let out: Array<nibeDto.Parameter> = [];
        result.forEach(r => {
            out = out.concat(r);
        });

        return out;
    }

    async getParams(unit: string, parameters: number[]): Promise<void> {
        const result = await this.fetchParams(unit, parameters);
        this.processParams(result);
        const manageData: nibeDto.ManageData = {
            unit: unit,
            parameters: result,
        };
        const data: nibeDto.Data = {
            unitData: [],
            manageData: [manageData],
        };
        this.log.debug('New data fetched.');
        this._onData(data);
    }

    async setParams(unit: string, parameters: any): Promise<void> {
        const url = `parameters?systemUnitId=${unit}`;
        await this.putToNibeuplink(url, { settings: parameters });
    }

    private async getFromNibeuplink<T>(suburl: string, lang = ''): Promise<T> {
        if (lang == '') {
            lang = this.options.language;
        }
        const systemId = this.options.systemId;
        const url = `/api/v1/systems/${systemId}/${suburl}`;
        this.log.debug(`GET ${url} (lang: ${lang})`);
        try {
            const { data } = await axios.get<T>(url, {
                headers: {
                    Authorization: 'Bearer ' + this.getSession('access_token'),
                    'Accept-Language': lang,
                },
            });
            return data;
        } catch (error) {
            throw this.checkError(suburl, error);
        }
    }

    private async putToNibeuplink(suburl: string, body: any, lang = ''): Promise<void> {
        if (lang == '') {
            lang = this.options.language;
        }
        const systemId = this.options.systemId;
        const url = `/api/v1/systems/${systemId}/${suburl}`;
        this.log.debug(`PUT ${url} (lang: ${lang})`);
        this.log.debug(`PUT body: ${JSON.stringify(body, null, ' ')}`);
        try {
            await axios.put(url, body, {
                headers: {
                    Authorization: 'Bearer ' + this.getSession('access_token'),
                    'Accept-Language': lang,
                },
            });
        } catch (error) {
            throw this.checkError(suburl, error);
        }
    }

    private checkError(suburl: string, error: unknown): unknown {
        this.log.error(`error from ${suburl}`);
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response != null) {
                if (axiosError.response.status == 401) {
                    this.clearSesssion();
                }
                if (axiosError.response.data != null) {
                    const responseText = JSON.stringify(axiosError.response.data, null, ' ');
                    const errorMessage = `${axiosError.response.statusText}: ${responseText}`;
                    return new Error(errorMessage);
                } else {
                    return new Error(axiosError.response.statusText);
                }
            }
        }
        return error;
    }

    private processParams(params: nibeDto.Parameter[], collect = false): void {
        params.forEach((item) => {
            const parameters = consts.parameters.get(item.parameterId);
            if (parameters == null) {
                let key = item.title;
                const parameterId = item.parameterId;
                if (!collect && item.parameterId > 0) {
                    key = item.parameterId + '_' + key;
                }
                if (item.designation != null && item.designation != '') {
                    key = key + '_' + item.designation;
                }
                key = key
                    .toUpperCase()
                    .replace(/[^A-Z0-9_]+/gm, '_')
                    .replace(/_{2,}/gm, '_')
                    .replace(/_+$/gm, '');
                if (item.parameterId == 0) {
                    if (versionKeys.includes(key)) {
                        key = 'VERSION';
                    } else if (serialNumberKeys.includes(key)) {
                        key = 'SERIAL_NUMBER';
                    } else if (productKeys.includes(key)) {
                        key = 'PRODUCT';
                    }
                }
                Object.assign(item, { key: key });
            } else {
                Object.assign(item, parameters);
            }

            if (item.divideBy == null) {
                if (item.unit == '°C' || item.unit == 'kW' || item.unit == 'kWh' || item.unit == 'l/m') {
                    Object.assign(item, { divideBy: 10 });
                }
            }

            if (item.divideBy != null && item.divideBy > 0) {
                item.value = item.rawValue / item.divideBy;
            } else {
                item.value = item.rawValue;
            }
        });
    }

    private readSession(): void {
        this.log.debug('Read session.');
        if (!this.options.sessionStore || !fs.existsSync(this.options.sessionStore)) {
            return;
        }
        this.auth = jsonfile.readFileSync(this.options.sessionStore, { throws: false });
    }

    private getSession(key: keyof Session): string | number | undefined | null {
        this.log.debug('Get session.');
        if (this.auth == null) {
            this.readSession();
        }
        return this.auth ? getProperty(this.auth, key) : null;
    }

    private setSession(auth: Session): void {
        this.log.debug('Set session.');
        if (auth.authCode == null) {
            auth.authCode = this.options.authCode;
        }
        this.auth = auth;
        if (!this.options.sessionStore) {
            return;
        }
        jsonfile.writeFileSync(this.options.sessionStore, this.auth, { spaces: 2 });
    }

    private clearSesssion(): void {
        this.log.debug('Clear session.');
        this.setSession({});
    }

    private hasNewAuthCode(): boolean {
        const hasNewAuthCode = this.getSession('authCode') != null && this.getSession('authCode') != this.options.authCode;
        this.log.debug('Has new auth code: ' + hasNewAuthCode);
        return hasNewAuthCode;
    }

    private isTokenExpired(): boolean {
        const expired = (this.getSession('expires_at') || 0) < Date.now() + consts.renewBeforeExpiry;
        this.log.debug('Is token expired: ' + expired);
        return expired;
    }

    private hasRefreshToken(): boolean {
        const hasToken = !!this.getSession('refresh_token');
        this.log.debug('Has refresh token: ' + hasToken);
        return hasToken;
    }

    private _onData(data: nibeDto.Data): void {
        this.emit('data', data);
    }

    private _onError(error: unknown): void {
        this.emit('error', error);
    }

}