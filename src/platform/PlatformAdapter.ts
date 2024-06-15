import {Logger} from './util/Logger';
import {AccessoryHandler} from './AccessoryHandler';
import {Accessory} from './DataModel';
import {ApiFetcher} from './data/ApiFetcher';

export abstract class PlatformAdapter {
  protected constructor(
        private readonly configuration: Record<string, any>,
        private readonly logger: Logger,
        private readonly apiFetcher: ApiFetcher,
  ) {
      this.configuration = configuration;
      this.logger = logger;
      this.apiFetcher = apiFetcher;
  }

  public getConfig(name: string): any {
    return this.configuration[name];
  }

  public getLogger(): Logger {
    return this.logger;
  }

  abstract getAccessories(): Accessory[];
  abstract createAccessory(accessoryId: string): Accessory;
  abstract registerPlatformAccessories(accessory: Accessory): void;
  abstract unregisterPlatformAccessories(deleted: Accessory[]): void;
  abstract getServiceType(type: string): any;
  abstract getCharacteristicType(type: string): any;

  protected initPlatform() {
    const handler = new AccessoryHandler(this);
    this.apiFetcher
      .on('data', (data) => {
        handler.handleData(data);
      }).on('error', (data) => {
        this.getLogger().error('Error:', data);
      });
  }
}