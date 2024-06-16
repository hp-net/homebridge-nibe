import {
  API,
  APIEvent,
  Characteristic,
  DynamicPlatformPlugin,
  Logger,
  PlatformAccessory,
  PlatformConfig,
  Service,
} from 'homebridge';
import {MyUplinkApiFetcher} from './myuplink/MyUplinkApiFetcher';
import {AccessoryHandler} from './AccessoryHandler';
import {DataFetcher} from './DataFetcher';
import * as dataDomain from './DataDomain';
import {Accessory} from './PlatformDomain';

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
  private readonly dataFetcher: DataFetcher;
  private readonly handler: AccessoryHandler;

  constructor(private readonly log: Logger, private readonly config: PlatformConfig, private readonly api: API) {
    Services = this.api.hap.Service;
    Characteristics = this.api.hap.Characteristic;

    this.dataFetcher = new MyUplinkApiFetcher({
      clientId: config.identifier,
      clientSecret: config.secret,
      interval: config.pollingPeriod || 60,
      language: config.language,
      showApiResponse: config.language || false,
    }, log);

    this.handler = new AccessoryHandler(this);

    this.log.debug('Finished initializing platform');

    // When this event is fired it means Homebridge has restored all cached accessories from disk.
    // Dynamic Platform plugins should only register new accessories after this event was fired,
    // in order to ensure they weren't added to homebridge already. This event can also be used
    // to start discovery of new accessories.
    this.api.on(APIEvent.DID_FINISH_LAUNCHING, () => {
      log.debug('Executed didFinishLaunching callback');
      this.dataFetcher
        .on<dataDomain.Data>('data', (data) => {
          this.handler.handleData(data);
        }).on('error', (data) => {
          this.log.error('Error:', data);
        });
    });
  }

  public getConfig(name: string): any {
    return this.config[name];
  }

  public getLogger(): Logger {
    return this.log;
  }

  /**
     * This function is invoked when homebridge restores cached accessories from disk at startup.
     * It should be used to setup event handlers for characteristics and update respective values.
     */
  configureAccessory(accessory: PlatformAccessory) {
    this.log.info( `Loading accessory from cache: [${accessory.displayName}], UUID: [${accessory.UUID}]`);
    this.accessories.push(accessory);
  }  

  public registerPlatformAccessories(accessory: PlatformAccessory) {
    this.api.registerPlatformAccessories(PLUGIN_NAME, PLATFORM_NAME, [accessory]);
    this.accessories.push(accessory);
  }

  public unregisterPlatformAccessories(deleted: PlatformAccessory[]) {
    if (this.accessories.filter(a => deleted.includes(a)).length === 0) {
      return;
    }

    deleted.forEach(a => {
      this.log.debug(`Unregistering: ${a.displayName}`);
    });
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
