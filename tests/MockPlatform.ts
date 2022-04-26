import { PlatformAdapter } from '../src/nibe/PlatformAdapter';
import { Accessory, Service, Characteristic } from '../src/nibe/AccessoryHandler';
import { Fetcher } from '../src/nibe/Fetcher';
import { Data } from '../src/nibe/uplink/nibe-dto';

class MockCharacteristic implements Characteristic {
    value: any;
    setProps = (props: any) => {

    };

    onSet = (funct: any) => {

    };
}

class MockService implements Service {
    getCharacteristic = (characteristicType) => {
        let s = new MockCharacteristic();
        return s;
    };

    updateCharacteristic = (characteristicType, value) => {

    };
}

class MockAccessory implements Accessory {
    context = {

    };

    services: any[] = [];
    
    getService = (name: string) => {
        let s = new MockService();
        return s;
    };
    
    addService = (serviceType, name?: string, subType?: string) => {
        let s = new MockService();
        return s;
    };
}

export class MockPlatform extends PlatformAdapter  {

    public readonly accessories: Accessory[] = [];

    private readonly nibefetcher: Fetcher = {
            on: (eventName: string | symbol, listener: (...args: any[]) => void): Fetcher => {
                return this.nibefetcher;
            },
            setParams: (unit: string, parameters: any): Promise<void> => {
                return new Promise((resolve, reject) => {});
            }
    };

    constructor() {
        super('./tmp',
        { // config
            language: 'en',
        }, 
        { // logger 
            debug: (message: string, ...parameters: any[]) => {
                console.log(message);
            },
            info: (message: string, ...parameters: any[]) => {
                console.log(message);
            },
            warn: (message: string, ...parameters: any[]) => {
                console.log(message);
            },
            error: (message: string, ...parameters: any[]) => {
                console.log(message);
            }
        },
        () => {return { // fetcher
                on: (eventName: string | symbol, listener: (...args: any[]) => void): Fetcher => {
                    return this.nibefetcher;
                },
                setParams: (unit: string, parameters: any): Promise<void> => {
                    return new Promise((resolve, reject) => {});
                }
            }}
        );     
    }

    public test(data: Data) {
        this.handleNibeData(data);
    }

    public registerPlatformAccessories(accessory: Accessory) {
        this.accessories.push(accessory);
    }

    public unregisterPlatformAccessories(deleted: Accessory[]) {
        deleted.forEach(accessory => {
            this.accessories.splice(this.accessories.indexOf(accessory), 1);
        });
    }

    public getAccessories(): any[] {
        return this.accessories;
    }

    public createAccessory(accessoryId: string): Accessory {
        return new MockAccessory();
    }

    public getServiceType(type: string): any {
        return type;
    }

    public getCharacteristicType(type: string): any {
        return type;
    }
}
