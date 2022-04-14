import { Logger } from './Logger';
import { Data, ManagedParameter } from './uplink/nibe-dto';
import { Fetcher } from './uplink/nibe-fetcher';
import { AccessoryHandler } from './AccessoryHandler';

export abstract class PlatformAdapter {
    private firstApiGet = true;
    private accessoryHandler? : AccessoryHandler;
    private fetcher: Fetcher;

    protected readonly managedParameters: ManagedParameter[] = [
        {unit: '', parameter: '48132', id: '48132', name: ''}, //TEMPORARY_LUX
        {unit: '', parameter: '43427', id: '43427', name: ''},
        {unit: '', parameter: '43115', id: '43115', name: ''}, //Hot water
        {unit: '', parameter: '43064', id: '43064', name: ''}, //Heating
        {unit: '', parameter: '47260', id: '47260', name: ''}, //SELECTED_FAN_SPEED //0,1,2,3,4 (0 = normal)
    ];
    
    constructor(
        private readonly storagePath: string, 
        private readonly configuration: Record<string, any>,
        private readonly logger: Logger
    ) {
        try {
            this.configuration = configuration;
            this.logger = logger;
            this.fetcher = new Fetcher({
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

    abstract getAccessories(): any[];
    abstract createAccessory(accessoryId: string): any;
    abstract registerPlatformAccessories(accessory: any): void;
    abstract unregisterPlatformAccessories(deleted: any[]): void;

    getFetcher(): Fetcher {
        return this.fetcher;
    }

    protected async initNibe() {
        this.getFetcher()
            .on('data', (data) => {
                this.handleNibeData(data);
            }).on('error', (data) => {
                this.getLogger().error('Error:', data);
            });
    }

    protected async handleNibeData(data: Data) {
        if (data === null || data.unitData === null || data.unitData.length === 0) {
            this.getLogger().error('No Nibe data from Nibeuplink Api');
            return;
        }

        if (this.firstApiGet && data.unitData.length > 1) {
            this.getLogger().warn('There is more than one unit, only first will be handled');
        }

        const product = data.unitData[0].product;

        if (this.firstApiGet) {
            this.getLogger().info('Loading configuration for ' + product);
            try {
                this.accessoryHandler = new AccessoryHandler(this, product, this.getConfig('language'));
            } catch (e) {
                this.getLogger().error(JSON.stringify(e));
                this.getLogger().error(`No configuration for ${product}`);
                this.getLogger().error(`Create support issue to support new model, use link: https://github.com/hp-net/homebridge-nibe/issues/new?assignees=&labels=new+product&template=new_product.md&title=${product.replace(/ /g, '+')} and provide next log in description`);
                this.getLogger().error(JSON.stringify(data));
            }
        }
        
        if (this.accessoryHandler) {
            this.accessoryHandler.handleData(data);
        }

        this.firstApiGet = false;
    }
}