import {deviceInfo, loadData, mockAccessory, serviceResolver, testDevice, testLogger, testSystem} from './test-utils';
import {Locale} from '../src/platform/util/Locale';
import {MyUplinkApiFetcher} from '../src/platform/myuplink/MyUplinkApiFetcher';
import {AccessoryInstance} from '../src/platform/AccessoryDomain';
import {NewFirmwareAccessory} from '../src/platform/nibeaccessory/NewFirmwareAccessory';

describe('Test NewFirmwareAccessory', () => {

  const accessoryDefinition = new NewFirmwareAccessory(
    'new-firmware',
    1,
    new Locale('en', testLogger),
    serviceResolver,
    testLogger,
  );

  const data = MyUplinkApiFetcher.mapData(testSystem, [], testDevice, deviceInfo, loadData('F1145-10-PC'));

  test('NewFirmwareAccessory: should be applicable', () => {
    expect(accessoryDefinition.isApplicable(data)).toBeTruthy();
  });

  test('NewFirmwareAccessory: create should set parameters', () => {
    const platformAccessory = mockAccessory();
    accessoryDefinition.create(platformAccessory as AccessoryInstance, data);

    expect(platformAccessory.getValue('OccupancySensor', 'OccupancyDetected')).toBe(1);
    expect(platformAccessory.getValue('OccupancySensor', 'Name')).toBe('Update F1145-10 PC');
  });
});