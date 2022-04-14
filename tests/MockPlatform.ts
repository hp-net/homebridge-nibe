import { PlatformAdapter } from '../src/nibe/PlatformAdapter';
import { Data } from '../src/nibe/uplink/nibe-dto';

export class MockPlatform extends PlatformAdapter  {

    public readonly accessories: any[] = [];

    constructor() {
        super(
        './tmp', 
        {
        }, 
        {
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
        });        
    }

    public test(data: Data) {
        this.handleNibeData(data);
    }

    public registerPlatformAccessories(accessory: any) {
        this.accessories.push(accessory);
    }

    public unregisterPlatformAccessories(deleted: any[]) {
    }

    public getAccessories(): any[] {
        return this.accessories;
    }

    public createAccessory(accessoryId: string): any {
        return {};
    }
}
