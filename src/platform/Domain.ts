export interface System {
  systemId: number;
  name: string;
  country: string;
  devices: Device[];
}

export interface Device {
  id: string;
  connectionState: string;
  product: Product;
}

export interface Product {
  name: string;
  serialNumber: string;
}

export interface Data {
  system: System;
  device: Device
}