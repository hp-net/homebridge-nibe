import {deviceInfo, loadData, mockAccessory, serviceResolver, testDevice, testLogger, testSystem} from './test-utils';
import {Locale} from '../src/platform/util/Locale';
import {MyUplinkApiFetcher} from '../src/platform/myuplink/MyUplinkApiFetcher';
import {AccessoryDefinition, AccessoryInstance} from '../src/platform/AccessoryDomain';
import {Data} from '../src/platform/DataDomain';
import {Logger} from '../src/platform/PlatformDomain';

describe('Test common accessory functionalities', () => {

  class TestAccessory extends AccessoryDefinition {
    constructor(
      protected readonly locale: Locale,
      protected readonly log: Logger,
    ) {
      super('test', 1, locale, serviceResolver, log);
    }

    isApplicable(data: Data): boolean {
      return true;
    }
  }

  const accessoryDefinition = new TestAccessory(
    new Locale('en', testLogger),
    testLogger,
  );

  const data = MyUplinkApiFetcher.mapData(testSystem, [], testDevice, deviceInfo, loadData('F1145-10-PC'));

  test('TestAccessory: create should set context and parameters', () => {
    const platformAccessory = mockAccessory();
    const startEpoch = Date.now();
    accessoryDefinition.create(platformAccessory as AccessoryInstance, data);

    expect(platformAccessory.context.accessoryId).toBe('emmy-r-test::test');
    expect(platformAccessory.context.version).toBe(1);
    expect(platformAccessory.context.systemId).toBe('42f23d18');
    expect(platformAccessory.context.systemName).toBe('Dom');
    expect(platformAccessory.context.deviceId).toBe('emmy-r-test');
    expect(platformAccessory.context.deviceName).toBe('F1145-10 PC');
    expect(platformAccessory.context.lastUpdate).toBeGreaterThanOrEqual(startEpoch);

    expect(platformAccessory.getValue('AccessoryInformation', 'Manufacturer')).toBe('Nibe');
    expect(platformAccessory.getValue('AccessoryInformation', 'Model')).toBe('F1145-10 PC (Dom)');
    expect(platformAccessory.getValue('AccessoryInformation', 'SerialNumber')).toBe('666');
  });
});

