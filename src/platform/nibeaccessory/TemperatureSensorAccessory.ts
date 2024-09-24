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
    const parameter = this.findParameter(this.parameterId, data);
    const temperatureSensorService = this.getOrCreateService('TemperatureSensor', platformAccessory);
    if (temperatureSensorService && parameter) {
      temperatureSensorService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('CurrentTemperature'), parameter.value);
      super.update(platformAccessory, data);
      this.log.debug(`Accessory ${platformAccessory.context.accessoryId} updated to ${parameter.value}`);
    }
  }

  create(platformAccessory: AccessoryInstance, data: Data): void {
    super.create(platformAccessory, data);

    const temperatureSensorService = this.getOrCreateService('TemperatureSensor', platformAccessory);
    temperatureSensorService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('CurrentTemperature'), 0);
    temperatureSensorService.updateCharacteristic(this.serviceResolver.resolveCharacteristic('Name'), this.getText(this.name));

    this.update(platformAccessory, data);
  }
}