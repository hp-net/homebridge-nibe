export interface System {
  systemId: number;
  name: string;
}

export interface Device {
  id: string;
  name: string;
}

export interface Parameter {
  name: string;
  value: number;
  unit: string;
}

export interface Data {
  system: System;
  device: Device
  parameters: Parameter[]
}