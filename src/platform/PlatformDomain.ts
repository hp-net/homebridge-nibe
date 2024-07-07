import {PlatformAccessory} from 'homebridge';
import {AccessoryContext} from './AccessoryDomain';

export interface Platform {
  getConfig(name: string): any;

  getLogger(): Logger;

  getText(key: string): string;

  registerPlatformAccessories(accessory: PlatformAccessory<AccessoryContext>): void;

  unregisterPlatformAccessories(deleted: PlatformAccessory<AccessoryContext>): void;

  getAccessories(): PlatformAccessory<AccessoryContext>[];

  createAccessory(name: string, accessoryId: string): PlatformAccessory<AccessoryContext>;
}

export interface Logger {
  info(message: string, ...parameters: any[]): void;
  warn(message: string, ...parameters: any[]): void;
  error(message: string, ...parameters: any[]): void;
  debug(message: string, ...parameters: any[]): void;
}