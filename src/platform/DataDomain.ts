export interface DataFetcher {
  on<T>(eventName: 'data' | 'error', listener: (data: T) => void): this;

  start(): void
  stop(): void
}

export interface System {
  systemId: string;
  name: string;
  premiumSubscriptions: string[];
}

export interface Device {
  id: string;
  name: string;
  serialNumber: string;
  firmwareUpdateAvailable: boolean;
}

export interface Parameter {
  id: string;
  name: string;
  value: number;
  unit: string;
}

export interface Data {
  system: System;
  device: Device
  parameters: Parameter[]
}