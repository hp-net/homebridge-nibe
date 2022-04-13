import { ProductConfigurationLoader } from '../src/ProductConfiguration';

const product = 'F1145-10 PC';

describe('testing configuration load', () => {
  test('empty string should result in zero', () => {
    expect(ProductConfigurationLoader.loadProductConfiguration('')).toBe(0);
  });
});