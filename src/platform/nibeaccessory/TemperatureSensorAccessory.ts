import {Data} from '../DataDomain';
import {Platform} from '../Platform';
import {AccessoryDefinition} from '../PlatformDomain';
import {PlatformAccessory} from 'homebridge';

export class TemperatureSensorAccessory extends AccessoryDefinition {

  constructor(
    private readonly parameterId: string,
    protected readonly name: string,
    protected readonly platform: Platform,
  ) {
    super(name, platform);
  }

  isApplicable(data: Data) {
    const result = this.findParameter(this.parameterId, data);
    if (result) {
      return true;
    }
    this.platform.getLogger().debug(`Conditions not meet for accessory: [${this.buildIdentifier(data)}]`);
    return false;
  }

  update(platformAccessory: PlatformAccessory, data: Data) {
    const parameter = this.findParameter(this.parameterId, data);
    const temperatureSensorService = this.getOrCreateService('TemperatureSensor', platformAccessory);
    if (temperatureSensorService && parameter) {
      temperatureSensorService.updateCharacteristic(
        this.getCharacteristic('CurrentTemperature'),
        parameter.value,
      );
      this.platform.getLogger().debug(`Accessory ${platformAccessory.context.accessoryId} updated to ${parameter.value}`);
    }
  }

  create(platformAccessory: PlatformAccessory, data: Data): void {
    super.create(platformAccessory, data);

    const temperatureSensorService = this.getOrCreateService('TemperatureSensor', platformAccessory);
    temperatureSensorService.updateCharacteristic(
      this.getCharacteristic('CurrentTemperature'),
      0,
    );
    temperatureSensorService.updateCharacteristic(
      this.getCharacteristic('Name'),
      this.platform.getText(this.name),
    );

    this.update(platformAccessory, data);
  }
}