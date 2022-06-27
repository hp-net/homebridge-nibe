import { Logger } from './Logger';
import { Data, ManagedParameter } from './uplink/nibe-dto';
import { NibeFetcher } from './uplink/nibe-fetcher';
import { Fetcher } from './Fetcher';
import { AccessoryHandler, Accessory } from './AccessoryHandler';

export abstract class PlatformAdapter {
  private firstApiGet = true;
  private accessoryHandlers : AccessoryHandler[] = [];
  private fetcher: Fetcher;

  protected readonly managedParameters: ManagedParameter[] = [
    {unit: '', parameter: '48132', id: '48132', name: ''}, //TEMPORARY_LUX
    {unit: '', parameter: '43427', id: '43427', name: ''},
    {unit: '', parameter: '43115', id: '43115', name: ''}, //Hot water
    {unit: '', parameter: '43064', id: '43064', name: ''}, //Heating
    {unit: '', parameter: '47260', id: '47260', name: ''}, //SELECTED_FAN_SPEED //0,1,2,3,4 (0 = normal)
    {unit: '', parameter: '43116', id: '43116', name: ''}, //HW_CURR_CHARGE_VAL_BT12_BT63
    {unit: '', parameter: '40607', id: '40607', name: ''}, //HW_INCL_INT_ADD_EP15
    {unit: '', parameter: '40625', id: '40625', name: ''}, //HWC_RETURN_BT82
    {unit: '', parameter: '43116', id: '43116', name: ''}, //HW_CURR_CHARGE_VAL_BT12_BT63
    {unit: '', parameter: '40626', id: '40626', name: ''}, //WATER_HEATER_BT83
    {unit: '', parameter: '40755', id: '40755', name: ''}, //TOT_EXT_HW_ADD_OP_TIME
    {unit: '', parameter: '41924', id: '41924', name: ''}, //ESTIMATED_FLOW_HW_BF1
    {unit: '', parameter: '42168', id: '42168', name: ''}, //HEAT_METER_HW_CPR_AND_ADD_EB108_EP15
    {unit: '', parameter: '47134', id: '47134', name: ''}, //PERIOD_HW
    {unit: '', parameter: '47387', id: '47387', name: ''}, //HW_PRODUCTION
    {unit: '', parameter: '47413', id: '47413', name: ''}, //SPEED_CIRC_PUMP_HW
    {unit: '', parameter: '47541', id: '47541', name: ''}, //HW_TEMP_DIFF
    {unit: '', parameter: '48281', id: '48281', name: ''}, //CHARGE_METHOD_HW
    {unit: '', parameter: '48390', id: '48390', name: ''}, //SPEED_CIRC_PUMP_HW_SLAVE_1
    {unit: '', parameter: '49230', id: '49230', name: ''}, //INTERNAL_HW_ADD_IN_TANK_USE_IN_HEAT
    {unit: '', parameter: '49243', id: '49243', name: ''}, //SPEED_CIRC_PUMP_HW_EP15
    {unit: '', parameter: '10072', id: '10072', name: ''}, //ACTUAL_HOT_WATER_TYPE
    {unit: '', parameter: '40013', id: '40013', name: ''}, //HOT_WATER_TOP_BT7
    {unit: '', parameter: '40014', id: '40014', name: ''}, //HOT_WATER_CHARGING_BT6
    {unit: '', parameter: '40078', id: '40078', name: ''}, //HOT_WATER_TOP_BT7
    {unit: '', parameter: '40147', id: '40147', name: ''}, //OUTGOING_HOT_WATER_BT70
    {unit: '', parameter: '40764', id: '40764', name: ''}, //FREE_HOT_WATER_ENERGY_IN_THE_AHPS_TANK
    {unit: '', parameter: '40819', id: '40819', name: ''}, //AVAILABLE_HOT_WATER_COMPRESSORS
    {unit: '', parameter: '41446', id: '41446', name: ''}, //HOT_WATER_OPT10
    {unit: '', parameter: '41705', id: '41705', name: ''}, //HOT_WATER
    {unit: '', parameter: '41848', id: '41848', name: ''}, //HOT_WATER
    {unit: '', parameter: '43109', id: '43109', name: ''}, //ACTUAL_HOT_WATER_TYPE
    {unit: '', parameter: '44411', id: '44411', name: ''}, //HOT_WATER_CHARGING_EB108_BT6
    {unit: '', parameter: '44417', id: '44417', name: ''}, //HOT_WATER_CHARGING_EB107_BT6
    {unit: '', parameter: '44423', id: '44423', name: ''}, //HOT_WATER_CHARGING_EB106_BT6
    {unit: '', parameter: '44429', id: '44429', name: ''}, //HOT_WATER_CHARGING_EB105_BT6
    {unit: '', parameter: '44435', id: '44435', name: ''}, //HOT_WATER_CHARGING_EB104_BT6
    {unit: '', parameter: '44441', id: '44441', name: ''}, //HOT_WATER_CHARGING_EB103_BT6
    {unit: '', parameter: '44447', id: '44447', name: ''}, //HOT_WATER_CHARGING_EB102_BT6
    {unit: '', parameter: '44453', id: '44453', name: ''}, //HOT_WATER_CHARGING_EB101_BT6
    {unit: '', parameter: '44755', id: '44755', name: ''}, //DEW_HOT_WATER_VALVE
    {unit: '', parameter: '44757', id: '44757', name: ''}, //SCA_HOT_WATER_VALVE
    {unit: '', parameter: '44897', id: '44897', name: ''}, //HOT_WATER
    {unit: '', parameter: '47053', id: '47053', name: ''}, //HOT_WATER_CIRCULATION
    {unit: '', parameter: '48086', id: '48086', name: ''}, //HOT_WATER_TANK_TYPE
    {unit: '', parameter: '48284', id: '48284', name: ''}, //SG_READY_HOT_WATER
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
    
    this.getLogger().debug(JSON.stringify(data));

    this.accessoryHandlers.forEach((accessoryHandler: AccessoryHandler) => {
      accessoryHandler.handleData(data);
    });

  }
}