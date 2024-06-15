export interface ApiFetcher {
    on(eventName: string | symbol, listener: (...args: any[]) => void): this;
    setParams(unit: string, parameters: any): Promise<void>;
}