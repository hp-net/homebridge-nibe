import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export interface ProductConfigurationAccessory {
    id: string;
    services: ProductConfigurationService[];
}

export interface ProductConfigurationService {
    type: string;
    name?: string;
    characteristics: ProductConfigurationCharacteristics[];
}

export interface ProductConfigurationCharacteristics {
    type: string;
    text?: string;
    id?: number;
    refresh?: boolean;
    attribute?: string
    translate?: boolean;
    mapper?: Map<any, any>;
    parser?: string;
    manage?: {
        id: number;
    };
    props?: {
        maxValue?: any;
        minValue?: any;
        validValues?: any[];
    };
    config?: {
        key: string
        default: any
    };
}

export interface ProductConfiguration {
    global: {
        accessory: ProductConfigurationAccessory;
    };
    accessories: ProductConfigurationAccessory[];
}

const ENCODING = 'utf8';

export class ProductConfigurationLoader {

    public static loadProductConfiguration(product: string) : ProductConfiguration {
        const nodeEnv: string = (process.env.NODE_ENV as string);
        let configFile = path.resolve(__dirname, `../config/${product.replace(/ /g, '-')}.yaml`);
        if (nodeEnv === 'test') {
            configFile = path.resolve(__dirname, `../../config/${product.replace(/ /g, '-')}.yaml`);
        }

        return yaml.load(fs.readFileSync(configFile, ENCODING)) as ProductConfiguration;
    }
}