import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export interface ProductConfigurationAccessory {
    id: string;
    name: string;
    condition?: ProductConfigurationCondition;
    services: ProductConfigurationService[];
}

export interface ProductConfigurationCondition {
  parameterIds?: number[];
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
        provider?: {
          name: string
          params: any
        };
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
    provider?: {
      name: string
      params: any
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
  accessories: string[];
}

const ENCODING = 'utf8';

export class ProductConfigurationLoader {

  public static loadProductConfiguration(product: string) : ProductConfiguration {
    const commonConfig = this.loadFile('accessories') as ProductConfigurationCommon;

    const accessories: ProductConfigurationAccessory[] = [];

    commonConfig.accessoriesConfiguration.forEach(accessory => {
      accessory.name = (commonConfig.accessory.name || '') + accessory.name;
      accessory.services = [...commonConfig.accessory.services, ...accessory.services];
      accessories.push(accessory);
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