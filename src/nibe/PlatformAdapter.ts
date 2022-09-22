import { Logger } from './Logger';
import { Data, ManagedParameter } from './uplink/nibe-dto';
import { NibeFetcher } from './uplink/nibe-fetcher';
import { Fetcher } from './Fetcher';
import { AccessoryHandler } from './AccessoryHandler';
import { Accessory } from './DataModel';

export abstract class PlatformAdapter {
  private firstApiGet = true;
  private accessoryHandlers : AccessoryHandler[] = [];
  private readonly fetcher: Fetcher;

  protected readonly managedParameters: ManagedParameter[] = [
    '48132', //TEMPORARY_LUX //4-one time, 1-3h, 2-6h, 3-12h
    '47260', //SELECTED_FAN_SPEED //0,1,2,3,4 (0 = normal)
    '48857', //ERS_1_EXHAUST_FAN_SPEED_NORMAL
    '48856', //ERS_1_EXHAUST_FAN_SPEED_1
    '48855', //ERS_1_EXHAUST_FAN_SPEED_2
    '48854', //ERS_1_EXHAUST_FAN_SPEED_3
    '48853', //ERS_1_EXHAUST_FAN_SPEED_4
    '47265', //exhaust_speed_normal
    '47264', //exhaust_speed_1
    '47263', //exhaust_speed_2
    '47262', //exhaust_speed_3
    '47261', //exhaust_speed_4

    '47011', //HEAT_OFFSET_S1, system grzewczy podbicie lub zmniejszenie temperatury
    '48739', //COOL_OFFSET_S1


    '47131', // Display language in the heat pump 0=English 1=Svenska 2=Deutsch 3=Francais 4=Espanol 5=Suomi 6=Lietuviu 7=Cesky 8=Polski 9=Nederlands 10=Norsk 11=Dansk 12=Eesti 13=Latviesu 16=Magyar",
  ].map(id => <ManagedParameter>{unit: '',parameter: id, id: id, name: ''});

  protected constructor(
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

    if(this.getConfig('showApiResponse') === true) {
      this.getLogger().info('Nibe data:');
      this.getLogger().info(JSON.stringify(data));
    }

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