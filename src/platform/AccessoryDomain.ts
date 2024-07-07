import {Data} from './DataDomain';
import {Characteristics, Services} from './NibePlatform';
import {Logger} from './PlatformDomain';
import {Locale} from './util/Locale';

export interface AccessoryInstance {
  context: AccessoryContext
  getService(type: any): ServiceInstance;
  addService(type: any): ServiceInstance;
}

export interface ServiceInstance {
  updateCharacteristic(type: any, value: any): void;
}

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

    const accessoryInformationService = this.getOrCreateService(Services.AccessoryInformation, platformAccessory);
    accessoryInformationService.updateCharacteristic(Characteristics.Manufacturer, 'Nibe');
    accessoryInformationService.updateCharacteristic(Characteristics.Model, `${data.device.name} (${data.system.name})`);
    accessoryInformationService.updateCharacteristic(Characteristics.SerialNumber, data.device.serialNumber);

    this.update(platformAccessory, data);
  }

  protected getOrCreateService(type: any, platformAccessory: AccessoryInstance) {
    return platformAccessory.getService(type) || platformAccessory.addService(type);
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