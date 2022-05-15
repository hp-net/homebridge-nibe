import { ProductConfigurationLoader, ProductConfiguration, ProductConfigurationService } from './ProductConfiguration';
import { Locale } from './Locale';
import { Data } from './uplink/nibe-dto';
import { PlatformAdapter } from './PlatformAdapter';

export interface Parameter {
    title: string;
    unit: string;
    displayValue: string;
    rawValue: number;
    value?: number;
    systemUnitId?: number;
    managed?: boolean;
}

export interface Characteristic {
    value: any;
    setProps(props: any): void;
    onSet(funct: any): void;
}

export interface Service {
    getCharacteristic(characteristicType): Characteristic;
    updateCharacteristic(characteristicType, value): void;
}

export interface Accessory {
    context: any;
    getService(name: string): Service | undefined;
    addService(serviceType, name?: string, subType?: string): Service;
}

export class AccessoryHandler {
  private locale: Locale;
  private productConfiguration: ProductConfiguration;

  constructor(
        private readonly platform: PlatformAdapter, 
        private product: string,
        private unitId: number) {
    try {
      this.locale = new Locale(platform.getConfig('language'), platform.getLogger());
      this.productConfiguration = ProductConfigurationLoader.loadProductConfiguration(product);
    } catch (error: any) {
      this.platform.getLogger().error(error.message);
      throw error;
    }
  }

  public handleData(data: Data): void {
    const parameters = this.flatten(data);
    const ids = Array<string>();

    this.productConfiguration.accessories.forEach(accessory => {
      const accessoryId = accessory.id + '-' + this.unitId;

      const disabledAccessories = this.platform.getConfig('disabledAccessories');
      if (disabledAccessories && disabledAccessories.map(a => a.replace(/ *\([^)]*\) */g, '')).filter(a => a === accessoryId).length === 0) {
        this.platform.getLogger().debug(`Disabled accessory: [${accessoryId}]`);
        return;
      }
                    
      let platformAccessory = this.platform.getAccessories().find(a => a.context.accessoryId === accessoryId);
      if (platformAccessory) {
        this.platform.getLogger().debug(`Updating accessory: [${accessoryId}]`);
        this.updateAccessory(platformAccessory, accessory.services, parameters, true);
        ids.push(accessoryId);
      } else {
        platformAccessory = this.platform.createAccessory(accessoryId);
        platformAccessory.context.accessoryId = accessoryId;
        platformAccessory.context.accessoryName = accessory.name;
        platformAccessory.context.systemUnitId = this.unitId;
        const valid = this.updateAccessory(platformAccessory, accessory.services, parameters);
        if (valid) {
          this.platform.getLogger().info(`Adding new accessory: [${accessoryId}]`);
          this.platform.registerPlatformAccessories(platformAccessory);
          ids.push(accessoryId);
        }
      }
    });

    const deleted = this.platform.getAccessories().filter((a) => this.unitId === a.context.systemUnitId).filter((a) => !ids.includes(a.context.accessoryId));
    this.platform.unregisterPlatformAccessories(deleted);
  }

  private updateAccessory(platformAccessory: Accessory, services: ProductConfigurationService[], parameters: Map<number, Parameter>, refreshOnly = false): boolean {
    let result = false;
        
    services.forEach(service => {
      const serviceType = this.platform.getServiceType(service.type);
      const platformService = service.name ?
        platformAccessory.getService(service.name) || platformAccessory.addService(serviceType, service.name, 'Sub'+service.type + service.name):
        platformAccessory.getService(serviceType) || platformAccessory.addService(serviceType);
            
      service.characteristics
        .filter(characteristic => refreshOnly ? (characteristic.refresh || platformService.getCharacteristic(this.platform.getCharacteristicType(characteristic.type)) === null) : true)
        .forEach(characteristic => {
          let value;

          if (characteristic.value !== undefined) {
            value = characteristic.value;
          } else if(characteristic.id !== undefined) {
            const parameter = parameters.get(characteristic.id);
            if (parameter) {
              value = parameter[characteristic.attribute || 'value'];
            }
          } else if(characteristic.config !== undefined) {
            const configValue = this.platform.getConfig(characteristic.config.key);
            value = configValue === undefined ? characteristic.config.default : configValue;
          }
                
          if (characteristic.parser) {
            if (characteristic.parser === 'notEmpty') {
              value = value !== null && value !== '';
            }
          }

          if (value !== undefined && characteristic.mapper) {
            const filtered = [...characteristic.mapper.values()].filter(v => {                        
              return Object.keys(v)[0].toString() === value.toString();
            });
            const defaultValue = [...characteristic.mapper.values()].filter(v => {                        
              return Object.keys(v)[0].toString() === 'default';
            });

            if (filtered.length > 0) {
              value = Object.values(filtered[0])[0];
            } else if (defaultValue.length === 1) {
              value = Object.values(defaultValue[0])[0];
            } else {
              this.platform.getLogger().error('aaa');
              value = undefined;
            }
          }

          if (value !== undefined && characteristic.translate) {
            const originalValue = value;
            value = this.locale.text(platformAccessory.context.accessoryName + '.' + originalValue, undefined);
            if(value === undefined) {
              value = this.locale.text(originalValue, undefined);
            }
          }

          if(value !== undefined) {
            const characteristicType = this.platform.getCharacteristicType(characteristic.type);
            const platformCharacteristic = platformService.getCharacteristic(characteristicType);
                        
            if (characteristic.props) {
              platformCharacteristic.setProps(characteristic.props);
            }

            if (platformCharacteristic) {
              if (platformCharacteristic.value !== value) {
                this.platform.getLogger().debug(`[${platformAccessory.context.accessoryId}: ${service.type}.${characteristic.type}]: [${platformCharacteristic.value}] -> [${value}]`);
                platformService.updateCharacteristic(characteristicType, value);
                result = true;
              }
            } else {
              this.platform.getLogger().debug(`[${platformAccessory.context.accessoryId}: ${service.type}.${characteristic.type}]: [${value}]`);
              platformService.updateCharacteristic(characteristicType, value);
              result = true;
            }
                        
            if (characteristic.manage) {
              const manageId = characteristic.manage.id;
              platformCharacteristic.onSet(manageValue => {
                const manageParameters = {};
                manageParameters[manageId] = manageValue;
                this.platform.getFetcher().setParams(platformAccessory.context.systemUnitId, manageParameters);
              });
            }
          }
        });
    });

    platformAccessory.context.lastUpdate = new Date();
        
    return result;
  }

  private flatten(data: Data): Map<number, Parameter> {
    const result = new Map<number, Parameter>();

    for (const systemUnit of data.unitData) {
      if (systemUnit.systemUnitId !== this.unitId) {
        continue;
      }

      if (systemUnit.categories) {
        for (const category of systemUnit.categories) {
          for (const parameter of category.parameters) {
            if (parameter) {
              let parameterId = parameter.parameterId;
              if (parameterId === 0) {
                if (parameter.key === 'VERSION') {
                  parameterId = 3;
                } else if (parameter.key === 'SERIAL_NUMBER') {
                  parameterId = 2;
                } else if (parameter.key === 'PRODUCT') {
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
      break; // handle only first for product
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