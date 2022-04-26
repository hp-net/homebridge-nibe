import { MockPlatform } from './MockPlatform';
import { Data } from '../src/nibe/uplink/nibe-dto';

import * as fs from 'fs';
import * as path from 'path';

function loadData(product) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, `./data/${product.replace(/ /g, '-')}.json`), 'utf8'))
}

// test('Test for F750 CU 3x400V', () => {
//   const product = 'F750 CU 3x400V';
//   const data = loadData(product) as Data;
//   const platform = new MockPlatform();
//   platform.test(data);
//   platform.getAccessories();
//   //expect(ProductConfigurationLoader.loadProductConfiguration('')).toBe(0);
// });

test('Test for F1145-10 PC', () => {
  const product = 'F1145-10 PC';
  const data = loadData(product) as Data;
  const platform = new MockPlatform();
  platform.test(data);

  //expect(ProductConfigurationLoader.loadProductConfiguration('')).toBe(0);
});
