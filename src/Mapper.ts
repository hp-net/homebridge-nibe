import { Logger, PlatformAccessory } from 'homebridge';
import { Platform, Characteristics, Services } from './Platform';
import { Locale } from './Locale';
import { Category, InfoData } from './api/nibe-dto';
import { PLATFORM_NAME } from './settings';

export default abstract class Mapper {
    protected log: Logger;
    protected locale: Locale;

    constructor(
        protected readonly platform: Platform, 
        protected readonly info: InfoData, 
        protected readonly accessory: PlatformAccessory,
    ) {
        this.log = this.platform.log;
        this.locale = this.platform.locale;
    }

    public build(category: Category) {
        const type = Services.AccessoryInformation;
        const info = this.accessory.getService(type) || this.accessory.addService(type);
        info.setCharacteristic(Characteristics.Manufacturer, PLATFORM_NAME);
        info.setCharacteristic(Characteristics.Model, this.info.product);
        info.setCharacteristic(Characteristics.SerialNumber, this.info.serialNumber);
    
        this.update(category);
    }

    public update(category: Category) {
        this.handleUpdate(category);
        this.accessory.context.lastUpdate = new Date();
    }

    protected abstract handleUpdate(category: Category);

    protected getService(type) {
        return this.accessory.getService(type) || this.accessory.addService(type);
    }
    
}