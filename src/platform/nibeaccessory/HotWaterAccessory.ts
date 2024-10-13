import {AccessoryDefinition, AccessoryInstance, ServiceResolver} from '../AccessoryDomain';
import {Locale} from '../util/Locale';
import {Logger} from '../PlatformDomain';
import {Data} from '../DataDomain';

// https://raw.githubusercontent.com/sebilm/ioBroker.nibeuplink/refs/heads/master/src/parameters.ts
// 40014 - HOT_WATER_CHARGING_BT6
// 40008 - HEAT_MEDIUM_FLOW_BT2
// 48132 - TEMPORARY_LUX

const TARGET_HEATER_COOLER_STATE_PROPS = { 'perms': [ 'pr', 'ev' ], 'minValue': 0, 'maxValue': 1, 'validValues': [0, 1] };
const HEATING_TRESHOLD_TEMPERATURE_PROPS = { 'maxValue': 70, 'perms': [ 'pr', 'ev' ] };
const CURRENT_HEATING_STATE_PROPS = { 'perms': [ 'pr', 'ev' ], 'maxValue': 2, 'minValue': 1, 'validValues': [1, 2] };
const RO_PROPS = { 'perms': [ 'pr', 'ev' ] };

export class HotWaterAccessory extends AccessoryDefinition {

  constructor(
    protected readonly name: string,
    protected readonly version: number,
    protected readonly locale: Locale,
    protected readonly serviceResolver: ServiceResolver,
    protected readonly log: Logger,
    protected readonly config: { hotWaterHeatingTemp: number },
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

    console.log('XXXXXXX: ' + JSON.stringify(this.isManageEnabled(data)));
    // lux switch
    if (this.isManageEnabled(data)) {
      const service1 = this.getOrCreateService('Switch', platformAccessory);
      this.updateCharacteristic(service1, 'On', false);
      this.updateCharacteristic(service1, 'Name', 'Lux');
      const pActive = this.findParameter('48132', data);
      if (pActive) {
        this.updateCharacteristic(service, 'Active', this.toBoolean(pActive.value) ? 1 : 0, RO_PROPS);
        service.getCharacteristic('Active').onSet(value => console.log('XXXXXX ' + JSON.stringify(value)));
      }
      // TargetTemperature
    } else {
      // occupancy sensor
    }

    // thermostat
    const service = this.getOrCreateService('Thermostat', platformAccessory);
    if (!service) {
      return;
    }
    const pCurrentTemperature = this.findParameter('40014', data);
    if (pCurrentTemperature) {
      this.updateCharacteristic(service, 'CurrentTemperature', pCurrentTemperature.value);
      this.updateCharacteristic(service, 'TemperatureDisplayUnits', this.toTemperatureUnit(pCurrentTemperature.unit), RO_PROPS);
    }
    const hotWaterTemp = this.maxValue(this.findParameters([ '40008', '40014' ], data));
    if (hotWaterTemp) {
      this.updateCharacteristic(service, 'HeatingThresholdTemperature', hotWaterTemp, HEATING_TRESHOLD_TEMPERATURE_PROPS);
    }
    const pHeatPompParam = this.findParameter('43437', data);
    const pTemperatureParam = this.findParameter('40008', data);
    const previousValue = this.getCharacteristicValue(service, 'CurrentHeaterCoolerState');
    const isHeating = this.isHeating(pHeatPompParam, pTemperatureParam, previousValue);
    this.updateCharacteristic(service, 'CurrentHeaterCoolerState', isHeating ? 2 : 1, CURRENT_HEATING_STATE_PROPS);
    this.updateCharacteristic(service, 'TargetTemperature', 0, TARGET_HEATER_COOLER_STATE_PROPS);

    super.update(platformAccessory, data);
    this.log.debug(`Accessory ${platformAccessory.context.accessoryId} updated`);
  }

  create(platformAccessory: AccessoryInstance, data: Data) {
    super.create(platformAccessory, data);

    const service = this.getOrCreateService('Thermostat', platformAccessory);
    this.updateCharacteristic(service, 'Name', this.getText(this.name));
    this.updateCharacteristic(service, 'CurrentHeaterCoolerState', 1, CURRENT_HEATING_STATE_PROPS);
    this.updateCharacteristic(service, 'TargetHeaterCoolerState', 0, TARGET_HEATER_COOLER_STATE_PROPS);
    this.updateCharacteristic(service, 'CurrentTemperature', 0);
    this.updateCharacteristic(service, 'TemperatureDisplayUnits', 0, RO_PROPS);
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

  isHeating(heatPompParam, temperatureParam, previousValue) {
    if (!heatPompParam || heatPompParam.rawValue <= 0) {
      return false; //IDLE 1
    }

    if (temperatureParam && temperatureParam.value) {
      if (temperatureParam.value > this.config.hotWaterHeatingTemp) {
        return true; //HEATING 2
      }
      if (previousValue < temperatureParam.value) {
        return true; //HEATING
      }
    }

    return false; //IDLE
  }
}