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