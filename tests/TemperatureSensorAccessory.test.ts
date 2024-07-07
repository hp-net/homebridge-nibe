import {TemperatureSensorAccessory} from '../src/platform/nibeaccessory/TemperatureSensorAccessory';
import {loadData, mockAccessory, testDevice, testLogger, testSystem} from './test-utils';
import {Locale} from '../src/platform/util/Locale';
import {MyUplinkApiFetcher} from '../src/platform/myuplink/MyUplinkApiFetcher';

describe('Test TemperatureSensorAccessory', () => {

  const accessoryDefinition = new TemperatureSensorAccessory(
    '40067',
    'average-outdoor-temperature-40067',
    1,
    new Locale('en', testLogger),
    testLogger,
  );

  const data = MyUplinkApiFetcher.mapData(testSystem, testDevice, loadData('F1145-10-PC'));

  test('TemperatureSensorAccessory: should be applicable', () => {
    expect(accessoryDefinition.isApplicable(data)).toBeTruthy();
  });

  test('TemperatureSensorAccessory: create should set parameters', () => {
    const platformAccessory = mockAccessory();
    accessoryDefinition.create(platformAccessory, data);

    // expect(platformAccessory).toBe(0);

    // temperatureSensorService.updateCharacteristic(Characteristics.CurrentTemperature, 0);
    // temperatureSensorService.updateCharacteristic(Characteristics.Name, this.getText(this.name));
  });
});