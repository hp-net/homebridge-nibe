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

const averageOutdoorTemperature = function(avgTemp, serialNumber, index = 0) {
  return {id: `nibe-average-outdoor-temperature-${index}`, tests: [
    {service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe average outdoor temperature'},
    {service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: avgTemp},
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

const hotWaterTop = function(temp, serialNumber, index = 0) {
  return {id: `nibe-hot-water-top-${index}`, tests: [
    {service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe top hot water temperature'},
    {service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: temp},
    {service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber},
  ]}
}

const ersExhaustAir = function(temp, serialNumber, index = 0) {
  return {id: `nibe-ers-exhaust-air-${index}`, tests: [
    {service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe ERS exhaust air temperature'},
    {service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: temp},
    {service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber},
  ]}
}

const ersExtractAir = function(temp, serialNumber, index = 0) {
  return {id: `nibe-ers-extract-air-${index}`, tests: [
    {service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe ERS extract air temperature'},
    {service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: temp},
    {service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber},
  ]}
}

const ersSupplyAir = function(temp, serialNumber, index = 0) {
  return {id: `nibe-ers-supply-air-${index}`, tests: [
    {service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe ERS supply air temperature'},
    {service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: temp},
    {service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber},
  ]}
}

const ersOutdoor = function(temp, serialNumber, index = 0) {
  return {id: `nibe-ers-outdoor-${index}`, tests: [
    {service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe ERS outdoor temperature'},
    {service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: temp},
    {service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber},
  ]}
}

const ersFan = function(active, state, speed, serialNumber, index = 0) {
  return {id: `nibe-ers-fan-${index}`, tests: [
    {service: 'Fanv2', characteristic: 'Active', value: active},
    {service: 'Fanv2', characteristic: 'CurrentFanState', value: state},
    {service: 'Fanv2', characteristic: 'RotationSpeed', value: speed},
    {service: 'Fanv2', characteristic: 'Name', value: 'Nibe ERS'},
    {service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber},
  ]}
}

const devices = [
  {
    name: 'F1145-10 PC',
    accessories: [outdoorTemperature(13.5, '06513518228002'), averageOutdoorTemperature(11.9, '06513518228002'), hotWater(41.2, '06513518228002'), ersExhaustAir(22.3, '06513518228002'), ersExtractAir(22.2, '06513518228002'), ersSupplyAir(23.6, '06513518228002'), ersOutdoor(17.8, '06513518228002'), ersFan(1, 2, 50, '06513518228002')]
  },
  {
    name: 'F750 CU 3x400V',
    accessories: [outdoorTemperature(8.5, '06603615321011'), averageOutdoorTemperature(4, '06603615321011'), hotWater(47.7, '06603615321011'), hotWaterTop(49.5, '06603615321011')]
  },
  {
    name: 'VVM 500',
    data: 'VVM-500&F2120-12',
    accessories: [outdoorTemperature(15.1, '06940017328003'), averageOutdoorTemperature(15.9, '06940017328003'), hotWater(47.9, '06940017328003'), hotWaterTop(48.3, '06940017328003')]
  },
  {
    name: 'F2120-12',
    data: 'VVM-500&F2120-12',
    accessories: [outdoorTemperature(13.7, '00000000', 1)]
  },
  {
    name: 'F370 CU 3x400V',
    accessories: [outdoorTemperature(11.3, '06605520349022'), averageOutdoorTemperature(4, '06605520349022'), hotWater(52.5, '06605520349022'), hotWaterTop(53.9, '06605520349022')]
  },
  {
    name: 'VVM 320 E',
    data: 'VVM-320-E&F2040-12',
    accessories: [outdoorTemperature(14.7, '06911015040005'), averageOutdoorTemperature(9.6, '06911015040005'), hotWater(49.3, '06911015040005'), hotWaterTop(49.8, '06911015040005')]
  },
  {
    name: 'F2040-12',
    data: 'VVM-320-E&F2040-12',
    accessories: [outdoorTemperature(17.9, '00000000', 1)]
  },
  {
    name: 'F1245-6 E PC EM',
    accessories: [outdoorTemperature(9.4, '06512120028002'), averageOutdoorTemperature(6.6, '06512120028002'), hotWater(49.7, '06512120028002'), hotWaterTop(54, '06512120028002')]
  },
  {
    name: 'F1255-6 E EM',
    accessories: [outdoorTemperature(16.8, '06527019179011'), averageOutdoorTemperature(22.3, '06527019179011'), hotWater(45.8, '06527019179011'), hotWaterTop(51.5, '06527019179011'), ersExhaustAir(24.8, '06527019179011'), ersExtractAir(23.9, '06527019179011'), ersSupplyAir(18.7, '06527019179011'), ersOutdoor(18.9, '06527019179011'), ersFan(1, 2, 35, '06527019179011')]
  },
  {
    name: 'F1255-6 R PC EM 3x400V',
    accessories: [outdoorTemperature(18, '06549021042001'), averageOutdoorTemperature(19.4, '06549021042001'), hotWater(53.3, '06549021042001'), hotWaterTop(55.3, '06549021042001')]
  },
  {
    name: 'F1255-6 R PC',
    accessories: [outdoorTemperature(21.1, '06527220042029'), averageOutdoorTemperature(24.1, '06527220042029'), hotWater(43.1, '06527220042029'), hotWaterTop(48.7, '06527220042029')]
  },
  {
    name: 'SMO 40',
    data: 'SMO-40&F2040-6',
    accessories: [outdoorTemperature(18, '06722519232754'), averageOutdoorTemperature(13.3, '06722519232754'), hotWater(47.5, '06722519232754'), hotWaterTop(52.6, '06722519232754'), ersExhaustAir(23.9, '06722519232754'), ersExtractAir(23.9, '06722519232754'), ersSupplyAir(24.1, '06722519232754'), ersOutdoor(23.7, '06722519232754'), ersFan(1, 2, 35, '06722519232754')]
  },
  {
    name: 'F2040-6',
    data: 'SMO-40&F2040-6',
    accessories: [outdoorTemperature(26.8, '00000000', 1)]
  },
  {
    name: 'F730 CU 3x400V',
    accessories: [outdoorTemperature(19.8, '06615519029027'), averageOutdoorTemperature(14.5, '06615519029027'), hotWater(42, '06615519029027'), hotWaterTop(47.3, '06615519029027')]
  },
  {
    name: 'F470 CU 3x400V',
    accessories: [outdoorTemperature(30.7, '06606419043009'), averageOutdoorTemperature(30.7, '06606419043009'), hotWater(51.3, '06606419043009'), hotWaterTop(50.9, '06606419043009')]
  },
  {
    name: 'F1245-6 R',
    accessories: [outdoorTemperature(22.1, '06508018330004'), averageOutdoorTemperature(22, '06508018330004'), hotWater(41.7, '06508018330004'), hotWaterTop(46.5, '06508018330004')]
  },
  {
    name: 'F750 E EM 3x400V',
    accessories: [outdoorTemperature(28.6, '06615220128003'), averageOutdoorTemperature(28.6, '06615220128003'), hotWater(50.4, '06615220128003'), hotWaterTop(51.5, '06615220128003')]
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