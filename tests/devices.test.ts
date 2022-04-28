import { MockPlatform, MockAccessory } from './MockPlatform';
import { Data } from '../src/nibe/uplink/nibe-dto';

import * as fs from 'fs';
import * as path from 'path';

function loadData(product) {
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

describe("Tests for F1145-10 PC", () => {
  const product = 'F1145-10 PC';
  const data = loadData(product) as Data;
  const platform = new MockPlatform();
  platform.test(data);

  let outdoorTemperature = platform.getAccessoryById('nibe-outdoor-temperature-0') as MockAccessory;
  test('outdoor-temperature: should be defined and configured', () => {
    expect(outdoorTemperature).toBeDefined();
    expect(outdoorTemperature.get('TemperatureSensor', 'Name')).toBe('Nibe outdoor temperature');
    expect(outdoorTemperature.get('TemperatureSensor', 'CurrentTemperature')).toBe(13.5);
    expect(outdoorTemperature.get('AccessoryInformation', 'Manufacturer')).toBe('Nibe');
    expect(outdoorTemperature.get('AccessoryInformation', 'Model')).toBe(product);
    expect(outdoorTemperature.get('AccessoryInformation', 'SerialNumber')).toBe('06513518228002');
  });  

  let hotWater = platform.getAccessoryById('nibe-hot-water-0') as MockAccessory;
  test('hot-water: should be defined and configured', () => {
    expect(hotWater).toBeDefined();
    expect(hotWater.get('HeaterCooler', 'Name')).toBe('Nibe hot water temperature');
    expect(hotWater.get('HeaterCooler', 'CurrentTemperature')).toBe(41.2);
    expect(hotWater.get('HeaterCooler', 'Active')).toBe(0);
    expect(hotWater.get('HeaterCooler', 'CurrentHeaterCoolerState')).toBe(2);
    expect(hotWater.get('HeaterCooler', 'TargetHeaterCoolerState')).toBe(0);
    expect(hotWater.get('HeaterCooler', 'TemperatureDisplayUnits')).toBe(0);
    expect(hotWater.get('HeaterCooler', 'HeatingThresholdTemperature')).toBe(53);
    expect(hotWater.get('AccessoryInformation', 'Manufacturer')).toBe('Nibe');
    expect(hotWater.get('AccessoryInformation', 'Model')).toBe(product);
    expect(hotWater.get('AccessoryInformation', 'SerialNumber')).toBe('06513518228002');
  });  
});

describe("Tests for F750 CU 3x400V", () => {
  const product = 'F750 CU 3x400V';
  const data = loadData(product) as Data;
  const platform = new MockPlatform();
  platform.test(data);

  let outdoorTemperature = platform.getAccessoryById('nibe-outdoor-temperature-0') as MockAccessory;
  test('outdoor-temperature: should be defined and configured', () => {
    expect(outdoorTemperature).toBeDefined();
    expect(outdoorTemperature.get('TemperatureSensor', 'Name')).toBe('Nibe outdoor temperature');
    expect(outdoorTemperature.get('TemperatureSensor', 'CurrentTemperature')).toBe(8.5);
    expect(outdoorTemperature.get('AccessoryInformation', 'Manufacturer')).toBe('Nibe');
    expect(outdoorTemperature.get('AccessoryInformation', 'Model')).toBe(product);
    expect(outdoorTemperature.get('AccessoryInformation', 'SerialNumber')).toBe('06603615321011');
  });  

  let hotWater = platform.getAccessoryById('nibe-hot-water-0') as MockAccessory;
  test('hot-water: should be defined and configured', () => {
    expect(hotWater).toBeDefined();
    expect(hotWater.get('HeaterCooler', 'Name')).toBe('Nibe hot water temperature');
    expect(hotWater.get('HeaterCooler', 'CurrentTemperature')).toBe(47.7);
    expect(hotWater.get('HeaterCooler', 'Active')).toBe(0);
    expect(hotWater.get('HeaterCooler', 'CurrentHeaterCoolerState')).toBe(2);
    expect(hotWater.get('HeaterCooler', 'TargetHeaterCoolerState')).toBe(0);
    expect(hotWater.get('HeaterCooler', 'TemperatureDisplayUnits')).toBe(0);
    expect(hotWater.get('HeaterCooler', 'HeatingThresholdTemperature')).toBe(53);
    expect(hotWater.get('AccessoryInformation', 'Manufacturer')).toBe('Nibe');
    expect(hotWater.get('AccessoryInformation', 'Model')).toBe(product);
    expect(hotWater.get('AccessoryInformation', 'SerialNumber')).toBe('06603615321011');
  });  
});

describe("Tests for VVM500&F2120-12", () => {
  const product1 = 'VVM 500';
  const product2 = 'F2120-12';
  const product = `${product1}&${product2}`;
  const data = loadData(product) as Data;
  const platform = new MockPlatform();
  platform.test(data);
  platform.test(data);
  platform.test(data);
  platform.test(data);
  
  let outdoorTemperature1 = platform.getAccessoryById('nibe-outdoor-temperature-0') as MockAccessory;
  test('outdoor-temperature: should be defined and configured', () => {
    expect(outdoorTemperature1).toBeDefined();
    expect(outdoorTemperature1.get('TemperatureSensor', 'Name')).toBe('Nibe outdoor temperature');
    expect(outdoorTemperature1.get('TemperatureSensor', 'CurrentTemperature')).toBe(15.1);
    expect(outdoorTemperature1.get('AccessoryInformation', 'Manufacturer')).toBe('Nibe');
    expect(outdoorTemperature1.get('AccessoryInformation', 'Model')).toBe(product1);
    expect(outdoorTemperature1.get('AccessoryInformation', 'SerialNumber')).toBe('06940017328003');
  });  

  let outdoorTemperature2 = platform.getAccessoryById('nibe-outdoor-temperature-1') as MockAccessory;
  test('outdoor-temperature: should be defined and configured', () => {
    expect(outdoorTemperature2).toBeDefined();
    expect(outdoorTemperature2.get('TemperatureSensor', 'Name')).toBe('Nibe outdoor temperature');
    expect(outdoorTemperature2.get('TemperatureSensor', 'CurrentTemperature')).toBe(13.7);
    expect(outdoorTemperature2.get('AccessoryInformation', 'Manufacturer')).toBe('Nibe');
    expect(outdoorTemperature2.get('AccessoryInformation', 'Model')).toBe(product2);
    expect(outdoorTemperature2.get('AccessoryInformation', 'SerialNumber')).toBe('00000000');
  });  
  
});

//todo 
// F1245-6-E-PC-EM
// VVM-320-E&F2040-12
// F370 CU 3x400V #28