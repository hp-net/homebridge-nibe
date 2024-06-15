import axios, {AxiosError} from 'axios';
import {ApiFetcher} from './ApiFetcher';
import * as eventEmitter from 'events';
import * as api from './MyUplinkApiModel';

interface Logger {
    info(message: string, ...parameters: any[]): void;
    warn(message: string, ...parameters: any[]): void;
    error(message: string, ...parameters: any[]): void;
    debug(message: string, ...parameters: any[]): void;
}

interface Options {
    clientId: string;
    clientSecret: string;
    interval: number;
    language: string;
    showApiResponse: boolean;
}

interface Session extends api.Session {
    expires_at?: number;
}

const consts = {
  baseUrl: 'https://api.myuplink.com',
  scope: 'READSYSTEM WRITESYSTEM',
  grantType: 'client_credentials',
  timeout: 45000,
  userAgent: 'homebridge-nibe',
  renewBeforeExpiry: 5 * 60 * 1000,
};

export class MyUplinkApiFetcher extends eventEmitter.EventEmitter implements ApiFetcher {
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
  private systems: api.System[] | null | undefined;
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
      if (this.isTokenExpired()) {
        this.log.debug('Token is expired / expires soon - refreshing');
        const token = await this.getToken();
        this.setSession(token);
      }

      if (this.systems == null) {
        this.systems = await this.fetchSystems();
      }

      for (const system of this.systems) {
        for (const device of system.devices) {
          try {
            const data = await this.fetchData(system, device);
            if (data && data.parameters) {
              this._onData(data);
            }
          } catch (error) {
            this._onError(error);
          }
        }
      }

      this.log.debug('All data fetched.');
    } catch (error) {
      this._onError(error);
    }
  }

  private async getToken(): Promise<Session> {
    this.log.debug('token()');
    const body = {
      client_id: this.options.clientId,
      client_secret: this.options.clientSecret,
      grant_type: consts.grantType,
      scope: consts.scope,
    };

    const url = '/oauth/token';
    try {
      const now = Date.now();
      const { data } = await axios.post<Session>(
        url, new URLSearchParams(body).toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      const expiresIn = data.expires_in ?? 3600;
      data.expires_at = now + expiresIn * 1000;
      return data;
    } catch (error) {
      throw this.checkError(url, error);
    }
  }

  private async fetchSystems(): Promise<nibeDto.System[]> {
    this.log.debug('Fetch units.');
    const response = await this.getFromNibeuplink<nibeDto.SystemMeResponse>('/v2/systems/me');
    this.log.debug(`${response.systems.length} units fetched.`);

    return response.systems;
  }

  private async fetchData(system: api.System, device: api.Device): Promise<nibeDto.Data> {
    return Promise.resolve();
  }

  private async getFromNibeuplink<T>(url: string): Promise<T> {
    this.log.debug(`GET ${url}`);
    try {
      const { data } = await axios.get<T>(url, {
        headers: {
          Authorization: 'Bearer ' + this.getSession('access_token')
        },
      });

      if(this.options.showApiResponse) {
        this.log.info('Nibe data from '+url+': ' +JSON.stringify(data));
      }

      return data;
    } catch (error) {
      throw this.checkError(url, error);
    }
  }

  private checkError(url: string, error: unknown): unknown {
    this.log.error(`error from ${url}`);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response != null) {
        if (axiosError.response.status === 401) {
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

  private getSession(key: keyof Session): string | number | undefined | null {
    this.log.debug('Get session.');
    return this.auth ? this.auth[key] : null;
  }

  private setSession(auth: Session): void {
    this.log.debug('Set session.');
    this.auth = auth;
  }

  private clearSesssion(): void {
    this.log.debug('Clear session.');
    this.setSession({});
  }

  private isTokenExpired(): boolean {
    const expired = (Number(this.getSession('expires_at')) || 0) < Date.now() + consts.renewBeforeExpiry;
    this.log.debug('Is token expired: ' + expired);
    return expired;
  }

  private _onData(data: nibeDto.Data): void {
    this.emit('data', data);
  }

  private _onError(error: unknown): void {
    this.emit('error', error);
  }

  setParams(unit: string, parameters: any): Promise<void> {
    return Promise.resolve();
  }

}