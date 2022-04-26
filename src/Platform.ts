import { API, APIEvent, Characteristic, DynamicPlatformPlugin, Logger, PlatformAccessory, PlatformConfig, Service } from 'homebridge';
import { PlatformAdapter } from './nibe/PlatformAdapter';
import { Accessory } from './nibe/AccessoryHandler';

export let Services: typeof Service;
export let Characteristics: typeof Characteristic;

export const PLATFORM_NAME = 'Nibe';
export const PLUGIN_NAME = 'homebridge-nibe';

/**
 * HomebridgePlatform
 * This class is the main constructor for your plugin, this is where you should
 * parse the user config and discover/register accessories with Homebridge.
 */
export class Platform extends PlatformAdapter implements DynamicPlatformPlugin {

    public readonly accessories: PlatformAccessory[] = [];

    constructor(private readonly log: Logger, private readonly config: PlatformConfig, private readonly api: API) {
        super(api.user.storagePath(), config, log);
        
        Services = this.api.hap.Service;
        Characteristics = this.api.hap.Characteristic;

        this.log.debug('Finished initializing platform');

        // When this event is fired it means Homebridge has restored all cached accessories from disk.
        // Dynamic Platform plugins should only register new accessories after this event was fired,
        // in order to ensure they weren't added to homebridge already. This event can also be used
        // to start discovery of new accessories.
        this.api.on(APIEvent.DID_FINISH_LAUNCHING, () => {
            log.debug('Executed didFinishLaunching callback');
            this.initNibe();
        });
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
        this.accessories.push(accessory);
    }

    public unregisterPlatformAccessories(deleted: PlatformAccessory[]) {
        this.api.unregisterPlatformAccessories(PLUGIN_NAME, PLATFORM_NAME, deleted);
    }

    public getAccessories(): Accessory[] {
        return this.accessories;
    }

    public createAccessory(accessoryId: string): Accessory {
        return new this.api.platformAccessory(accessoryId, this.api.hap.uuid.generate(PLUGIN_NAME + '-' + accessoryId));
    }

    public getServiceType(type: string): any {
        return Services[type];
    }

    public getCharacteristicType(type: string): any {
        return Characteristics[type];
    }
}
