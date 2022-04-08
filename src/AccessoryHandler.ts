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
    type: string;
    name?: string;
    characteristics: ProductConfigurationCharacteristics[];
}

export interface ProductConfigurationCharacteristics {
    type: string;
    text?: string;
    id?: number;
    refresh?: boolean;
    attribute?: string
    translate?: boolean;
    mapper?: Map<any, any>;
    parser?: string;
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
            if (platformAccessory) {
                this.log.debug(`Updating accessory: [${accessoryId}]`);
                this.updateAccessory(platformAccessory, services, parameters, true);
                ids.push(accessoryId);
            } else {
                platformAccessory = new this.platform.api.platformAccessory(accessoryId, this.platform.generateUuid(accessoryId));
                platformAccessory.context.accessoryId = accessoryId;
                let valid = this.updateAccessory(platformAccessory, services, parameters);
                if (valid) {
                    this.log.info(`Adding new accessory: [${accessoryId}]`);
                    this.platform.registerPlatformAccessories(platformAccessory);
                    ids.push(accessoryId);
                }
            }
        });

        const deleted = this.platform.accessories.filter((accessory) => !ids.includes(accessory.context.accessoryId));
        this.platform.unregisterPlatformAccessories(deleted);
    }

    private updateAccessory(platformAccessory: PlatformAccessory, services: ProductConfigurationService[], parameters: Map<number, Parameter>, refreshOnly: boolean = false): boolean {
        let result = false;
        
        services.forEach(service => {
            const serviceType = Services[service.type];
            const platformService = service.name ?
                platformAccessory.getService(service.name) || platformAccessory.addService(serviceType, service.name, 'Sub'+service.type + service.name):
                platformAccessory.getService(serviceType) || platformAccessory.addService(serviceType);
            
            service.characteristics
            .filter(characteristic => refreshOnly ? (characteristic.refresh || platformService.getCharacteristic(Characteristics[characteristic.type]) == null) : true)
            .forEach(characteristic => {
                const characteristicType = Characteristics[characteristic.type];
                let value;

                if (characteristic.text) {
                    value = characteristic.text;
                } else if(characteristic.id) {
                    let parameter = parameters.get(characteristic.id);
                    if (parameter) {
                        value = parameter[characteristic.attribute || 'value'];
                    }
                }
                
                if (characteristic.parser) {
                    if (characteristic.parser == 'notEmpty') {
                        value = value != null && value != '';
                    }
                }

                if (value != undefined && characteristic.mapper) {
                    let filtered = [...characteristic.mapper.values()].filter(v => {                        
                        return Object.keys(v)[0].toString() == value.toString();
                    });
                    let defaultValue = [...characteristic.mapper.values()].filter(v => {                        
                        return Object.keys(v)[0].toString() == 'default';
                    });

                    if (filtered.length > 0) {
                        value = Object.values(filtered[0])[0];
                    } else if (defaultValue.length == 1) {
                        value = Object.values(defaultValue[0])[0];
                    } else {
                        this.log.error('aaa')
                        value = undefined;
                    }
                }

                if (value != undefined && characteristic.translate) {
                    let originalValue = value;
                    value = this.locale.text(platformAccessory.context.accessoryId + '.' + originalValue, undefined);
                    if(value == undefined) {
                        value = this.locale.text(originalValue, undefined);
                    }
                }

                if(value != undefined) {
                    let platformCharacteristic = platformService.getCharacteristic(characteristicType);
                    if (platformCharacteristic) {
                        if (platformCharacteristic.value !== value) {
                            this.log.debug(`[${platformAccessory.context.accessoryId}: ${service.type}.${characteristic.type}]: [${platformCharacteristic.value}] -> [${value}]`);
                            platformService.updateCharacteristic(characteristicType, value);
                            result = true;
                        }
                    } else {
                        this.log.debug(`[${platformAccessory.context.accessoryId}: ${service.type}.${characteristic.type}]: [${value}]`);
                        platformService.updateCharacteristic(characteristicType, value);
                        result = true;
                    }
                }
            });
        });

        platformAccessory.context.lastUpdate = new Date();
        
        return result;
    }

    private flatten(data: Data): Map<number, Parameter> {
        let result = new Map<number, Parameter>();

        for (const systemUnit of data.unitData) {
            if (systemUnit.categories) {
                for (const category of systemUnit.categories) {
                    for (const parameter of category.parameters) {
                        if (parameter) {
                            let parameterId = parameter.parameterId;
                            if (parameterId == 0) {
                                if (parameter.key == 'VERSION') {
                                    parameterId = 3;
                                } else if (parameter.key == 'SERIAL_NUMBER') {
                                    parameterId = 2;
                                } else if (parameter.key == 'PRODUCT') {
                                    parameterId = 1;
                                }
                            }

                            result.set(parameterId, {
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