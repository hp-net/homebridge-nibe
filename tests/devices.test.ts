import {MockAccessory, MockPlatform} from './MockPlatform';
import {Data} from '../src/nibe/uplink/nibe-dto';

import * as fs from 'fs';
import * as path from 'path';

const loadData = function (product) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, `./data/${product.replace(/ /g, '-')}.json`), 'utf8'));
};

describe('Tests for not existing product', () => {
  const product = 'XXX';
  const data = loadData(product) as Data;
  const platform = new MockPlatform();
  platform.test(data);
  test('not supported device should not have accessories', () => {
    expect(platform.getAccessories().length).toBe(0);
  });
});

const outdoorTemperature = function (currentTemp, serialNumber, index = 0) {
  return {
    id: `nibe-outdoor-temperature-${index === 0 ? 40004 : 44362}-${index}`, tests: [
      { service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe outdoor temperature' },
      { service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: currentTemp },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const averageOutdoorTemperature = function (avgTemp, serialNumber, index = 0) {
  return {
    id: `nibe-average-outdoor-temperature-${index}`, tests: [
      { service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe average outdoor temperature' },
      { service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: avgTemp },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const hotWater = function (currentTemp, active, currentHeaterCoolerState, heatingThresholdTemperature, serialNumber, index = 0) {
  return {
    id: `nibe-hot-water-${index}`, tests: [
      { service: 'HeaterCooler', characteristic: 'Name', value: 'Nibe hot water temperature' },
      { service: 'HeaterCooler', characteristic: 'CurrentTemperature', value: currentTemp },
      { service: 'HeaterCooler', characteristic: 'Active', value: active },
      { service: 'HeaterCooler', characteristic: 'CurrentHeaterCoolerState', value: currentHeaterCoolerState },
      { service: 'HeaterCooler', characteristic: 'TargetHeaterCoolerState', value: 0 },
      { service: 'HeaterCooler', characteristic: 'TemperatureDisplayUnits', value: 0 },
      { service: 'HeaterCooler', characteristic: 'HeatingThresholdTemperature', value: heatingThresholdTemperature },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const hotWaterTemporaryLux = function (on, serialNumber, index = 0) {
  return {
    id: `nibe-hot-water-temporary-lux-${index}`, tests: [
      { service: 'Switch', characteristic: 'Name', value: 'Nibe hot water temporary lux' },
      { service: 'Switch', characteristic: 'On', value: on },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const hotWaterTop = function (temp, serialNumber, index = 0) {
  return {
    id: `nibe-hot-water-top-${index}`, tests: [
      { service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe top hot water temperature' },
      { service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: temp },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const ventilationExhaustAir = function (temp, serialNumber, index = 0) {
  return {
    id: `nibe-ventilation-exhaust-air-${index}`, tests: [
      { service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe exhaust air temperature' },
      { service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: temp },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const ventilationExtractAir = function (temp, serialNumber, index = 0) {
  return {
    id: `nibe-ventilation-extract-air-${index}`, tests: [
      { service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe extract air temperature' },
      { service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: temp },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const ventilationSupplyAir = function (temp, serialNumber, index = 0) {
  return {
    id: `nibe-ventilation-supply-air-${index}`, tests: [
      { service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe supply air temperature' },
      { service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: temp },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const ventilationOutdoor = function (temp, serialNumber, index = 0) {
  return {
    id: `nibe-ventilation-outdoor-${index}`, tests: [
      { service: 'TemperatureSensor', characteristic: 'Name', value: 'Nibe ventilation outdoor temperature' },
      { service: 'TemperatureSensor', characteristic: 'CurrentTemperature', value: temp },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const ersFan = function (active, state, speed, serialNumber, index = 0) {
  return {
    id: `nibe-ers-fan-${index}`, tests: [
      { service: 'Fanv2', characteristic: 'Active', value: active },
      { service: 'Fanv2', characteristic: 'CurrentFanState', value: state },
      { service: 'Fanv2', characteristic: 'RotationSpeed', value: speed },
      { service: 'Fanv2', characteristic: 'Name', value: 'Nibe ERS' },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const ventilationFan = function (active, state, speed, serialNumber, index = 0) {
  return {
    id: `nibe-ventilation-fan-${index}`, tests: [
      { service: 'Fanv2', characteristic: 'Active', value: active },
      { service: 'Fanv2', characteristic: 'CurrentFanState', value: state },
      { service: 'Fanv2', characteristic: 'RotationSpeed', value: speed },
      { service: 'Fanv2', characteristic: 'Name', value: 'Nibe ventilation' },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const heatingColling = function (currentTemp, active, currentHeaterCoolerState, heatingThresholdTemperature, coolingThresholdTemperature, serialNumber, index = 0) {
  return {
    id: `nibe-heating-cooling-${index}`, tests: [
      { service: 'HeaterCooler', characteristic: 'Name', value: 'Nibe heating/cooling' },
      { service: 'HeaterCooler', characteristic: 'CurrentTemperature', value: currentTemp },
      { service: 'HeaterCooler', characteristic: 'Active', value: active },
      { service: 'HeaterCooler', characteristic: 'CurrentHeaterCoolerState', value: currentHeaterCoolerState },
      { service: 'HeaterCooler', characteristic: 'TargetHeaterCoolerState', value: 0 },
      { service: 'HeaterCooler', characteristic: 'TemperatureDisplayUnits', value: 0 },
      { service: 'HeaterCooler', characteristic: 'HeatingThresholdTemperature', value: heatingThresholdTemperature },
      { service: 'HeaterCooler', characteristic: 'CoolingThresholdTemperature', value: coolingThresholdTemperature },
      { service: 'AccessoryInformation', characteristic: 'SerialNumber', value: serialNumber },
    ],
  };
};

const notDefined = function (ids:string[], index:number|undefined = undefined) {
  return ids.map(id => {
    if(index !== undefined) {
      return `nibe-${id}-${index}`;
    }
    return [`nibe-${id}-0`, `nibe-${id}-1`];
  }).flatMap(id => id);
};

const devices = [
  {
    name: 'F370 CU 3x400V',
    accessories: [
      outdoorTemperature(11.3, '06605520349022'),
      averageOutdoorTemperature(4, '06605520349022'),
      hotWater(52.5, 0, 1, undefined, '06605520349022'),
      hotWaterTemporaryLux(false, '06605520349022'),
      hotWaterTop(53.9, '06605520349022'),
      ventilationExhaustAir(23.7, '06605520349022'),
      ventilationExtractAir(25.2, '06605520349022'),
      ventilationFan(1, 2, 54, '06605520349022'),
      heatingColling(30, 0, 1, undefined, undefined, '06605520349022'),
    ],
    notDefined: 
      notDefined([
        'ventilation-supply-air', 
        'ventilation-outdoor', 
        'ers-fan',
      ]),
  },
  {
    name: 'F470 CU 3x400V',
    accessories: [
      outdoorTemperature(30.7, '06606419043009'),
      averageOutdoorTemperature(30.7, '06606419043009'),
      hotWater(51.3, 0, 1, undefined, '06606419043009'),
      hotWaterTemporaryLux(false, '06606419043009'),
      hotWaterTop(50.9, '06606419043009'),
      ventilationSupplyAir(30.7, '06606419043009'),
      ventilationExhaustAir(26.6, '06606419043009'),
      ventilationExtractAir(25.2, '06606419043009'),
      ventilationFan(1, 2, 65, '06606419043009'),
      heatingColling(20, 0, 1, undefined, undefined, '06606419043009'),
    ],
    notDefined: 
      notDefined([
        'ventilation-outdoor', 
        'ers-fan',
      ]),
  },
  {
    name: 'F730 CU 3x400V',
    accessories: [
      outdoorTemperature(19.8, '06615519029027'), 
      averageOutdoorTemperature(14.5, '06615519029027'),
      hotWater(42, 1, 2, 45.8, '06615519029027'),
      hotWaterTemporaryLux(false, '06615519029027'),
      hotWaterTop(47.3, '06615519029027'),
      ventilationExhaustAir(22.1, '06615519029027'),
      ventilationExtractAir(7.5, '06615519029027'),
      ventilationFan(1, 2, 63, '06615519029027'),
      heatingColling(20.4, 0, 1, undefined, undefined, '06615519029027'),
    ],
    notDefined: 
      notDefined([
        'ventilation-supply-air', 
        'ventilation-outdoor', 
        'ers-fan',
      ]),
  },
  {
    name: 'F750 CU 3x400V',
    accessories: [
      outdoorTemperature(8.5, '06603615321011'), 
      averageOutdoorTemperature(4, '06603615321011'),
      hotWater(47.7, 0, 1, undefined, '06603615321011'),
      hotWaterTemporaryLux(false, '06603615321011'),
      hotWaterTop(49.5, '06603615321011'),
      ventilationExhaustAir(24.1, '06603615321011'),
      ventilationExtractAir(23.6, '06603615321011'),
      ventilationFan(1, 2, 50, '06603615321011'),
      heatingColling(26.8, 0, 1, undefined, undefined, '06603615321011'),
    ],
    notDefined: 
      notDefined([
        'ventilation-supply-air', 
        'ventilation-outdoor', 
        'ers-fan',
      ]),
  },
  {
    name: 'F750 E EM 3x400V',
    accessories: [
      outdoorTemperature(28.6, '06615220128003'), 
      averageOutdoorTemperature(28.6, '06615220128003'),
      hotWater(50.4, 0, 1, undefined, '06615220128003'),
      hotWaterTemporaryLux(false, '06615220128003'),
      hotWaterTop(51.5, '06615220128003'),
      ventilationExhaustAir(27.1, '06615220128003'),
      ventilationExtractAir(19, '06615220128003'),
      ventilationFan(1, 2, 30, '06615220128003'),
      heatingColling(20, 0, 1, undefined, undefined, '06615220128003'),
    ],
    notDefined: 
      notDefined([
        'ventilation-supply-air', 
        'ventilation-outdoor', 
        'ers-fan',
      ]),
  },
  {
    name: 'F750 R EM 3x400V',
    accessories: [
      outdoorTemperature(10.2, '06615421330008'), 
      averageOutdoorTemperature(12, '06615421330008'),
      hotWater(43.9, 0, 1, undefined, '06615421330008'),
      hotWaterTemporaryLux(false, '06615421330008'),
      hotWaterTop(47.4, '06615421330008'),
      ventilationExhaustAir(27.9, '06615421330008'),
      ventilationExtractAir(28.1, '06615421330008'),
      ventilationFan(1, 2, 62, '06615421330008'),
      heatingColling(21, 0, 1, undefined, undefined, '06615421330008'),
    ],
    notDefined: 
      notDefined([
        'ventilation-supply-air', 
        'ventilation-outdoor', 
        'ers-fan',
      ]),
  },
  {
    name: 'F1145-10 PC',
    accessories: [
      outdoorTemperature(15.7, '06513518228002'),
      averageOutdoorTemperature(12.2, '06513518228002'),
      hotWater(49.3, 0, 1, undefined, '06513518228002'),
      hotWaterTemporaryLux(true, '06513518228002'),
      ventilationExhaustAir(21.9, '06513518228002'),
      ventilationExtractAir(22.5, '06513518228002'),
      ventilationSupplyAir(24.1, '06513518228002'),
      ventilationOutdoor(18.5, '06513518228002'),
      ersFan(1, 2, 50, '06513518228002'),
      heatingColling(21.6, 1, 2, 21, undefined, '06513518228002'),
    ],
    notDefined: 
      notDefined([
        'ventilation-fan',
      ]),
  },
  {
    name: 'F1245-6 R',
    accessories: [
      outdoorTemperature(22.1, '06508018330004'), 
      averageOutdoorTemperature(22, '06508018330004'),
      hotWater(41.7, 0, 1, undefined, '06508018330004'),
      hotWaterTemporaryLux(false, '06508018330004'),
      hotWaterTop(46.5, '06508018330004'),
      heatingColling(20.4, 0, 1, undefined, undefined, '06508018330004'),
    ],
    notDefined: 
      notDefined([
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
      ]),
  },
  {
    name: 'F1245-6 E PC EM',
    accessories: [
      outdoorTemperature(9.4, '06512120028002'), 
      averageOutdoorTemperature(6.6, '06512120028002'),
      hotWater(49.7, 0, 1, undefined, '06512120028002'),
      hotWaterTemporaryLux(false, '06512120028002'),
      hotWaterTop(54, '06512120028002'),
      heatingColling(32.3, 0, 1, undefined, undefined, '06512120028002'),
    ],
    notDefined: 
      notDefined([
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
      ]),
  },
  {
    name: 'F1245-8 R',
    accessories: [
      outdoorTemperature(21.8, '06508115245001'), 
      averageOutdoorTemperature(23.6, '06508115245001'),
      hotWater(48.4, 0, 1, undefined, '06508115245001'),
      hotWaterTemporaryLux(false, '06508115245001'),
      hotWaterTop(54, '06508115245001'),
      heatingColling(23, 0, 1, undefined, undefined, '06508115245001'),
    ],
    notDefined:
      notDefined([
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
      ]),
  },
  {
    name: 'F1255-6 E EM',
    accessories: [
      outdoorTemperature(16.8, '06527019179011'), 
      averageOutdoorTemperature(22.3, '06527019179011'),
      hotWater(45.8, 0, 1, undefined, '06527019179011'),
      hotWaterTemporaryLux(false, '06527019179011'),
      hotWaterTop(51.5, '06527019179011'), 
      ventilationExhaustAir(24.8, '06527019179011'), 
      ventilationExtractAir(23.9, '06527019179011'), 
      ventilationSupplyAir(18.7, '06527019179011'), 
      ventilationOutdoor(18.9, '06527019179011'), 
      ersFan(1, 2, 35, '06527019179011'),
      heatingColling(22, 0, 1, undefined, undefined, '06527019179011'),
    ],
    notDefined:
      notDefined([
        'ventilation-fan',
      ]),
  },
  {
    name: 'F1255-6 R PC',
    accessories: [
      outdoorTemperature(21.1, '06527220042029'), 
      averageOutdoorTemperature(24.1, '06527220042029'),
      hotWater(43.1, 1, 2, 48.2, '06527220042029'),
      hotWaterTemporaryLux(false, '06527220042029'),
      hotWaterTop(48.7, '06527220042029'),
      heatingColling(20, 0, 1, undefined, undefined, '06527220042029'),
    ],
    notDefined:
      notDefined([
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
      ]),
  },
  {
    name: 'F1255-6 R PC EM 3x400V',
    accessories: [
      outdoorTemperature(18, '06549021042001'), 
      averageOutdoorTemperature(19.4, '06549021042001'),
      hotWater(53.3, 0, 1, undefined, '06549021042001'),
      hotWaterTemporaryLux(false, '06549021042001'),
      hotWaterTop(55.3, '06549021042001'),
      heatingColling(19.5, 1, 3, undefined, 20, '06549021042001'),
    ],
    notDefined:
      notDefined([
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
      ]),
  },
  {
    name: 'F2030-9',
    data: 'VVM-310&F2030',
    accessories: [
      outdoorTemperature(18.8, '00000000', 1),
    ],
    notDefined:
      notDefined([
        'hot-water-top',
        'hot-water',
        'hot-water-temporary-lux',
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
        'heating-cooling',
      ], 1),
  },
  {
    name: 'F2040-6',
    data: 'SMO-40&F2040-6',
    accessories: [
      outdoorTemperature(26.8, '00000000', 1),
    ],
    notDefined:
      notDefined([
        'hot-water-top',
        'hot-water',
        'hot-water-temporary-lux',
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
        'heating-cooling',
      ], 1),
  },
  {
    name: 'F2040-12',
    data: 'VVM-320-E&F2040-12',
    accessories: [
      outdoorTemperature(17.9, '00000000', 1),
    ],
    notDefined:
      notDefined([
        'hot-water-top',
        'hot-water',
        'hot-water-temporary-lux',
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
        'heating-cooling',
      ], 1),
  },
  {
    name: 'F2120-12',
    data: 'VVM-500&F2120-12',
    accessories: [
      outdoorTemperature(13.7, '00000000', 1),
    ],
    notDefined:
      notDefined([
        'hot-water-top',
        'hot-water',
        'hot-water-temporary-lux',
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
        'heating-cooling',
      ], 1),
  },
  {
    name: 'SMO 40',
    data: 'SMO-40&F2040-6',
    accessories: [
      outdoorTemperature(18, '06722519232754'), 
      averageOutdoorTemperature(13.3, '06722519232754'),
      hotWaterTop(52.6, '06722519232754'),
      ventilationExhaustAir(23.9, '06722519232754'), 
      ventilationExtractAir(23.9, '06722519232754'), 
      ventilationSupplyAir(24.1, '06722519232754'), 
      ventilationOutdoor(23.7, '06722519232754'), 
      ersFan(1, 2, 35, '06722519232754'),
    ],
    notDefined:
      notDefined([
        'hot-water',
        'hot-water-temporary-lux',
        'ventilation-fan',
        'heating-cooling',
      ]),
  },
  {
    name: 'VVM 310, 3x400V',
    data: 'VVM-310&F2030',
    accessories: [
      outdoorTemperature(18, '06908413241009'), 
      averageOutdoorTemperature(14.2, '06908413241009'),
      hotWater(49, 0, 1, undefined, '06908413241009'),
      hotWaterTemporaryLux(false, '06908413241009'),
      hotWaterTop(49.8, '06908413241009'),
      heatingColling(24.1, 0, 1, undefined, undefined, '06908413241009'),
    ],
    notDefined:
      notDefined([
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
      ]),
  },
  {
    name: 'VVM 320 E',
    data: 'VVM-320-E&F2040-12',
    accessories: [
      outdoorTemperature(14.7, '06911015040005'), 
      averageOutdoorTemperature(9.6, '06911015040005'),
      hotWater(49.3, 0, 1, undefined, '06911015040005'),
      hotWaterTemporaryLux(false, '06911015040005'),
      hotWaterTop(49.8, '06911015040005'),
      heatingColling(24.7, 0, 1, undefined, undefined, '06911015040005'),
    ],
    notDefined:
      notDefined([
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
      ]),
  },
  {
    name: 'VVM 500',
    data: 'VVM-500&F2120-12',
    accessories: [
      outdoorTemperature(15.1, '06940017328003'), 
      averageOutdoorTemperature(15.9, '06940017328003'),
      hotWater(47.9, 0, 1, undefined, '06940017328003'),
      hotWaterTemporaryLux(false, '06940017328003'),
      hotWaterTop(48.3, '06940017328003'),
      heatingColling(20.7, 0, 1, undefined, undefined, '06940017328003'),
    ],
    notDefined:
      notDefined([
        'ventilation-exhaust-air',
        'ventilation-extract-air',
        'ventilation-supply-air',
        'ventilation-outdoor',
        'ers-fan',
        'ventilation-fan',
      ]),
  },
];

devices.forEach(device => {
  describe(`Tests for ${device.name}`, () => {
    const product = device.data || device.name;
    const data = loadData(product) as Data;
    const platform = new MockPlatform();
    platform.test(data);

    device.accessories.forEach(accessory => {
      const mockAccessory = platform.getAccessoryById(accessory.id) as MockAccessory;
      test(`${accessory.id}: should be defined`, () => {
        expect(mockAccessory).toBeDefined();
      });
      test(`${accessory.id}: AccessoryInformation.Manufacturer should be Nibe`, () => {
        expect(mockAccessory.get('AccessoryInformation', 'Manufacturer')).toBe('Nibe');
      });
      test(`${accessory.id}: AccessoryInformation.Model should be ${device.name}`, () => {
        expect(mockAccessory.get('AccessoryInformation', 'Model')).toBe(device.name);
      });
      accessory.tests.forEach(t => {
        if (t.value === undefined) {
          test(`${accessory.id}: ${t.service}.${t.characteristic} shouldn't be defined`, () => {
            expect(mockAccessory.get(t.service, t.characteristic)).not.toBeDefined();
          });
        } else {
          test(`${accessory.id}: ${t.service}.${t.characteristic} should be ${t.value}`, () => {
            expect(mockAccessory.get(t.service, t.characteristic)).toBe(t.value);
          });
        }
      });
    });

    device.notDefined && device.notDefined.forEach(id => {
      test(`${id}: should not be defined`, () => {
        const mockAccessory = platform.getAccessoryById(id) as MockAccessory;
        expect(mockAccessory).not.toBeDefined();
      });
    });
  });
});