import { PlatformAdapter } from '../src/nibe/PlatformAdapter';
import { Accessory, Service, Characteristic } from '../src/nibe/DataModel';
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
    characteristics = {};

    getCharacteristic = (name) => {
        let s = this.characteristics[name];

        if (!s) {
            s = new MockCharacteristic();
            this.characteristics[name] = s;
        }

        return s;
    };

    updateCharacteristic = (name, value) => {
        let c = this.characteristics[name];

        if (c) {
            c.value = value;
        }
    };
}

export class MockAccessory implements Accessory {
    services = {};

    context = {

    };
    
    getService = (serviceType: string) => {
        return this.services[serviceType];
    };
    
    addService = (serviceType, name?: string, subType?: string) => {
        let s = new MockService();

        this.services[serviceType] = s;

        return s;
    };

    get = (serviceType, characteristic) => {
        let s = this.services[serviceType];
        if (!s) {
            return undefined;
        }
        
        let c = s.getCharacteristic(characteristic);
        if (!c) {
            return undefined;
        }
        
        return c.value;
    }
}

export class MockPlatform extends PlatformAdapter  {

    private readonly accessories = new Array();

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

    public getAccessoryById(id: string): Accessory | undefined {
        return this.accessories.find(accessory => accessory.context.accessoryId === id);
    }
}
