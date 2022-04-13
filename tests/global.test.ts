import { ProductConfigurationLoader } from '../src/ProductConfiguration';
 
describe('testing configuration load', () => {
  test('empty product should result in error', () => {
    expect(ProductConfigurationLoader.loadProductConfiguration('')).toThrowError();
  });
});