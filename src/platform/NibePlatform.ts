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
import {Locale} from './util/Locale';
import {AccessoryContext} from './AccessoryDomain';
import {Platform} from './PlatformDomain';
import {TemperatureSensorAccessory} from './nibeaccessory/TemperatureSensorAccessory';

export let Services: typeof Service;
export let Characteristics: typeof Characteristic;

export const PLATFORM_NAME = 'Nibe';
export const PLUGIN_NAME = 'homebridge-nibe';

/**
 * HomebridgePlatform
 * This class is the main constructor for your plugin, this is where you should
 * parse the user config and discover/register accessories with Homebridge.
 */
export class NibePlatform implements DynamicPlatformPlugin, Platform {

  private readonly accessories: PlatformAccessory<AccessoryContext>[] = [];
  private readonly dataFetcher: DataFetcher;
  private readonly accessoryHandler: AccessoryHandler;
  private readonly locale: Locale;

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

    this.accessoryHandler = new AccessoryHandler(
      [
        new TemperatureSensorAccessory('40067', 'average-outdoor-temperature-40067', 1, this),
        new TemperatureSensorAccessory('40004', 'outdoor-temperature-40004', 1, this),
        new TemperatureSensorAccessory('44362', 'outdoor-temperature-44362', 1, this),
        new TemperatureSensorAccessory('40025', 'ventilation-exhaust-air-40025', 1, this),
        new TemperatureSensorAccessory('40026', 'ventilation-extract-air-40026', 1, this),
        new TemperatureSensorAccessory('40075', 'ventilation-supply-air-40075', 1, this),
        new TemperatureSensorAccessory('40183', 'ventilation-outdoor-40183', 1, this),
        new TemperatureSensorAccessory('40013', 'hot-water-top-40013', 1, this),
      ], this);
    this.locale = new Locale(config.language, log);

    this.log.debug('Finished initializing platform');

    // When this event is fired it means Homebridge has restored all cached accessories from disk.
    // Dynamic Platform plugins should only register new accessories after this event was fired,
    // in order to ensure they weren't added to homebridge already. This event can also be used
    // to start discovery of new accessories.
    this.api.on(APIEvent.DID_FINISH_LAUNCHING, () => {
      log.debug('Executed didFinishLaunching callback');
      this.dataFetcher.start();
      this.dataFetcher
        .on<dataDomain.Data>('data', (data) => {
          this.accessoryHandler.handleData(data);
        }).on('error', (data) => {
          this.log.error('Error:', data);
        });
    });

    this.api.on(APIEvent.SHUTDOWN, () => {
      this.dataFetcher.stop();
    });
  }

  getConfig(name: string): any {
    return this.config[name];
  }

  getLogger(): Logger {
    return this.log;
  }

  getText(key: string): string {
    return this.locale.text(key, '') || '';
  }

  /**
     * This function is invoked when homebridge restores cached accessories from disk at startup.
     * It should be used to setup event handlers for characteristics and update respective values.
     */
  configureAccessory(accessory: PlatformAccessory<AccessoryContext>) {
    this.log.info( `Loading accessory from cache: [${accessory.displayName}], UUID: [${accessory.UUID}]`);
    this.accessories.push(accessory);
  }

  registerPlatformAccessories(accessory: PlatformAccessory<AccessoryContext>) {
    this.api.registerPlatformAccessories(PLUGIN_NAME, PLATFORM_NAME, [accessory]);
    this.accessories.push(accessory);
  }

  unregisterPlatformAccessories(deleted: PlatformAccessory<AccessoryContext>) {
    this.log.debug(`Unregistering: ${deleted.displayName}`);
    this.api.unregisterPlatformAccessories(PLUGIN_NAME, PLATFORM_NAME, [deleted]);
  }

  getAccessories(): PlatformAccessory<AccessoryContext>[] {
    return this.accessories;
  }

  createAccessory(name: string, accessoryId: string): PlatformAccessory<AccessoryContext> {
    return new this.api.platformAccessory(name, this.api.hap.uuid.generate(PLUGIN_NAME + '-' + accessoryId));
  }
}
