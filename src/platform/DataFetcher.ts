export interface DataFetcher {
    on<T>(eventName: 'data' | 'error', listener: (data: T) => void): this;
}