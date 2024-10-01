import {Data} from './DataDomain';
import {Logger} from './PlatformDomain';
import {Locale} from './util/Locale';

export interface AccessoryInstance {
  context: AccessoryContext
  getService(type: any): ServiceInstance;
  addService(type: any): ServiceInstance;
}

export interface ServiceInstance {
  updateCharacteristic(type: any, value: any): void;
  getCharacteristic(type: any): CharacteristicInstance;
}

export interface CharacteristicInstance {
  setProps(props: any): CharacteristicInstance;
}

export interface ServiceResolver {
  resolveService(type: ServiceType);
  resolveCharacteristic(type: CharacteristicType);
}

export type ServiceType =
  'AccessoryInformation' |
  'TemperatureSensor' |
  'HeaterCooler'

export type CharacteristicType =
  'Manufacturer' |
  'Model' |
  'SerialNumber' |
  'CurrentTemperature' |
  'Name' |
  'Active' |
  'TemperatureDisplayUnits' |
  'TargetHeaterCoolerState' |
  'HeatingThresholdTemperature'

export interface AccessoryContext {
  accessoryId: string
  lastUpdate: number //epoch
  version: number
  systemId: string
  systemName: string
  deviceId: string
  deviceName: string
}

export abstract class AccessoryDefinition {
  protected constructor(
    protected readonly name: string,
    protected readonly version: number,
    protected readonly locale: Locale,
    protected readonly serviceResolver: ServiceResolver,
    protected readonly log: Logger,
  ) {}

  public abstract isApplicable(data: Data): boolean;

  public buildIdentifier(data: Data): string {
    return `${data?.device?.id || 'undefined'}::${this.name}`;
  }

  public buildName(data: Data) {
    return `${this.name}::${Date.now()}`;
  }

  public isCurrentVersion(platformAccessory: AccessoryInstance): boolean {
    return platformAccessory.context.version >= this.version;
  }

  public update(platformAccessory: AccessoryInstance, data: Data): void {
    platformAccessory.context.lastUpdate = Date.now();
  }

  public create(platformAccessory: AccessoryInstance, data: Data): void {
    platformAccessory.context.accessoryId = this.buildIdentifier(data);
    platformAccessory.context.version = this.version;
    platformAccessory.context.systemId = data.system.systemId;
    platformAccessory.context.systemName = data.system.name;
    platformAccessory.context.deviceId = data.device.id;
    platformAccessory.context.deviceName = data.device.name;

    const accessoryInformationService = this.getOrCreateService('AccessoryInformation', platformAccessory);
    accessoryInformationService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('Manufacturer'), 'Nibe');
    accessoryInformationService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('Model'), `${data.device.name} (${data.system.name})`);
    accessoryInformationService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('SerialNumber'), data.device.serialNumber);

    this.update(platformAccessory, data);
  }

  protected getOrCreateService(type: ServiceType, platformAccessory: AccessoryInstance) {
    const resolvedType = this.serviceResolver.resolveService(type);
    return platformAccessory.getService(resolvedType) || platformAccessory.addService(resolvedType);
  }

  protected updateCharacteristic(service: ServiceInstance, name: CharacteristicType, value, props: object | undefined = undefined) {
    const characteristic = this.serviceResolver.resolveCharacteristic(name);
    service.updateCharacteristic(characteristic, value);
    if (props) {
      service.getCharacteristic(characteristic).setProps(props);
    }
  }

  protected findParameters(parameterIds: string[], data: Data) {
    return parameterIds
      .map(id => this.findParameter(id, data))
      .filter(p => p !== undefined);
  }

  protected findParameter(parameterId: string, data: Data) {
    if (!data || !data.parameters) {
      return undefined;
    }
    return data.parameters.find(p => parameterId === p.id);
  }

  protected getText(key: string): string {
    return this.locale.text(key, '') || '';
  }
}