import {TemperatureSensorAccessory} from '../src/platform/nibeaccessory/TemperatureSensorAccessory';
import {loadData, mockAccessory, serviceResolver, testDevice, testLogger, testSystem} from './test-utils';
import {Locale} from '../src/platform/util/Locale';
import {MyUplinkApiFetcher} from '../src/platform/myuplink/MyUplinkApiFetcher';
import {AccessoryInstance} from '../src/platform/AccessoryDomain';

describe('Test TemperatureSensorAccessory', () => {

  const accessoryDefinition = new TemperatureSensorAccessory(
    '40067',
    'average-outdoor-temperature-40067',
    1,
    new Locale('en', testLogger),
    serviceResolver,
    testLogger,
  );

  const data = MyUplinkApiFetcher.mapData(testSystem, testDevice, loadData('F1145-10-PC'));

  test('TemperatureSensorAccessory: should be applicable', () => {
    expect(accessoryDefinition.isApplicable(data)).toBeTruthy();
  });

  test('TemperatureSensorAccessory: create should set parameters', () => {
    const platformAccessory = mockAccessory();
    accessoryDefinition.create(platformAccessory as AccessoryInstance, data);

    expect(platformAccessory.getValue('TemperatureSensor', 'CurrentTemperature')).toBe(22.9);
    expect(platformAccessory.getValue('TemperatureSensor', 'Name')).toBe('Nibe average outdoor temperature');
  });
});