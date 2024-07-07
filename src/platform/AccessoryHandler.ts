import {Data} from './DataDomain';
import {AccessoryContext, AccessoryDefinition} from './AccessoryDomain';
import {PlatformAccessory} from 'homebridge';
import {Platform} from './PlatformDomain';

export class AccessoryHandler {

  constructor(
    private readonly accessoryDefinitions: AccessoryDefinition[],
    private readonly platform: Platform,
  ) {}

  public handleData(data: Data): void {
    const touchedAccessoriesIds = Array<string>();

    this.accessoryDefinitions.forEach(accessoryDefinition => {
      const isApplicable = accessoryDefinition.isApplicable(data);
      const accessoryId = accessoryDefinition.buildIdentifier(data);
      const isDisabled = this.isDisabled(accessoryId);

      if (isApplicable && !isDisabled) {
        const platformAccessory = this.platform.getAccessories().find(a => a.context.accessoryId === accessoryId);
        if (platformAccessory) {
          this.updateAccessory(accessoryDefinition, platformAccessory, data);
        } else {
          this.createAccessory(accessoryId, accessoryDefinition, data);
        }
        touchedAccessoriesIds.push(accessoryId);
      }
    });

    this.removeNotExistingAccessories(data.system.systemId, data.device.id, touchedAccessoriesIds);
  }

  private createAccessory(accessoryId: string, accessoryDefinition: AccessoryDefinition, data: Data) {
    this.platform.getLogger().info('Adding new accessory: [%s]', accessoryId);
    const platformAccessory = this.platform.createAccessory(accessoryDefinition.buildName(data), accessoryId);
    accessoryDefinition.create(platformAccessory, data);
    this.platform.registerPlatformAccessories(platformAccessory);
  }

  private updateAccessory(accessoryDefinition: AccessoryDefinition, platformAccessory: PlatformAccessory<AccessoryContext>, data: Data) {
    if (!accessoryDefinition.isCurrentVersion(platformAccessory)) {
      this.platform.getLogger().info('Old version of accessory, recreating: [%s]',
        platformAccessory.context.accessoryId);
      accessoryDefinition.create(platformAccessory, data);
    }

    this.platform.getLogger().debug('Updating accessory: [%s]', platformAccessory.context.accessoryId);
    accessoryDefinition.update(platformAccessory, data);
  }

  private isDisabled(accessoryId: string) {
    const disabledAccessories = this.platform.getConfig('disabledAccessories');
    if (disabledAccessories &&
      disabledAccessories.some(da => (da.indexOf(';') > 0 ? da.substring(0, da.indexOf(';')) : da) === accessoryId)) {
      this.platform.getLogger().debug('Disabled accessory: [%s]', accessoryId);
      return true;
    }
    return false;
  }

  private removeNotExistingAccessories(systemId: string, deviceId: string, ids: string[]) {
    this.platform.getAccessories()
      .filter(accessory => accessory.context.systemId === systemId)
      .filter(accessory => accessory.context.deviceId === deviceId)
      .filter(accessory => !ids.includes(accessory.context.accessoryId))
      .forEach(accessory => this.platform.unregisterPlatformAccessories(accessory));
  }

}