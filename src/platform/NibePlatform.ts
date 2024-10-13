import {API, APIEvent, DynamicPlatformPlugin, Logger, PlatformAccessory, PlatformConfig} from 'homebridge';
import {MyUplinkApiFetcher} from './myuplink/MyUplinkApiFetcher';
import * as dataDomain from './DataDomain';
import {Data, DataFetcher} from './DataDomain';
import {Locale} from './util/Locale';
import {
  AccessoryContext,
  AccessoryDefinition,
  AccessoryInstance,
  ServiceResolver,
  ServiceType,
} from './AccessoryDomain';
import {TemperatureSensorAccessory} from './nibeaccessory/TemperatureSensorAccessory';
import {HotWaterAccessory} from './nibeaccessory/HotWaterAccessory';
import {NewFirmwareAccessory} from './nibeaccessory/NewFirmwareAccessory';

export const PLATFORM_NAME = 'Nibe';
export const PLUGIN_NAME = 'homebridge-nibe';

/**
 * HomebridgePlatform
 * This class is the main constructor for your plugin, this is where you should
 * parse the user config and discover/register accessories with Homebridge.
 */
export class NibePlatform implements DynamicPlatformPlugin {

  private readonly dataFetcher: DataFetcher;
  private readonly accessories: AccessoryInstance[] = [];
  private readonly accessoryDefinitions: AccessoryDefinition[];
  private readonly locale: Locale;
  private readonly serviceResolver: ServiceResolver;

  constructor(private readonly log: Logger, private readonly config: PlatformConfig, private readonly api: API) {
    this.locale = new Locale(config.language, log);

    this.serviceResolver = {
      resolveCharacteristic(type: any) {
        return api.hap.Characteristic[type];
      },
      resolveService(type: ServiceType) {
        return api.hap.Service[type];
      },
    } as ServiceResolver;

    this.dataFetcher = new MyUplinkApiFetcher({
      clientId: config.identifier,
      clientSecret: config.secret,
      interval: config.pollingPeriod || 60,
      language: config.language,
      showApiResponse: config.showApiResponse || false,
    }, log);

    this.accessoryDefinitions = [
      new TemperatureSensorAccessory('40067', 'average-outdoor-temperature-40067', 1, this.locale, this.serviceResolver, this.log),
      new TemperatureSensorAccessory('40004', 'outdoor-temperature-40004', 1, this.locale, this.serviceResolver, this.log),
      new TemperatureSensorAccessory('44362', 'outdoor-temperature-44362', 1, this.locale, this.serviceResolver, this.log),
      new TemperatureSensorAccessory('40025', 'ventilation-exhaust-air-40025', 1, this.locale, this.serviceResolver, this.log),
      new TemperatureSensorAccessory('40026', 'ventilation-extract-air-40026', 1, this.locale, this.serviceResolver, this.log),
      new TemperatureSensorAccessory('40075', 'ventilation-supply-air-40075', 1, this.locale, this.serviceResolver, this.log),
      new TemperatureSensorAccessory('40183', 'ventilation-outdoor-40183', 1, this.locale, this.serviceResolver, this.log),
      new TemperatureSensorAccessory('40013', 'hot-water-top-40013', 1, this.locale, this.serviceResolver, this.log),
      new HotWaterAccessory('hot-water', 3, this.locale, this.serviceResolver, this.log, { hotWaterHeatingTemp: config.hotwaterHeatingTemp || 40 }),
      new NewFirmwareAccessory('new-firmware', 1, this.locale, this.serviceResolver, this.log),
    ];


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
          this.handleData(data);
        }).on('error', (data) => {
          this.log.error('Error:', data);
        });
    });

    this.api.on(APIEvent.SHUTDOWN, () => {
      this.dataFetcher.stop();
    });
  }

  public handleData(data: Data): void {
    const touchedAccessoriesIds = Array<string>();

    this.accessoryDefinitions.forEach(accessoryDefinition => {
      const isApplicable = accessoryDefinition.isApplicable(data);
      const accessoryId = accessoryDefinition.buildIdentifier(data);
      const isDisabled = this.isDisabled(accessoryId);

      if (isApplicable && !isDisabled) {
        const platformAccessory = this.accessories.find(a => a.context.accessoryId === accessoryId);
        if (platformAccessory) {
          this.updateAccessory(accessoryDefinition, platformAccessory, data);
        } else {
          this.createAccessory(accessoryId, accessoryDefinition, data);
        }
        touchedAccessoriesIds.push(accessoryId);
      }
    });

    this.removeNotExistingAccessories(data.system.systemId, data.device.id, touchedAccessoriesIds);
  }

  private createAccessory(accessoryId: string, accessoryDefinition: AccessoryDefinition, data: Data) {
    this.log.info('Adding new accessory: [%s]', accessoryId);
    const platformAccessory = new this.api.platformAccessory<AccessoryContext>(
      accessoryDefinition.buildName(data),
      this.api.hap.uuid.generate(PLUGIN_NAME + '-' + accessoryId),
    ) as AccessoryInstance;
    accessoryDefinition.create(platformAccessory, data);
    this.api.registerPlatformAccessories(PLUGIN_NAME, PLATFORM_NAME, [platformAccessory as PlatformAccessory<AccessoryContext>]);
    this.accessories.push(platformAccessory);
  }

  private updateAccessory(accessoryDefinition: AccessoryDefinition, platformAccessory: AccessoryInstance, data: Data) {
    if (!accessoryDefinition.isCurrentVersion(platformAccessory)) {
      this.log.info('Old version of accessory, recreating: [%s]',
        platformAccessory.context.accessoryId);
      accessoryDefinition.create(platformAccessory, data);
    }

    this.log.debug('Updating accessory: [%s]', platformAccessory.context.accessoryId);
    accessoryDefinition.update(platformAccessory, data);
  }

  private isDisabled(accessoryId: string) {
    if (this.config.disabledAccessories &&
      this.config.disabledAccessories.some(da => (da.indexOf(';') > 0 ? da.substring(0, da.indexOf(';')) : da) === accessoryId)) {
      this.log.debug('Disabled accessory: [%s]', accessoryId);
      return true;
    }
    return false;
  }

  private removeNotExistingAccessories(systemId: string, deviceId: string, existingAccessoriesIds: string[]) {
    this.accessories
      .filter(accessory => accessory.context.systemId === systemId)
      .filter(accessory => accessory.context.deviceId === deviceId)
      .filter(accessory => !existingAccessoriesIds.includes(accessory.context.accessoryId))
      .forEach(accessory => this.api.unregisterPlatformAccessories(PLUGIN_NAME, PLATFORM_NAME, [accessory as PlatformAccessory<AccessoryContext>]));
  }

  /**
   * This function is invoked when homebridge restores cached accessories from disk at startup.
   * It should be used to setup event handlers for characteristics and update respective values.
   */
  configureAccessory(accessory: PlatformAccessory<AccessoryContext>) {
    this.log.info( `Loading accessory from cache: [${accessory.displayName}], UUID: [${accessory.UUID}]`);
    this.accessories.push(accessory as AccessoryInstance);
  }
}
