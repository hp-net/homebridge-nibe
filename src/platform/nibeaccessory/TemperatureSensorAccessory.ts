import {Accessory, Service} from '../PlatformDomain';
import {Data} from '../DataDomain';

export class TemperatureSensorAccessory implements Accessory {

  constructor(private readonly parameterId: string, private readonly name: string) {
  }

  context: any;

  addService(serviceType, name?: string, subType?: string): Service {
    return undefined;
  }

  getService(name: string): Service | undefined {
    return undefined;
  }

  update(data: Data) {
  // - id: outdoor-temperature-40004
  //   name: outdoor-temperature
  //   condition:
  //     parameterIds: [ 40004 ]
  //   services:
  //     - type: TemperatureSensor
  //       characteristics:
  //         - type: CurrentTemperature
  //           id: 40004
  //           refresh: true
  //         - type: Name
  //           value: temperature.current.name
  //           translate: true
  //       - type: AccessoryInformation
  //         characteristics:
  //           - type: Manufacturer
  //             value: Nibe
  //           - type: Model
  //             id: 1
  //             attribute: displayValue
  //           - type: SerialNumber
  //             id: 2
  //             attribute: displayValue
  }

  canUpdate(data: Data) {
    return data.parameters.some(p => this.parameterId === p.id);
  }
}