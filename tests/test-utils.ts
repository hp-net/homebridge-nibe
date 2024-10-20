import fs from 'fs';
import path from 'path';
import {
  AccessoryContext,
  CharacteristicType,
  ServiceInstance,
  ServiceResolver,
  ServiceType,
} from '../src/platform/AccessoryDomain';

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

export const testDevice = {'id':'emmy-r-test','connectionState':'Connected','currentFwVersion':'9699R4','product':{'serialNumber':'666','name':'F1145-10 PC'}};
export const deviceInfo = {'id':'emmy-r-test','connectionState':'Connected','firmware': {'currentFwVersion':'9699R4', 'desiredFwVersion': 'NEW'}};
export const testSystem = {'systemId':'42f23d18','name':'Dom','country':'Poland','devices':[testDevice]};

export const mockAccessory = function() {
  const values = new Map();
  return {
    context: {} as AccessoryContext,
    addService(type: any): ServiceInstance {
      return this.getService(type);
    },
    removeService(service: ServiceInstance) {

    },
    getService(stype: any): ServiceInstance {
      return {
        updateCharacteristic(ctype: any, value: any) {
          values.set(stype + ':' + ctype, value);
        },
        addOptionalCharacteristic(type: any) {

        },
        getCharacteristic(type: any) {
          return {
            setProps(props: any) {
              return this;
            },
            value: values.get(stype + ':' + type),
            onSet(handler: (value) => void) {
              return this;
            },
          };
        },
      } as ServiceInstance;
    },
    getValue(stype: any, ctype: any) {
      return values.get(stype + ':' + ctype);
    },
  };
};

export const serviceResolver = {
  resolveService(type: ServiceType) {
    return type;
  },
  resolveCharacteristic(type: CharacteristicType) {
    return type;
  },
} as ServiceResolver;

export const loadData = function (product) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, `./data/nibe-myuplink/${product.replace(/ /g, '-')}.json`), 'utf8'));
};