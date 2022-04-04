import { API, APIEvent, Characteristic, DynamicPlatformPlugin, Logger, PlatformAccessory, PlatformConfig, Service } from 'homebridge';
import { Fetcher } from './api/nibe-fetcher';
import { Data } from './api/nibe-dto';
import { NibeUtil } from './api/nibe-api-util';
import { Locale } from './Locale';


export let Services: typeof Service;
export let Characteristics: typeof Characteristic;

export const PLATFORM_NAME = 'Nibe';
export const PLUGIN_NAME = 'homebridge-nibe';

/**
 * HomebridgePlatform
 * This class is the main constructor for your plugin, this is where you should
 * parse the user config and discover/register accessories with Homebridge.
 */
export class Platform implements DynamicPlatformPlugin {



    private readonly accessories: PlatformAccessory[] = [];
    private readonly fetcher: Fetcher;
    public readonly locale: Locale;

    constructor(public readonly log: Logger, public readonly config: PlatformConfig, public readonly api: API) {
        Services = this.api.hap.Service;
        Characteristics = this.api.hap.Characteristic;

        this.log.debug('Finished initializing platform:', this.config.name);

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
                managedParameters: [], //this.config.ManagedParameters,
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
        const uuids = Array<string>();
        const info = NibeUtil.getNibeInfo(data);
        for (const systemUnit of data.unitData) {
            if (systemUnit.categories) {
                for (const category of systemUnit.categories) {
                    const uuid = this.api.hap.uuid.generate(PLUGIN_NAME + '-' + systemUnit.systemUnitId + '-' + category.categoryId);
                    const mapper = await import(`./mappers/${category.categoryId.toLowerCase()}`)
                        .then((c) => c.default)
                        .catch(() => undefined);
          
                    if (!mapper){
                        this.log.debug('No mapper for: ' + category.categoryId);
                        continue;
                    }

                    let accessory = this.accessories.find(a => a.UUID === uuid);
                    if (!accessory) {
                        accessory = new this.api.platformAccessory(category.name, uuid);
                        new mapper(this, info, accessory).build(category);
                        this.api.registerPlatformAccessories(PLUGIN_NAME, PLATFORM_NAME, [accessory]);
                    } else {
                        new mapper(this, info, accessory).update(category);
                    }

                    uuids.push(accessory.UUID);
                }
            }
        }

        const deleted = this.accessories.filter((accessory) => !uuids.includes(accessory.UUID));
        this.api.unregisterPlatformAccessories(PLUGIN_NAME, PLATFORM_NAME, deleted);
    }

    /**
     * This function is invoked when homebridge restores cached accessories from disk at startup.
     * It should be used to setup event handlers for characteristics and update respective values.
     */
    async configureAccessory(accessory: PlatformAccessory) {
        if (!this.accessories.map((a) => a.UUID).includes(accessory.UUID)) {
            this.accessories.push(accessory);
        }
    }  

}
