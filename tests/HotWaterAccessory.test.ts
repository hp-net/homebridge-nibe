import {deviceInfo, loadData, mockAccessory, serviceResolver, testDevice, testLogger, testSystem} from './test-utils';
import {Locale} from '../src/platform/util/Locale';
import {MyUplinkApiFetcher} from '../src/platform/myuplink/MyUplinkApiFetcher';
import {AccessoryInstance} from '../src/platform/AccessoryDomain';
import {HotWaterAccessory} from '../src/platform/nibeaccessory/HotWaterAccessory';

describe('Test HotWaterAccessory', () => {

  const accessoryDefinition = new HotWaterAccessory(
    'hot-water',
    1,
    new Locale('en', testLogger),
    serviceResolver,
    testLogger,
    async (deviceId: string, paramId: string, value: any) => {
      return Promise.resolve();
    },
  );

  const data = MyUplinkApiFetcher.mapData(testSystem, [], testDevice, deviceInfo, loadData('F1145-10-PC'));

  test('HotWaterAccessory: should be applicable', () => {
    expect(accessoryDefinition.isApplicable(data)).toBeTruthy();
  });

  test('HotWaterAccessory: create should set parameters', () => {
    const platformAccessory = mockAccessory();
    accessoryDefinition.create(platformAccessory as AccessoryInstance, data);

    expect(platformAccessory.getValue('Thermostat', 'Name')).toBe('Nibe hot water temperature');
    expect(platformAccessory.getValue('Thermostat', 'TargetHeatingCoolingState')).toBe(3);
    expect(platformAccessory.getValue('Thermostat', 'CurrentHeatingCoolingState')).toBe(0);
    expect(platformAccessory.getValue('Thermostat', 'CurrentTemperature')).toBe(46.1);
    expect(platformAccessory.getValue('Thermostat', 'TemperatureDisplayUnits')).toBe(0);
    expect(platformAccessory.getValue('Thermostat', 'TargetTemperature')).toBe(59.2);
    expect(platformAccessory.getValue('Thermostat', 'HeatingThresholdTemperature')).toBe(59.2);
  });
});