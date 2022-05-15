import { MockPlatform, MockAccessory } from './MockPlatform';
import { Data } from '../src/nibe/uplink/nibe-dto';

import * as fs from 'fs';
import * as path from 'path';

const loadData = function(product) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, `./data/${product.replace(/ /g, '-')}.json`), 'utf8'))
}

describe("Tests for not existing product", () => {
  const product = 'XXX';
  const data = loadData(product) as Data;
  const platform = new MockPlatform();
  platform.test(data);
  test('not supported device should not have accessories', () => {
    expect(platform.getAccessories().length).toBe(0);
  });  
});

const outdoorTemperature = function(currentTemp, serialNumber, index = 0) {
  return {id: `nibe-outdoor-temperature-${index}`, tests: [
    {service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe outdoor temperature'},
    {service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: currentTemp},
    {service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber},
  ]}
}

const averageOutdoorTemperature = function(currentTemp, serialNumber, index = 0) {
  return {id: `nibe-average-outdoor-temperature-${index}`, tests: [
    {service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe average outdoor temperature'},
    {service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: currentTemp},
    {service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber},
  ]}
}

const hotWater = function(currentTemp, serialNumber, index = 0) {
  return {id: `nibe-hot-water-${index}`, tests: [
    {service: 'HeaterCooler', characteristic: 'Name', value: 'Nibe hot water temperature'},
    {service: 'HeaterCooler', characteristic: 'CurrentTemperature', value: currentTemp},
    {service: 'HeaterCooler', characteristic: 'Active', value: 0},
    {service: 'HeaterCooler', characteristic: 'CurrentHeaterCoolerState', value: 2},
    {service: 'HeaterCooler', characteristic: 'TargetHeaterCoolerState', value: 0},
    {service: 'HeaterCooler', characteristic: 'TemperatureDisplayUnits', value: 0},
    {service: 'HeaterCooler', characteristic: 'HeatingThresholdTemperature', value: 53},
    {service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber},
  ]}
}

const devices = [
  {
    name: 'F1145-10 PC',
    accessories: [outdoorTemperature(13.5, '06513518228002'), averageOutdoorTemperature(11.9, '06513518228002'), hotWater(41.2, '06513518228002')]
  },
  {
    name: 'F750 CU 3x400V',
    accessories: [outdoorTemperature(8.5, '06603615321011'), averageOutdoorTemperature(4, '06603615321011'), hotWater(47.7, '06603615321011')]
  },
  {
    name: 'VVM 500',
    data: 'VVM-500&F2120-12',
    accessories: [outdoorTemperature(15.1, '06940017328003'), averageOutdoorTemperature(15.9, '06940017328003'), hotWater(47.9, '06940017328003')]
  },
  {
    name: 'F2120-12',
    data: 'VVM-500&F2120-12',
    accessories: [outdoorTemperature(13.7, '00000000', 1)]
  },
  {
    name: 'F370 CU 3x400V',
    accessories: [outdoorTemperature(11.3, '06605520349022'), averageOutdoorTemperature(4, '06605520349022'), hotWater(52.5, '06605520349022')]
  },
  {
    name: 'VVM 320 E',
    data: 'VVM-320-E&F2040-12',
    accessories: [outdoorTemperature(14.7, '06911015040005'), averageOutdoorTemperature(9.6, '06911015040005'), hotWater(49.3, '06911015040005')]
  },
  {
    name: 'F2040-12',
    data: 'VVM-320-E&F2040-12',
    accessories: [outdoorTemperature(17.9, '00000000', 1)]
  },
  {
    name: 'F1245-6 E PC EM',
    accessories: [outdoorTemperature(9.4, '06512120028002'), averageOutdoorTemperature(6.6, '06512120028002'), hotWater(49.7, '06512120028002')]
  },
  {
    name: 'F1255-6 E EM',
    accessories: [outdoorTemperature(16.8, '06527019179011'), averageOutdoorTemperature(22.3, '06527019179011'), hotWater(45.8, '06527019179011')]
  },
  {
    name: 'F1255-6 R PC EM 3x400V',
    accessories: [outdoorTemperature(18, '06549021042001'), averageOutdoorTemperature(19.4, '06549021042001'), hotWater(53.3, '06549021042001')]
  },
  {
    name: 'SMO 40',
    data: 'SMO-40&F2040-6',
    accessories: [outdoorTemperature(18, '06722519232754'), averageOutdoorTemperature(13.3, '06722519232754'), hotWater(47.5, '06722519232754')]
  },
  {
    name: 'F2040-6',
    data: 'SMO-40&F2040-6',
    accessories: [outdoorTemperature(26.8, '00000000', 1)]
  }
];

devices.forEach(device => {
  describe(`Tests for ${device.name}`, () => {
    const product = device.data || device.name;
    const data = loadData(product) as Data;
    const platform = new MockPlatform();
    platform.test(data);
  
    device.accessories.forEach(accessory => {
      let mockAccessory = platform.getAccessoryById(accessory.id) as MockAccessory;
      test(`${accessory.id}: should be defined and configured`, () => {
        expect(mockAccessory).toBeDefined();
        expect(mockAccessory.get('AccessoryInformation', 'Manufacturer')).toBe('Nibe');
        expect(mockAccessory.get('AccessoryInformation', 'Model')).toBe(device.name);
        accessory.tests.forEach(test => {
          expect(mockAccessory.get(test.service, test.characteristic)).toBe(test.value);
        });
      });  
    });  
  });
});