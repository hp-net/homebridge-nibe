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

  }

  canUpdate(data: Data) {
    return data.parameters.some(p => this.parameterId === p.id);
  }
}