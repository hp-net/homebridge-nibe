import {AccessoryDefinition, AccessoryInstance, ServiceResolver} from '../AccessoryDomain';
import {Locale} from '../util/Locale';
import {Logger} from '../PlatformDomain';
import {Data} from '../DataDomain';

// https://raw.githubusercontent.com/sebilm/ioBroker.nibeuplink/refs/heads/master/src/parameters.ts
// 40014 - HOT_WATER_CHARGING_BT6
// 40008 - HEAT_MEDIUM_FLOW_BT2
// 48132 - TEMPORARY_LUX

const TARGET_HEATER_COOLER_STATE_PROPS = { 'perms': [ 'pr', 'ev' ], 'minValue': 0, 'maxValue': 0 };
const HEATING_TRESHOLD_TEMPERATURE_PROPS = { 'maxValue': 70, 'perms': [ 'pr', 'ev' ] };
const RO_PROPS = { 'perms': [ 'pr', 'ev' ] };

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
    const service = this.getOrCreateService('HeaterCooler', platformAccessory);
    if (!service) {
      return;
    }
    const pCurrentTemperature = this.findParameter('40014', data);
    if (pCurrentTemperature) {
      this.updateCharacteristic(service, 'CurrentTemperature', pCurrentTemperature.value);
      this.updateCharacteristic(service, 'TemperatureDisplayUnits', this.toTemperatureUnit(pCurrentTemperature.unit), RO_PROPS);
    }
    const pActive = this.findParameter('48132', data);
    if (pActive) {
      this.updateCharacteristic(service, 'Active', this.toBoolean(pActive.value));
    }
    this.updateCharacteristic(service, 'TargetHeaterCoolerState', 0, TARGET_HEATER_COOLER_STATE_PROPS);

    const pHotWaterTemp = this.findParameters([ '40008', '40014' ], data);
    this.updateCharacteristic(service, 'HeatingThresholdTemperature', this.maxValue(pHotWaterTemp), HEATING_TRESHOLD_TEMPERATURE_PROPS);

    super.update(platformAccessory, data);
    this.log.debug(`Accessory ${platformAccessory.context.accessoryId} updated`);
  }

  create(platformAccessory: AccessoryInstance, data: Data) {
    super.create(platformAccessory, data);

    const service = this.getOrCreateService('HeaterCooler', platformAccessory);
    this.updateCharacteristic(service, 'Name', this.getText(this.name));
    this.updateCharacteristic(service, 'CurrentTemperature', 0);
    this.updateCharacteristic(service, 'TemperatureDisplayUnits', 0, RO_PROPS);
    this.updateCharacteristic(service, 'Active', false);
    this.updateCharacteristic(service, 'TargetHeaterCoolerState', 0, TARGET_HEATER_COOLER_STATE_PROPS);
    this.updateCharacteristic(service, 'HeatingThresholdTemperature', 0, HEATING_TRESHOLD_TEMPERATURE_PROPS);

    this.update(platformAccessory, data);
  }

  toBoolean(value): boolean {
    return !['false', '0'].includes(JSON.stringify(value));
  }

  toTemperatureUnit(value) {
    return value === '°F' ? 1 : 0;
  }

  maxValue(parameters) {
    let max = undefined;
    for (const param of parameters) {
      if (param && param.value && (max === undefined || param.value > max)) {
        max = param.value;
      }
    }
    return max;
  }
}