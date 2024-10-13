import {AccessoryDefinition, AccessoryInstance, ServiceResolver} from '../AccessoryDomain';
import {Data} from '../DataDomain';
import {Locale} from '../util/Locale';
import {Logger} from '../PlatformDomain';

export class NewFirmwareAccessory extends AccessoryDefinition {

  constructor(
    protected readonly name: string,
    protected readonly version: number,
    protected readonly locale: Locale,
    protected readonly serviceResolver: ServiceResolver,
    protected readonly log: Logger,
  ) {
    super(name, version, locale, serviceResolver, log);
  }

  isApplicable(data: Data): boolean {
    return true;
  }

  update(platformAccessory: AccessoryInstance, data: Data) {
    const service = this.getOrCreateService('OccupancySensor', platformAccessory);
    this.updateCharacteristic(service, 'OccupancyDetected', data.device.firmwareUpdateAvailable ? 1 : 0);
  }

  create(platformAccessory: AccessoryInstance, data: Data): void {
    super.create(platformAccessory, data);

    const service = this.getOrCreateService('OccupancySensor', platformAccessory);
    this.updateCharacteristic(service, 'Name', this.getText(this.name) + ' ' + data.device.name);
    this.updateCharacteristic(service, 'OccupancyDetected', 0);

    this.update(platformAccessory, data);
  }
}