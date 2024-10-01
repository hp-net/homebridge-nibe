import {Data} from '../DataDomain';
import {AccessoryDefinition, AccessoryInstance, ServiceResolver} from '../AccessoryDomain';
import {Logger} from '../PlatformDomain';
import {Locale} from '../util/Locale';

export class TemperatureSensorAccessory extends AccessoryDefinition {

  constructor(
    private readonly parameterId: string,
    protected readonly name: string,
    protected readonly version: number,
    protected readonly locale: Locale,
    protected readonly serviceResolver: ServiceResolver,
    protected readonly log: Logger,
  ) {
    super(name, version, locale, serviceResolver, log);
  }

  isApplicable(data: Data) {
    const result = this.findParameter(this.parameterId, data);
    if (result) {
      return true;
    }
    this.log.debug(`Conditions not meet for accessory: [${this.buildIdentifier(data)}]`);
    return false;
  }

  update(platformAccessory: AccessoryInstance, data: Data) {
    const service = this.getOrCreateService('TemperatureSensor', platformAccessory);
    const parameter = this.findParameter(this.parameterId, data);
    if (service && parameter) {
      this.updateCharacteristic(service, 'CurrentTemperature', parameter.value);
      super.update(platformAccessory, data);
      this.log.debug(`Accessory ${platformAccessory.context.accessoryId} updated to ${parameter.value}`);
    }
  }

  create(platformAccessory: AccessoryInstance, data: Data): void {
    super.create(platformAccessory, data);

    const service = this.getOrCreateService('TemperatureSensor', platformAccessory);
    this.updateCharacteristic(service, 'Name', this.getText(this.name));
    this.updateCharacteristic(service, 'CurrentTemperature', 0);

    this.update(platformAccessory, data);
  }
}