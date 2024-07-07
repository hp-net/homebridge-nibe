import {loadData, mockAccessory, testDevice, testLogger, testSystem} from './test-utils';
import {Locale} from '../src/platform/util/Locale';
import {MyUplinkApiFetcher} from '../src/platform/myuplink/MyUplinkApiFetcher';
import {AccessoryDefinition} from '../src/platform/AccessoryDomain';
import {Data} from '../src/platform/DataDomain';
import {Logger} from '../src/platform/PlatformDomain';

describe('Test common accessory functionalities', () => {

  class TestAccessory extends AccessoryDefinition {
    constructor(
      protected readonly locale: Locale,
      protected readonly log: Logger,
    ) {
      super('test', 1, locale, log);
    }

    isApplicable(data: Data): boolean {
      return true;
    }
  }

  const accessoryDefinition = new TestAccessory(
    new Locale('en', testLogger),
    testLogger,
  );

  const data = MyUplinkApiFetcher.mapData(testSystem, testDevice, loadData('F1145-10-PC'));

  test('TemperatureSensorAccessory: create should set parameters', () => {
    const platformAccessory = mockAccessory();
    accessoryDefinition.create(platformAccessory, data);

    expect(platformAccessory.context.accessoryId).toBe(0);
    expect(platformAccessory.context.version).toBe(0);
    expect(platformAccessory.context.systemId).toBe(0);
    expect(platformAccessory.context.systemName).toBe(0);
    expect(platformAccessory.context.deviceId).toBe(0);
    expect(platformAccessory.context.deviceName).toBe(0);
    expect(platformAccessory.context.lastUpdate).toBe(0);


    //   const accessoryInformationService = this.getOrCreateService(Services.AccessoryInformation, platformAccessory);
    //   accessoryInformationService.updateCharacteristic(Characteristics.Manufacturer, 'Nibe');
    //   accessoryInformationService.updateCharacteristic(Characteristics.Model, `${data.device.name} (${data.system.name})`);
    //   accessoryInformationService.updateCharacteristic(Characteristics.SerialNumber, data.device.serialNumber);

  });
});

