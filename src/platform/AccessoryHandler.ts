import {Platform} from './Platform';
import {Data} from './DataDomain';
import {TemperatureSensorAccessory} from './nibeaccessory/TemperatureSensorAccessory';
import {AccessoryDefinition} from './PlatformDomain';

export class AccessoryHandler {

  private readonly accessoryDefinitions: AccessoryDefinition[];

  constructor(private readonly platform: Platform) {
    this.accessoryDefinitions = [
      new TemperatureSensorAccessory('40067', 'average-outdoor-temperature-40067', 1, this.platform),
      new TemperatureSensorAccessory('40004', 'outdoor-temperature-40004', 1, this.platform),
      new TemperatureSensorAccessory('44362', 'outdoor-temperature-44362', 1, this.platform),
      new TemperatureSensorAccessory('40025', 'ventilation-exhaust-air-40025', 1, this.platform),
      new TemperatureSensorAccessory('40026', 'ventilation-extract-air-40026', 1, this.platform),
      new TemperatureSensorAccessory('40075', 'ventilation-supply-air-40075', 1, this.platform),
      new TemperatureSensorAccessory('40183', 'ventilation-outdoor-40183', 1, this.platform),
      new TemperatureSensorAccessory('40013', 'hot-water-top-40013', 1, this.platform),
    ];
  }

  public handleData(data: Data): void {
    const ids = Array<string>();

    this.accessoryDefinitions.forEach(accessoryDefinition => {
      const isApplicable = accessoryDefinition.isApplicable(data);
      const accessoryId = accessoryDefinition.buildIdentifier(data);
      const isDisabled = this.isDisabled(accessoryId);

      if (isApplicable && !isDisabled) {
        let platformAccessory = this.platform.getAccessories().find(a => a.context.accessoryId === accessoryId);
        if (platformAccessory) {
          if (!accessoryDefinition.isCurrentVersion(platformAccessory)) {
            this.platform.getLogger().info(`Old version of accessory, recreating: [${accessoryId}]`);
            accessoryDefinition.create(platformAccessory, data);
          }

          this.platform.getLogger().debug(`Updating accessory: [${accessoryId}]`);
          accessoryDefinition.update(platformAccessory, data);
        } else {
          this.platform.getLogger().info(`Adding new accessory: [${accessoryId}]`);
          platformAccessory = this.platform.createAccessory(accessoryDefinition.buildName(data), accessoryId);
          accessoryDefinition.create(platformAccessory, data);
          this.platform.registerPlatformAccessories(platformAccessory);
        }
        ids.push(accessoryId);
      }
    });

    this.platform.getAccessories()
      .filter(accessory => accessory.context.systemId === data.system.systemId)
      .filter(accessory => accessory.context.deviceId === data.device.id)
      .filter(accessory => !ids.includes(accessory.context.accessoryId))
      .forEach(accessory => this.platform.unregisterPlatformAccessories(accessory));
  }

  private isDisabled(accessoryId: string) {
    const disabledAccessories = this.platform.getConfig('disabledAccessories');
    if (disabledAccessories && disabledAccessories.some(da => (da.indexOf(';') > 0 ? da.substring(0, da.indexOf(';')) : da) === accessoryId)) {
      this.platform.getLogger().debug(`Disabled accessory: [${accessoryId}]`);
      return true;
    }
    return false;
  }

  // private updateAccessory(platformAccessory: Accessory, services: ConfigurationService[], parameters: Map<number, Parameter>, refreshOnly = false): boolean {
  //   let result = false;
  //
  //   services.forEach(service => {
  //     const serviceType = this.platform.getServiceType(service.type);
  //     const platformService = service.name ?
  //       platformAccessory.getService(service.name) || platformAccessory.addService(serviceType, service.name, 'Sub'+service.type + service.name):
  //       platformAccessory.getService(serviceType) || platformAccessory.addService(serviceType);
  //
  //     service.characteristics
  //       .filter(characteristic => refreshOnly ? (characteristic.refresh || platformService.getCharacteristic(this.platform.getCharacteristicType(characteristic.type)) === null) : true)
  //       .forEach(characteristic => {
  //
  //         if (characteristic.condition) {
  //           if (!this.checkConditions(characteristic.condition, parameters)) {
  //             this.platform.getLogger().debug(`Conditions not meet for characteristic: [${characteristic.id}] for product[${this.product}], removing characteristic`);
  //             const characteristicType = this.platform.getCharacteristicType(characteristic.type);
  //             const platformCharacteristic = platformService.getCharacteristic(characteristicType);
  //             platformService.removeCharacteristic(platformCharacteristic);
  //             return;
  //           }
  //         }
  //
  //         let value;
  //
  //         if (characteristic.value !== undefined) {
  //           value = characteristic.value;
  //         } else if(characteristic.id !== undefined) {
  //           const parameter = parameters.get(characteristic.id);
  //           if (parameter) {
  //             value = parameter[characteristic.attribute || 'value'];
  //           }
  //         } else if(characteristic.config !== undefined) {
  //           const configValue = this.platform.getConfig(characteristic.config.key);
  //           value = configValue === undefined ? characteristic.config.default : configValue;
  //         } else if(characteristic.provider !== undefined) {
  //           value = ProviderManager.get(characteristic.provider.name).provide(parameters, characteristic.provider.params, this.platform);
  //         }
  //
  //         if (characteristic.parser) {
  //           value = this.transformWithParser(characteristic.parser, value);
  //         }
  //
  //         if (value !== undefined && characteristic.mapper) {
  //           value = this.transformWithMapper(characteristic.mapper, value);
  //         }
  //
  //         if (value !== undefined && characteristic.translate) {
  //           value = this.transformWithTranslate(platformAccessory.context.accessoryName, value);
  //         }
  //
  //         if(value !== undefined) {
  //           const characteristicType = this.platform.getCharacteristicType(characteristic.type);
  //           const platformCharacteristic = platformService.getCharacteristic(characteristicType);
  //
  //           if (characteristic.props) {
  //             const {provider: _, ...propsToSet} = characteristic.props;
  //             if (characteristic.props.provider) {
  //               const providerProps = ProviderManager.get(characteristic.props.provider.name).provide(parameters, characteristic.props.provider.params, this.platform);
  //               platformCharacteristic.setProps({...propsToSet, ...providerProps});
  //             } else {
  //               platformCharacteristic.setProps(propsToSet);
  //             }
  //           }
  //
  //           if (platformCharacteristic) {
  //             if (platformCharacteristic.value !== value) {
  //               this.platform.getLogger().debug(`[${platformAccessory.context.accessoryId}: ${service.type}.${characteristic.type}]: [${platformCharacteristic.value}] -> [${value}]`);
  //               platformService.updateCharacteristic(characteristicType, value);
  //               result = true;
  //             }
  //           } else {
  //             this.platform.getLogger().debug(`[${platformAccessory.context.accessoryId}: ${service.type}.${characteristic.type}]: [${value}]`);
  //             platformService.updateCharacteristic(characteristicType, value);
  //             result = true;
  //           }
  //         }
  //         if (characteristic.manage) {
  //           const characteristicType = this.platform.getCharacteristicType(characteristic.type);
  //           const platformCharacteristic = platformService.getCharacteristic(characteristicType);
  //           const manageId = characteristic.manage.id;
  //           platformCharacteristic.onSet(manageValue => {
  //             if (characteristic.manage) {
  //               if (characteristic.manage.provider !== undefined) {
  //                 const params = {newValue: manageValue};
  //                 manageValue = ProviderManager.get(characteristic.manage.provider.name).provide(parameters, {...params, ...characteristic.manage.provider.params}, this.platform);
  //               }
  //
  //               if (manageValue !== undefined && characteristic.manage.mapper) {
  //                 manageValue = this.transformWithMapper(characteristic.manage.mapper, manageValue);
  //               }
  //
  //               if (manageValue !== undefined) {
  //                 if (typeof manageValue === 'object') {
  //                   this.platform.getFetcher().setParams(platformAccessory.context.systemUnitId, manageValue);
  //                 } else {
  //                   const manageParameters = {};
  //                   manageParameters[manageId] = manageValue;
  //                   this.platform.getFetcher().setParams(platformAccessory.context.systemUnitId, manageParameters);
  //                 }
  //               }
  //             }
  //           });
  //         } else {
  //           const characteristicType = this.platform.getCharacteristicType(characteristic.type);
  //           const platformCharacteristic = platformService.getCharacteristic(characteristicType);
  //           platformCharacteristic.onSet(manageValue => {
  //             this.platform.getLogger().debug(`Set on ${characteristic.type} with value: ${manageValue}, previous value ${platformCharacteristic.value}`);
  //           });
  //         }
  //       });
  //   });
  //
  //   platformAccessory.context.lastUpdate = new Date();
  //
  //   return result;
  // }
  //
  // private transformWithParser(parser, value) {
  //   if (parser === 'notEmpty') {
  //     return value !== null && value !== '';
  //   }
  //   if (parser === 'graterThan0') {
  //     return value !== null && value > 0;
  //   }
  //   return value;
  // }
  //
  // private transformWithMapper(mapper:Map<any, any>, value) {
  //   const filtered = [...mapper.values()].filter(v => {
  //     return Object.keys(v)[0].toString() === value.toString();
  //   });
  //   const defaultValue = [...mapper.values()].filter(v => {
  //     return Object.keys(v)[0].toString() === 'default';
  //   });
  //
  //   if (filtered.length > 0) {
  //     return Object.values(filtered[0])[0];
  //   } else if (defaultValue.length === 1) {
  //     return Object.values(defaultValue[0])[0];
  //   } else {
  //     return undefined;
  //   }
  // }
  //
  // private transformWithTranslate(accessoryName, value) {
  //   const originalValue = value;
  //   value = this.locale.text(accessoryName + '.' + originalValue, undefined);
  //   if(value === undefined) {
  //     value = this.locale.text(originalValue, undefined);
  //   }
  //   return value;
  // }
  //
  // private checkConditions(condition: ConfigurationCondition, parameters: Map<number, Parameter>) {
  //   if (condition.parameterIds && condition.parameterIds.filter(p => parameters.get(p) === undefined).length > 0) {
  //     return false;
  //   }
  //
  //   if (condition.provider !== undefined && !ProviderManager.get(condition.provider.name).provide(parameters, condition.provider.params, this.platform)){
  //     return false;
  //   }
  //
  //   return true;
  // }
  //
  // private flatten(data: Data): Map<number, Parameter> {
  //   const result = new Map<number, Parameter>();
  //
  //   for (const systemUnit of data.unitData) {
  //     // if (systemUnit.systemUnitId !== this.unitId) {
  //     //   continue;
  //     // }
  //     //
  //     // if (systemUnit.categories) {
  //     //   for (const category of systemUnit.categories) {
  //     //     for (const parameter of category.parameters) {
  //     //       if (parameter) {
  //     //         let parameterId = parameter.parameterId;
  //     //         if (parameterId === 0) {
  //     //           if (parameter.key === 'VERSION') {
  //     //             parameterId = 3;
  //     //           } else if (parameter.key === 'SERIAL_NUMBER') {
  //     //             parameterId = 2;
  //     //           } else if (parameter.key === 'PRODUCT') {
  //     //             parameterId = 1;
  //     //           }
  //     //         }
  //     //
  //     //         result.set(parameterId, {
  //     //           title: parameter.title,
  //     //           value: parameter.value,
  //     //           unit: parameter.unit,
  //     //           displayValue: parameter.displayValue,
  //     //           rawValue: parameter.rawValue,
  //     //           systemUnitId: systemUnit.systemUnitId,
  //     //         });
  //     //       }
  //     //     }
  //     //   }
  //     // }
  //     // break; // handle only first for product
  //   }
  //
  //   if (data.manageData) {
  //     for (const managedData of data.manageData) {
  //       for (const parameter of managedData.parameters) {
  //         if (parameter) {
  //           result.set(parameter.parameterId, {
  //             title: parameter.title,
  //             value: parameter.value,
  //             unit: parameter.unit,
  //             displayValue: parameter.displayValue,
  //             rawValue: parameter.rawValue,
  //             managed: true,
  //           });
  //         }
  //       }
  //     }
  //   }
  //
  //   return result;
  // }
}