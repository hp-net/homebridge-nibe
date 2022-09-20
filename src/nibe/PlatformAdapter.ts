import { Logger } from './Logger';
import { Data, ManagedParameter } from './uplink/nibe-dto';
import { NibeFetcher } from './uplink/nibe-fetcher';
import { Fetcher } from './Fetcher';
import { AccessoryHandler } from './AccessoryHandler';
import { Accessory } from './DataModel';

export abstract class PlatformAdapter {
  private firstApiGet = true;
  private accessoryHandlers : AccessoryHandler[] = [];
  private fetcher: Fetcher;

  protected readonly managedParameters: ManagedParameter[] = [
    {unit: '', parameter: '48132', id: '48132', name: ''}, //TEMPORARY_LUX //4-one time, 1-3h, 2-6h, 3-12h
    {unit: '', parameter: '47260', id: '47260', name: ''}, //SELECTED_FAN_SPEED //0,1,2,3,4 (0 = normal)

    {unit: '', parameter: '47011', id: '47011', name: ''}, //HEAT_OFFSET_S1, system grzewczy podbicie lub zmniejszenie temperatury
    {unit: '', parameter: '48739', id: '48739', name: ''}, //COOL_OFFSET_S1
    {unit: '', parameter: '48043', id: '48043', name: ''}, //HOLIDAY

    {unit: '', parameter: '47537', id: '47537', name: ''}, //NIGHT_COOLING
    {unit: '', parameter: '47538', id: '47538', name: ''}, //START_ROOM_TEMP_NIGHT_COOLING
    {unit: '', parameter: '47539', id: '47539', name: ''}, //NIGHT_COOLING_MIN_DIFF
  


    
    
  ];
    
  constructor(
        private readonly storagePath: string, 
        private readonly configuration: Record<string, any>,
        private readonly logger: Logger,
        private readonly fetcherProvider?: () => Fetcher, 
  ) {
    try {
      this.configuration = configuration;
      this.logger = logger;

      if (fetcherProvider) {
        this.fetcher = fetcherProvider();
      } else {
        this.fetcher = new NibeFetcher({
          clientId: this.getConfig('identifier'),
          clientSecret: this.getConfig('secret'),
          redirectUri: this.getConfig('callbackUrl'),
          interval: this.getConfig('pollingPeriod') || 60,
          authCode: this.getConfig('authCode'),
          systemId: this.getConfig('systemIdentifier'),
          language: this.getConfig('language'),
          enableManage: true,
          managedParameters: this.managedParameters,
          sessionStore: storagePath + '/nibe-session.' + this.getConfig('system') + '.json',
        }, this.getLogger());
      }
    } catch (error: any) {
      this.getLogger().error(error.message);
      throw error;
    }
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

  getFetcher(): Fetcher {
    return this.fetcher;
  }

  protected initNibe() {
    this.getFetcher()
      .on('data', (data) => {
        this.handleNibeData(data);
      }).on('error', (data) => {
        this.getLogger().error('Error:', data);
      });
  }

  protected handleNibeData(data: Data) {
    if (data === null || data.unitData === null || data.unitData.length === 0) {
      this.getLogger().error('No Nibe data from Nibeuplink Api');
      return;
    }
    
    this.getLogger().info('Nibe data: ' + JSON.stringify(data));

    if (this.firstApiGet) {
      data.unitData.forEach((unitData: any) => {
        const product = unitData.product;
        this.getLogger().info('Loading configuration for ' + product);
        try {
          this.accessoryHandlers.push(new AccessoryHandler(this, product, unitData.systemUnitId));
        } catch (e) {
          this.getLogger().error(JSON.stringify(e));
          this.getLogger().error(`No configuration for ${product}`);
          this.getLogger().error(`Create support issue to support new model, use link: https://github.com/hp-net/homebridge-nibe/issues/new?assignees=&labels=new+product&template=new_product.md&title=${product.replace(/ /g, '+')} and provide next log in description`);
          this.getLogger().error(JSON.stringify(data));
        }
      });
      this.firstApiGet = false;
    }
    
    this.accessoryHandlers.forEach((accessoryHandler: AccessoryHandler) => {
      accessoryHandler.handleData(data);
    });

  }
}