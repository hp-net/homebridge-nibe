import { API, APIEvent, Characteristic, DynamicPlatformPlugin, Logger, PlatformAccessory, PlatformConfig, Service } from 'homebridge';
import { Fetcher } from './api/nibe-fetcher';
import { Data, ManagedParameter } from './api/nibe-dto';
import { Locale } from './Locale';
import { AccessoryHandler, ProductConfiguration } from './AccessoryHandler';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export let Services: typeof Service;
export let Characteristics: typeof Characteristic;

export const PLATFORM_NAME = 'Nibe';
export const PLUGIN_NAME = 'homebridge-nibe';
const ENCODING = 'utf8';

/**
 * HomebridgePlatform
 * This class is the main constructor for your plugin, this is where you should
 * parse the user config and discover/register accessories with Homebridge.
 */
export class Platform implements DynamicPlatformPlugin {

    public readonly accessories: PlatformAccessory[] = [];
    public readonly locale: Locale;

    private readonly fetcher: Fetcher;
    private firstApiGet: boolean = true;
    private accessoryHandler? : AccessoryHandler;

    public readonly managedParameters: ManagedParameter[] = [
        {unit: "", parameter: "48132", id: "48132", name: "48132"}, //TEMPORARY_LUX
        {unit: "", parameter: "43427", id: "43427", name: "43427"},
        {unit: "", parameter: "43115", id: "43115", name: "43115"}, //Hot water
        {unit: "", parameter: "43064", id: "43064", name: "43064"}, //Heating
        {unit: "", parameter: "47260", id: "47260", name: "47260"}, //SELECTED_FAN_SPEED //0,1,2,3,4 (0 = normal)
    ];

    constructor(public readonly log: Logger, public readonly config: PlatformConfig, public readonly api: API) {
        Services = this.api.hap.Service;
        Characteristics = this.api.hap.Characteristic;

        this.log.debug('Finished initializing platform');

        try {
            this.fetcher = new Fetcher({
                clientId: this.config['identifier'],
                clientSecret: this.config['secret'],
                redirectUri: this.config['callbackUrl'],
                interval: this.config['pollingPeriod'] || 60,
                authCode: this.config['authCode'],
                systemId: this.config['systemIdentifier'],
                language: this.config['language'],
                enableManage: true,
                managedParameters: this.managedParameters,
                sessionStore: this.api.user.storagePath() + '/nibe-session.' + this.config['system'] + '.json',
            }, this.log);
        } catch (error: any) {
            this.log.error(error.message);
            throw error;
        }

        try {
            this.locale = new Locale(this.config['language'], log);
        } catch (error: any) {
            this.log.error(error.message);
            throw error;
        }

        // When this event is fired it means Homebridge has restored all cached accessories from disk.
        // Dynamic Platform plugins should only register new accessories after this event was fired,
        // in order to ensure they weren't added to homebridge already. This event can also be used
        // to start discovery of new accessories.
        this.api.on(APIEvent.DID_FINISH_LAUNCHING, () => {
            log.debug('Executed didFinishLaunching callback');
            this.initNibeListeners();
        });
    }

    private async initNibeListeners() {
        this.fetcher
            .on('data', (data) => {
                this.handleNibeData(data);
            }).on('error', (data) => {
                this.log.error('Error:', data);
            });
    }

    private async handleNibeData(data: Data) {
        if (data == null || data.unitData == null || data.unitData.length == 0) {
            this.log.error('No Nibe data from Nibeuplink Api');
            return;
        }

        if (this.firstApiGet && data.unitData.length > 1) {
            this.log.warn('There is more than one unit, only first will be handled');
        }

        let product = data.unitData[0].product;

        if (this.firstApiGet) {
            this.log.info('Loading configuration for ' + product);
            try {
                let productConfiguration = yaml.load(fs.readFileSync(path.resolve(__dirname, `./config/${product.replace(/ /g, '-')}.yaml`), ENCODING)) as ProductConfiguration;
                this.accessoryHandler = new AccessoryHandler(this, productConfiguration);
            } catch (e) {
                this.log.error(JSON.stringify(e));
                this.log.error(`No configuration for ${product}`);
                this.log.error(`Create support issue to support new model, use link: https://github.com/hp-net/homebridge-nibe/issues/new?assignees=&labels=new+product&template=new_product.md&title=${product.replace(/ /g, '+')} and provide next log in description`);
                this.log.error(JSON.stringify(data));
            }
        }
        
        if (this.accessoryHandler) {
            this.accessoryHandler.handleData(data);
        }

        this.firstApiGet = false;
    }

    /**
     * This function is invoked when homebridge restores cached accessories from disk at startup.
     * It should be used to setup event handlers for characteristics and update respective values.
     */
    async configureAccessory(accessory: PlatformAccessory) {
        this.log.info( `Loading accessory from cache: [${accessory.displayName}], UUID: [${accessory.UUID}]`);
        this.accessories.push(accessory);
    }  

    public registerPlatformAccessories(accessory: PlatformAccessory) {
        this.api.registerPlatformAccessories(PLUGIN_NAME, PLATFORM_NAME, [accessory]);
    }

    public unregisterPlatformAccessories(deleted: PlatformAccessory[]) {
        this.api.unregisterPlatformAccessories(PLUGIN_NAME, PLATFORM_NAME, deleted);
    }

    public generateUuid(name: string): string {
        return this.api.hap.uuid.generate(PLUGIN_NAME + '-' + name);
    }
}
