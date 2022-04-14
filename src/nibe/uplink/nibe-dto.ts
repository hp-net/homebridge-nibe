//
// nibeDto.ts
//
// original author: Sebastian Haesselbarth (seb@sebmail.de)
// modified by Hubert Pruszynski (hubert.pruszynski@gmail.com)
//
// original sources: https://github.com/sebilm/ioBroker.nibeuplink
//
// license: MIT
//
// this version is based on original nibeDto.ts version 1.1.1
//
export interface Session {
    token_type?: string;
    access_token?: string;
    refresh_token?: string;
    scope?: string;
    expires_in?: number;
}

export interface SystemUnit {
    systemUnitId: number;
    name: string;
    shortName: string;
    product: string;
    softwareVersion: string;
    categories?: Category[]; // no nibe api property
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

export interface Category {
    categoryId: string;
    name: string;
    parameters: Parameter[];
}

export interface Data {
    unitData: SystemUnit[];
    manageData?: ManageData[];
}

export interface ManageData {
    unit: string;
    parameters: Parameter[];
}

export interface ManagedParameter {
    unit: string;
    parameter: string;
    id: string;
    name: string;
}