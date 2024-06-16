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
    const result =  data.parameters.some(p => this.parameterId === p.id);
    if (result) {
      this.platform.getLogger().debug(`Conditions not meet for accessory: [${this.buildIdentifier(data)}]`);
    }
    return result;
  }

  update(platformAccessory: PlatformAccessory, data: Data) {
    const service = platformAccessory.getService('TemperatureSensor');
    const parameter = data.parameters.find(p => this.parameterId === p.id);
    if (service && parameter) {
      service.updateCharacteristic(this.platform.getServiceType('CurrentTemperature'), parameter.value);
      this.platform.getLogger().debug(`Accessory ${platformAccessory.context.accessoryId} updated to ${parameter.value}`);
    }
  }

  create(platformAccessory: PlatformAccessory, data: Data): void {
    super.create(platformAccessory, data);

    const temperatureSensor = platformAccessory.addService(this.platform.getServiceType('TemperatureSensor'));
    temperatureSensor.addCharacteristic(this.platform.getCharacteristicType('CurrentTemperature'));
    const name = temperatureSensor.addCharacteristic(this.platform.getCharacteristicType('Name'));
    name.updateValue(this.platform.getText(this.name));

    this.update(platformAccessory, data);
  }
}