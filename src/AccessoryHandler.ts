import { Logger, PlatformAccessory } from 'homebridge';
import { Platform, Characteristics, Services } from './Platform';
import { Locale } from './Locale';
import { Data } from './api/nibe-dto';

export interface Parameter {
    title: string;
    unit: string;
    displayValue: string;
    rawValue: number;
    value?: number;
    systemUnitId?: number;
    managed?: boolean;
}

export interface ProductConfigurationAccessory {
    id: string;
    services: ProductConfigurationService[];
}

export interface ProductConfigurationService {
    name: string;
    characteristics: ProductConfigurationCharacteristics[];
}

export interface ProductConfigurationCharacteristics {
    name: string;
    text?: string;
    id?: number;
    refresh?: boolean;
    attribute?: string
    translate?: boolean;
}

export interface ProductConfiguration {
    global: {
        accessory: ProductConfigurationAccessory;
    };
    accessories: ProductConfigurationAccessory[];
}

export class AccessoryHandler {
    private log: Logger;
    private locale: Locale;

    constructor(private readonly platform: Platform, private readonly productConfiguration: ProductConfiguration) {
        this.log = this.platform.log;
        this.locale = this.platform.locale;
    }

    public handleData(data: Data): void {
        const parameters = this.flatten(data);
        const globalAccessory = this.productConfiguration.global.accessory;

        const ids = Array<string>();

        this.productConfiguration.accessories.forEach(accessory => {
            const accessoryId = (globalAccessory.id || '') + accessory.id;
            const services = [...globalAccessory.services, ...accessory.services];
                    
            let platformAccessory = this.platform.accessories.find(a => a.context.accessoryId === accessoryId);
            if (!platformAccessory) {
                platformAccessory = new this.platform.api.platformAccessory(accessoryId, this.platform.generateUuid(accessoryId));
                platformAccessory.context.accessoryId = accessoryId;
                let valid = this.updateAccessory(platformAccessory, services, parameters);
                if (valid) {
                    this.log.info(`Adding new accessory: [${accessoryId}]`);
                    //this.platform.registerPlatformAccessories(platformAccessory);
                    ids.push(accessoryId);
                }
            } else {
                this.log.debug(`Updating new accessory: [${accessoryId}]`);
                this.updateAccessory(platformAccessory, services, parameters, true);
                ids.push(accessoryId);
            }
        });

        const deleted = this.platform.accessories.filter((accessory) => !ids.includes(accessory.context.accessoryId));
        this.platform.unregisterPlatformAccessories(deleted);
    }

    private updateAccessory(platformAccessory: PlatformAccessory, services: ProductConfigurationService[], parameters: Map<number, Parameter>, refresh: boolean = false): boolean {
        services.forEach(service => {
            const type = (Services as any)[service.name];
            service.name;
            // service.characteristics.forEach(characteristic => {
            //     // name: string;
            //     // text?: string;
            //     // id?: number;
            //     // refresh?: boolean;
            //     // attribute?: string
            //     // translate?: boolean;
            //     parameters.get(characteristic.id);
            // });
        });

        platformAccessory.context.lastUpdate = new Date();
        // const type = Services.AccessoryInformation;
        // const info = this.accessory.getService(type) || this.accessory.addService(type);
        // info.setCharacteristic(Characteristics.Manufacturer, PLATFORM_NAME);

        // if (parameter.key == 'OUTDOOR_TEMP_BT1' && parameter.value) {
        //     const type = Services.TemperatureSensor;
        //     (this.accessory.getService(type) || this.accessory.addService(type))
        //       .updateCharacteristic(Characteristics.CurrentTemperature, parameter.value)
        //       .updateCharacteristic(Characteristics.Name, this.locale.text('temperature.current.name', parameter.title));
        //   }
        
        return true;
    }

    private flatten(data: Data): Map<number, Parameter> {
        let result = new Map<number, Parameter>();

        for (const systemUnit of data.unitData) {
            if (systemUnit.categories) {
                for (const category of systemUnit.categories) {
                    for (const parameter of category.parameters) {
                        if (parameter) {
                            result.set(parameter.parameterId, {
                                title: parameter.title,
                                value: parameter.value,
                                unit: parameter.unit,
                                displayValue: parameter.displayValue,
                                rawValue: parameter.rawValue,
                                systemUnitId: systemUnit.systemUnitId,
                            });
                        }
                    }
                }
            }
            break; // handle only first
        }

        if (data.manageData) {
            for (const managedData of data.manageData) {
                for (const parameter of managedData.parameters) {
                    if (parameter) {
                        result.set(parameter.parameterId, {
                            title: parameter.title,
                            value: parameter.value,
                            unit: parameter.unit,
                            displayValue: parameter.displayValue,
                            rawValue: parameter.rawValue,
                            managed: true,
                        });
                    }
                }
            }
        }

        return result;
    }
}