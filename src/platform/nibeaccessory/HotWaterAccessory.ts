import {AccessoryDefinition, AccessoryInstance, ServiceResolver} from '../AccessoryDomain';
import {Locale} from '../util/Locale';
import {Logger} from '../PlatformDomain';
import {Data} from '../DataDomain';

// 40014 - HOT_WATER_CHARGING_BT6
// 40008 - HEAT_MEDIUM_FLOW_BT2
// 48132 - TEMPORARY_LUX

export class HotWaterAccessory extends AccessoryDefinition {

  constructor(
    protected readonly name: string,
    protected readonly version: number,
    protected readonly locale: Locale,
    protected readonly serviceResolver: ServiceResolver,
    protected readonly log: Logger,
  ) {
    super(name, version, locale, serviceResolver, log);
  }

  isApplicable(data: Data): boolean {
    const result1 = this.findParameter('40014', data);
    const result2 = this.findParameter('40008', data);
    if (result1 && result2) {
      return true;
    }
    this.log.debug(`Conditions not meet for accessory: [${this.buildIdentifier(data)}]`);
    return false;
  }

  update(platformAccessory: AccessoryInstance, data: Data) {
    const hotWaterService = this.getOrCreateService('HeaterCooler', platformAccessory);
    if (!hotWaterService) {
      return;
    }
    const parameterCurrentTemperature = this.findParameter('40014', data);
    if (parameterCurrentTemperature) {
      hotWaterService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('CurrentTemperature'), parameterCurrentTemperature.value);
    }
    const parameterActive = this.findParameter('48132', data);
    if (parameterActive) {
      hotWaterService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('Active'), this.toBoolean(parameterActive.value));
    }

    super.update(platformAccessory, data);
    this.log.debug(`Accessory ${platformAccessory.context.accessoryId} updated`);
  }

  create(platformAccessory: AccessoryInstance, data: Data) {
    super.create(platformAccessory, data);

    const hotWaterService = this.getOrCreateService('HeaterCooler', platformAccessory);
    hotWaterService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('Name'), this.getText(this.name));
    hotWaterService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('CurrentTemperature'), 0);
    hotWaterService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('Active'), false);
    this.update(platformAccessory, data);
  }

  toBoolean(value): boolean {
    return !['false', '0'].includes(JSON.stringify(value));
  }
}