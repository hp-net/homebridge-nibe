import {Data} from './DataDomain';
import {Platform} from './Platform';
import {PlatformAccessory} from 'homebridge';

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
}

export abstract class AccessoryDefinition {
  protected constructor(
    protected readonly name: string,
    protected readonly platform: Platform) {
  }

  public abstract isApplicable(data: Data): boolean;

  public buildIdentifier(data: Data): string {
    return `${data.device.id}::${this.name}`;
  }

  public abstract update(platformAccessory: PlatformAccessory, data: Data): void;

  public create(platformAccessory: PlatformAccessory, data: Data): void {
    const accessoryInformationType = this.platform.getServiceType('AccessoryInformation');
    const accessoryInformation = platformAccessory.getService(accessoryInformationType) || platformAccessory.addService(accessoryInformationType);
    const manufacturer = accessoryInformation.addCharacteristic(this.platform.getCharacteristicType('Manufacturer'));
    manufacturer.updateValue('Nibe');
    const model = accessoryInformation.addCharacteristic(this.platform.getCharacteristicType('Model'));
    model.updateValue(`${data.device.name} (${data.system.name})`);
    const serialNumber = accessoryInformation.addCharacteristic(this.platform.getCharacteristicType('SerialNumber'));
    serialNumber.updateValue(data.device.serialNumber);
    this.update(platformAccessory, data);
  }
}