import {Data} from '../DataDomain';
import {Characteristics, Services} from '../NibePlatform';
import {AccessoryContext, AccessoryDefinition} from '../AccessoryDomain';
import {PlatformAccessory} from 'homebridge';
import {Logger} from '../PlatformDomain';
import {Locale} from '../util/Locale';

export class TemperatureSensorAccessory extends AccessoryDefinition {

  constructor(
    private readonly parameterId: string,
    protected readonly name: string,
    protected readonly version: number,
    protected readonly locale: Locale,
    protected readonly log: Logger,
  ) {
    super(name, version, locale, log);
  }

  isApplicable(data: Data) {
    const result = this.findParameter(this.parameterId, data);
    if (result) {
      return true;
    }
    this.log.debug(`Conditions not meet for accessory: [${this.buildIdentifier(data)}]`);
    return false;
  }

  update(platformAccessory: PlatformAccessory<AccessoryContext>, data: Data) {
    const parameter = this.findParameter(this.parameterId, data);
    const temperatureSensorService = this.getOrCreateService(Services.TemperatureSensor, platformAccessory);
    if (temperatureSensorService && parameter) {
      temperatureSensorService.updateCharacteristic(Characteristics.CurrentTemperature, parameter.value);
      super.update(platformAccessory, data);
      this.log.debug(`Accessory ${platformAccessory.context.accessoryId} updated to ${parameter.value}`);
    }
  }

  create(platformAccessory: PlatformAccessory<AccessoryContext>, data: Data): void {
    super.create(platformAccessory, data);

    const temperatureSensorService = this.getOrCreateService(Services.TemperatureSensor, platformAccessory);
    temperatureSensorService.updateCharacteristic(Characteristics.CurrentTemperature, 0);
    temperatureSensorService.updateCharacteristic(Characteristics.Name, this.getText(this.name));

    this.update(platformAccessory, data);
  }
}