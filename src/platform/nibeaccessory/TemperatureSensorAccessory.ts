import {Data} from '../DataDomain';
import {Characteristics, Services} from '../NibePlatform';
import {AccessoryContext, AccessoryDefinition} from '../AccessoryDomain';
import {PlatformAccessory} from 'homebridge';
import {Platform} from '../PlatformDomain';

export class TemperatureSensorAccessory extends AccessoryDefinition {

  constructor(
    private readonly parameterId: string,
    protected readonly name: string,
    protected readonly version: number,
    protected readonly platform: Platform,
  ) {
    super(name, version, platform);
  }

  isApplicable(data: Data) {
    const result = this.findParameter(this.parameterId, data);
    if (result) {
      return true;
    }
    this.platform.getLogger().debug(`Conditions not meet for accessory: [${this.buildIdentifier(data)}]`);
    return false;
  }

  update(platformAccessory: PlatformAccessory<AccessoryContext>, data: Data) {
    const parameter = this.findParameter(this.parameterId, data);
    const temperatureSensorService = this.getOrCreateService(Services.TemperatureSensor, platformAccessory);
    if (temperatureSensorService && parameter) {
      temperatureSensorService.updateCharacteristic(Characteristics.CurrentTemperature, parameter.value);
      super.update(platformAccessory, data);
      this.platform.getLogger().debug(`Accessory ${platformAccessory.context.accessoryId} updated to ${parameter.value}`);
    }
  }

  create(platformAccessory: PlatformAccessory<AccessoryContext>, data: Data): void {
    super.create(platformAccessory, data);

    const temperatureSensorService = this.getOrCreateService(Services.TemperatureSensor, platformAccessory);
    temperatureSensorService.updateCharacteristic(Characteristics.CurrentTemperature, 0);
    temperatureSensorService.updateCharacteristic(Characteristics.Name, this.platform.getText(this.name));

    this.update(platformAccessory, data);
  }
}