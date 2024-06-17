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

  public buildName(data: Data) {
    return `${this.name}::${Date.now()}`;
  }

  public abstract update(platformAccessory: PlatformAccessory, data: Data): void;

  public create(platformAccessory: PlatformAccessory, data: Data): void {
    platformAccessory.context.accessoryId = this.buildIdentifier(data);

    const accessoryInformationService = this.getOrCreateService('AccessoryInformation', platformAccessory);
    accessoryInformationService.updateCharacteristic(
      this.getCharacteristic('Manufacturer'),
      'Nibe',
    );
    accessoryInformationService.updateCharacteristic(
      this.getCharacteristic('Model'),
      `${data.device.name} (${data.system.name})`,
    );
    accessoryInformationService.updateCharacteristic(
      this.getCharacteristic('SerialNumber'),
      data.device.serialNumber,
    );

    this.update(platformAccessory, data);
  }

  protected getOrCreateService(typeName: string, platformAccessory: PlatformAccessory) {
    const type = this.platform.getServiceType(typeName);
    return platformAccessory.getService(type) || platformAccessory.addService(type);
  }

  protected getCharacteristic(characteristicTypeName: string) {
    return this.platform.getCharacteristicType(characteristicTypeName);
  }

  protected findParameter(parameterId: string, data: Data) {
    return data.parameters.find(p => parameterId === p.id);
  }

}