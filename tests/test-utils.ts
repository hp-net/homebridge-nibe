import fs from 'fs';
import path from 'path';
import {AccessoryInstance} from '../src/platform/AccessoryDomain';

export const testLogger = { // logger
  debug: (message: string, ...parameters: any[]) => {
    console.log(message);
  },
  info: (message: string, ...parameters: any[]) => {
    console.log(message);
  },
  warn: (message: string, ...parameters: any[]) => {
    console.log(message);
  },
  error: (message: string, ...parameters: any[]) => {
    console.log(message);
  },
};

export const testDevice = {'id':'emmy-r-107050-20240612-06513518228002-54-10-ec-d0-9c-56','connectionState':'Connected','currentFwVersion':'9699R4','product':{'serialNumber':'06513518228002','name':'F1145-10 PC'}};

export const testSystem = {'systemId':'42f23d18-4b2d-48b3-94f7-20208b8fe43e','name':'Dom','securityLevel':'admin','hasAlarm':false,'country':'Poland','devices':[{'id':'emmy-r-107050-20240612-06513518228002-54-10-ec-d0-9c-56','connectionState':'Connected','currentFwVersion':'9699R4','product':{'serialNumber':'06513518228002','name':'F1145-10 PC'}}]};

export const mockAccessory = function() {
  return {} as AccessoryInstance;
};

export const loadData = function (product) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, `./data/nibe-myuplink/${product.replace(/ /g, '-')}.json`), 'utf8'));
};