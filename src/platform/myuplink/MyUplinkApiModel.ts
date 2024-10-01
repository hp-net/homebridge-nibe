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
    systemId: string;
    name: string;
    country: string;
    devices: Device[];
}

export interface Device {
    id: string;
    connectionState: string;
    product: Product;
}

export interface DeviceInfo {
    id: string;
    connectionState: string;
    firmware: {
        currentFwVersion: string,
        desiredFwVersion: string
    },
}

export interface Subscriptions {
    subscriptions: [
        {
            validUntil: Date,
            type: string
        }
    ]
}

export interface Product {
    name: string;
    serialNumber: string;
}

export interface Parameter {
    parameterId: string,
    parameterName: string,
    parameterUnit: string,
    writable: boolean,
    value: number,
    minValue?: number,
    maxValue?: number,
    stepValue?: number,
    enumValues?: [
        {
            value: string;
            text: string;
        }
    ],
}

