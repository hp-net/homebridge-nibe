import { Logger, PlatformAccessory } from 'homebridge';
import { Platform, Characteristics, Services, NibeInfo } from './Platform';
import { Category } from './api/nibeDto';
import { PLATFORM_NAME } from './settings';

export default abstract class Mapper {
    protected log: Logger;

    constructor(
        protected readonly platform: Platform, 
        protected readonly info: NibeInfo, 
        protected readonly accessory: PlatformAccessory,
    ) {
        this.log = this.platform.log;
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

    protected translate(key: string, defaultValue: string) {
        const value = this.platform.translate(key);
        this.log.debug(JSON.stringify(value));
        return value === null ? defaultValue : value;
    }
}