import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export interface ProductConfigurationAccessory {
    id: string;
    name: string
    services: ProductConfigurationService[];
}

export interface ProductConfigurationService {
    type: string;
    name?: string;
    characteristics: ProductConfigurationCharacteristics[];
}

export interface ProductConfigurationCharacteristics {
    type: string;
    value?: any;
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
  accessories: ProductConfigurationAccessory[];
}

interface ProductConfigurationCommon {
  accessory: ProductConfigurationAccessory;
  accessoriesConfiguration: ProductConfigurationAccessory[];
}

interface ProductConfigurationProduct {
  accessories: (string|ProductConfigurationAccessory)[];
}

const ENCODING = 'utf8';

export class ProductConfigurationLoader {

  public static loadProductConfiguration(product: string) : ProductConfiguration {
    const commonConfig = this.loadFile('common') as ProductConfigurationCommon;
    const productConfig = this.loadFile(product.replace(/ /g, '-')) as ProductConfigurationProduct;

    const accessories: ProductConfigurationAccessory[] = [];

    productConfig.accessories.forEach(a => {
      let accessory: ProductConfigurationAccessory | undefined;
      if (typeof a === 'string') {
        accessory = commonConfig.accessoriesConfiguration.find(ac => ac.id === a);
      } else {
        accessory = a;
      }

      if (accessory) {
        accessory.id = (commonConfig.accessory.id || '') + accessory.name;
        accessory.services = [...commonConfig.accessory.services, ...accessory.services];
        accessories.push(accessory);
      }
    });

    return {
      accessories: accessories,
    } as ProductConfiguration;
  }

  private static loadFile(file: string) : unknown {
    const nodeEnv: string = (process.env.NODE_ENV as string);
    let configFile = path.resolve(__dirname, `../config/${file}.yaml`);
    if (nodeEnv === 'test') {
      configFile = path.resolve(__dirname, `../../config/${file}.yaml`);
    }

    return yaml.load(fs.readFileSync(configFile, ENCODING));
  }
}