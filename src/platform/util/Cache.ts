export class Cache {

  private readonly store: {
    [key: string]: {ttl: number, value: any};
  } = {};

  public async get<T>(key: string, ttl: number, unit: 'MINUTES' | 'SECONDS', callback: () => Promise<T>) {
    const cacheValue = this.store[key];
    if (cacheValue && cacheValue.ttl >= Date.now()) {
      return cacheValue.value;
    }

    const value = await callback();
    if (value) {
      this.store[key] = {
        ttl: Date.now() + (ttl * 1000 * (unit === 'MINUTES' ? 60 : 1)),
        value: value,
      };
    }

    return value;
  }


}