import {AccessoryDefinition, AccessoryInstance, ServiceResolver} from '../AccessoryDomain';
import {Locale} from '../util/Locale';
import {Logger} from '../PlatformDomain';
import {Data} from '../DataDomain';

// https://raw.githubusercontent.com/sebilm/ioBroker.nibeuplink/refs/heads/master/src/parameters.ts
// 40014 - HOT_WATER_CHARGING_BT6
// 40008 - HEAT_MEDIUM_FLOW_BT2
// 48132 - TEMPORARY_LUX

const CURRENT_HEATING_STATE_PROPS = { 'maxValue': 1, 'minValue': 0, 'validValues': [0, 1] }; // off, heat
const TARGET_HEATING_COOLING_STATE_PROPS = { 'perms': [ 'pr', 'ev' ], 'minValue': 3, 'maxValue': 3, 'validValues': [3] }; // auto
const TARGET_TEMPERATURE_PROPS= { 'perms': [ 'pr', 'ev' ], 'maxValue': 70, 'minValue': 10 };
const HEATING_THRESHOLD_TEMPERATURE_PROPS = { 'perms': [ 'pr', 'ev' ], 'maxValue': 70, 'minValue': 10 };
const RO_PROPS = { 'perms': [ 'pr', 'ev' ] };

export class HotWaterAccessory extends AccessoryDefinition {

  constructor(
    protected readonly name: string,
    protected readonly version: number,
    protected readonly locale: Locale,
    protected readonly serviceResolver: ServiceResolver,
    protected readonly log: Logger,
    protected readonly setValue: (deviceId: string, paramId: string, value: any) => Promise<void>,
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
    this.updateThermostat(platformAccessory, data);
    this.updateTemporaryLux(platformAccessory, data);

    super.update(platformAccessory, data);
    this.log.debug(`Accessory ${platformAccessory.context.accessoryId} updated`);
  }

  create(platformAccessory: AccessoryInstance, data: Data) {
    super.create(platformAccessory, data);

    this.createThermostat(platformAccessory);
    this.createTemporaryLux(platformAccessory);

    this.update(platformAccessory, data);
  }

  createTemporaryLux(platformAccessory: AccessoryInstance) {
    const service = this.getOrCreateService('Switch', platformAccessory);
    this.updateCharacteristic(service, 'Name', this.getText(this.name+'-temp-lux'));
    this.updateCharacteristic(service, 'On', false);
  }

  updateTemporaryLux(platformAccessory: AccessoryInstance, data: Data) {
    const service = this.getOrCreateService('Switch', platformAccessory);
    this.updateCharacteristic(service, 'Name', this.getText(this.name+'-temp-lux'));
    const pActive = this.findParameter('48132', data);
    const isTempLuxActive = this.isTempLuxActive(pActive?.value);
    this.updateCharacteristic(service, 'On', isTempLuxActive);
    service.getCharacteristic('On').onSet(async (value) => {
      if (this.isManageEnabled(data)) {
        return this.setValue(data.device.id, '48132', value ? '4' : '0');
      }
      return Promise.resolve();
    });
  }

  createThermostat(platformAccessory: AccessoryInstance) {
    const service = this.getOrCreateService('Thermostat', platformAccessory);
    this.updateCharacteristic(service, 'Name', this.getText(this.name));
    this.updateCharacteristic(service, 'CurrentHeatingCoolingState', 0, CURRENT_HEATING_STATE_PROPS);
    this.updateCharacteristic(service, 'TargetHeatingCoolingState', 3, TARGET_HEATING_COOLING_STATE_PROPS);
    this.updateCharacteristic(service, 'CurrentTemperature', 0);
    this.updateCharacteristic(service, 'TemperatureDisplayUnits', 0, RO_PROPS);
    this.updateCharacteristic(service, 'TargetTemperature', 0, TARGET_TEMPERATURE_PROPS);
  }

  updateThermostat(platformAccessory: AccessoryInstance, data: Data) {
    const service = this.getOrCreateService('Thermostat', platformAccessory);
    const pCurrentTemperature = this.findParameter('40014', data);
    const pHeatPompParam = this.findParameter('43437', data);
    const pTemperatureParam = this.findParameter('40008', data);
    const previousCurrentTemperature = this.getData(platformAccessory, 'previousCurrentTemperature');
    const isHeating = this.isHeating(pHeatPompParam, pTemperatureParam, pCurrentTemperature, previousCurrentTemperature);
    this.updateCharacteristic(service, 'CurrentHeatingCoolingState', isHeating ? 1 : 0, CURRENT_HEATING_STATE_PROPS);

    this.updateCharacteristic(service, 'TargetHeatingCoolingState', 3, TARGET_HEATING_COOLING_STATE_PROPS);
    if (pCurrentTemperature) {
      this.updateCharacteristic(service, 'CurrentTemperature', pCurrentTemperature.value);
      this.updateCharacteristic(service, 'TemperatureDisplayUnits', this.toTemperatureUnit(pCurrentTemperature.unit), RO_PROPS);
      this.putData(platformAccessory, 'previousCurrentTemperature', pCurrentTemperature.value);
    }

    const hotWaterTemp = this.maxValue(this.findParameters([ '40008', '40014' ], data));
    this.updateCharacteristic(service, 'TargetTemperature', hotWaterTemp, TARGET_TEMPERATURE_PROPS);

    this.updateCharacteristic(service, 'HeatingThresholdTemperature', pTemperatureParam?.value || 0, HEATING_THRESHOLD_TEMPERATURE_PROPS);
  }

  isTempLuxActive(value): boolean {
    return value === 4;
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

  isHeating(heatPompParam, temperatureParam, currentTemperature, previousCurrentTemperature) {
    if (!heatPompParam || heatPompParam.rawValue <= 0) {
      return false; // OFF
    }

    if (temperatureParam && temperatureParam.value) {
      if (temperatureParam.value > currentTemperature.value) {
        return true; // HEATING
      }
      if (previousCurrentTemperature < currentTemperature.value) {
        return true; // HEATING
      }
    }

    return false; // OFF
  }
}