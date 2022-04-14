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
    categories?: Category[];
}
export interface Parameter {
    parameterId: number;
    name: string;
    title: string;
    designation: string;
    unit: string;
    displayValue: string;
    rawValue: number;
    key?: string;
    divideBy?: number;
    value?: number;
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
//# sourceMappingURL=nibe-dto.d.ts.map