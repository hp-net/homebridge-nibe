export interface Session {
    token_type?: string;
    access_token?: string;
    refresh_token?: string;
    scope?: string;
    expires_in?: number;
}

export interface SystemMeResponse {
    page: number;
    itemsPerPage: number;
    numItems: number;
    systems: System[];
}

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

export interface Parameter {
    parameterId: number;
    name: string;
    title: string;
    designation: string;
    unit: string;
    displayValue: string;
    rawValue: number;
    key?: string; // no nibe api property
    divideBy?: number; // no nibe api property
    value?: number; // no nibe api property
}

