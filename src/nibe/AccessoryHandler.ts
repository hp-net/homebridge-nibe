import {Configuration, ConfigurationCondition, ConfigurationLoader, ConfigurationService} from './ConfigurationLoader';
import {Locale} from './Locale';
import {Data} from './uplink/nibe-dto';
import {Accessory, Parameter} from './DataModel';
import {PlatformAdapter} from './PlatformAdapter';
import {ProviderManager} from './provider/Provider';

export class AccessoryHandler {
  private locale: Locale;
  private configuration: Configuration;

  constructor(
        private readonly platform: PlatformAdapter, 
        private product: string,
        private unitId: number) {
    try {
      this.locale = new Locale(platform.getConfig('language'), platform.getLogger());
      this.configuration = ConfigurationLoader.loadConfiguration();
    } catch (error: any) {
      this.platform.getLogger().error(error.message);
      throw error;
    }
  }

  public handleData(data: Data): void {
    const parameters = this.flatten(data);
    const ids = Array<string>();

    this.configuration.accessories.forEach(accessory => {
      const accessoryId = accessory.id + '-' + this.unitId;

      const disabledAccessories = this.platform.getConfig('disabledAccessories');
      if (disabledAccessories && disabledAccessories.map(a => a.replace(/ *\([^)]*\) */g, '')).filter(a => a === accessoryId).length > 0) {
        this.platform.getLogger().debug(`Disabled accessory: [${accessoryId}]`);
        return;
      }     
      
      if (accessory.condition) {
        if (!this.checkConditions(accessory.condition, parameters)) {
          this.platform.getLogger().debug(`Conditions not meet for accessory: [${accessory.id}] for product[${this.product}]`);
          return;
        }
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

  private updateAccessory(platformAccessory: Accessory, services: ConfigurationService[], parameters: Map<number, Parameter>, refreshOnly = false): boolean {
    let result = false;
        
    services.forEach(service => {
      const serviceType = this.platform.getServiceType(service.type);
      const platformService = service.name ?
        platformAccessory.getService(service.name) || platformAccessory.addService(serviceType, service.name, 'Sub'+service.type + service.name):
        platformAccessory.getService(serviceType) || platformAccessory.addService(serviceType);
            
      service.characteristics
        .filter(characteristic => refreshOnly ? (characteristic.refresh || platformService.getCharacteristic(this.platform.getCharacteristicType(characteristic.type)) === null) : true)
        .forEach(characteristic => {

          if (characteristic.condition) {
            if (!this.checkConditions(characteristic.condition, parameters)) {
              this.platform.getLogger().debug(`Conditions not meet for characteristic: [${characteristic.id}] for product[${this.product}], removing characteristic`);
              const characteristicType = this.platform.getCharacteristicType(characteristic.type);
              const platformCharacteristic = platformService.getCharacteristic(characteristicType);
              platformService.removeCharacteristic(platformCharacteristic);
              return;
            }
          }

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
          } else if(characteristic.provider !== undefined) {
            value = ProviderManager.get(characteristic.provider.name).provide(parameters, characteristic.provider.params, this.platform);
          }
                
          if (characteristic.parser) {
            if (characteristic.parser === 'notEmpty') {
              value = value !== null && value !== '';
            } else if (characteristic.parser === 'graterThan0') {
              value = value !== null && value > 0;
            }
          }

          if (value !== undefined && characteristic.mapper) {
            value = this.transformWithMapper(characteristic.mapper, value);
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
          }
          if (characteristic.manage) {
            const characteristicType = this.platform.getCharacteristicType(characteristic.type);
            const platformCharacteristic = platformService.getCharacteristic(characteristicType);
            const manageId = characteristic.manage.id;
            platformCharacteristic.onSet(manageValue => {
              if (characteristic.manage) {
                if (characteristic.manage.provider !== undefined) {
                  const params = {newValue: manageValue};
                  manageValue = ProviderManager.get(characteristic.manage.provider.name).provide(parameters, {...params, ...characteristic.manage.provider.params}, this.platform);
                }

                if (manageValue !== undefined && characteristic.manage.mapper) {
                  manageValue = this.transformWithMapper(characteristic.manage.mapper, manageValue);
                }

                if (manageValue !== undefined) {
                  const manageParameters = {};
                  manageParameters[manageId] = manageValue;
                  this.platform.getFetcher().setParams(platformAccessory.context.systemUnitId, manageParameters);
                }
              }
            });
          }
        });
    });

    platformAccessory.context.lastUpdate = new Date();
        
    return result;
  }

  private transformWithMapper(mapper:Map<any, any>, value) {
    const filtered = [...mapper.values()].filter(v => {
      return Object.keys(v)[0].toString() === value.toString();
    });
    const defaultValue = [...mapper.values()].filter(v => {
      return Object.keys(v)[0].toString() === 'default';
    });

    if (filtered.length > 0) {
      return Object.values(filtered[0])[0];
    } else if (defaultValue.length === 1) {
      return Object.values(defaultValue[0])[0];
    } else {
      return undefined;
    }
  }

  private checkConditions(condition: ConfigurationCondition, parameters: Map<number, Parameter>) {
    if (condition.parameterIds && condition.parameterIds.filter(p => parameters.get(p) === undefined).length > 0) {
      return false;
    }

    if (condition.provider !== undefined && !ProviderManager.get(condition.provider.name).provide(parameters, condition.provider.params, this.platform)){
      return false;
    }

    return true;
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