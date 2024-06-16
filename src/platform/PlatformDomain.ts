import {Data} from './DataDomain';

export interface Characteristic {
  value: any;
  setProps(props: any): void;
  onSet(funct: any): void;
  updateValue(value: any): Characteristic;
}

export interface Service {
  getCharacteristic(characteristicType): Characteristic;
  updateCharacteristic(characteristicType, value): void;
  removeCharacteristic(characteristic: Characteristic): void;
}

export interface Accessory {
  context: any;
  getService(name: string): Service | undefined;
  addService(serviceType, name?: string, subType?: string): Service;

  update(data: Data): void;
  canUpdate(data: Data): boolean;
}