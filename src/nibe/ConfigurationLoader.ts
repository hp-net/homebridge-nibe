import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export interface ConfigurationAccessory {
    id: string;
    name: string;
    condition?: ConfigurationCondition;
    services: ConfigurationService[];
}

export interface ConfigurationCondition {
  parameterIds?: number[];
  provider?: {
    name: string
    params: any
  };
}
export interface ConfigurationService {
    type: string;
    name?: string;
    characteristics: ConfigurationCharacteristics[];
}

export interface ConfigurationCharacteristics {
    type: string;
    condition?: ConfigurationCondition;
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
        mapper?: Map<any, any>;
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

export interface Configuration {
  accessories: ConfigurationAccessory[];
}

interface ConfigurationCommon {
  accessory: ConfigurationAccessory;
  accessoriesConfiguration: ConfigurationAccessory[];
}

const ENCODING = 'utf8';

export class ConfigurationLoader {

  public static loadConfiguration() : Configuration {
    const commonConfig = this.loadFile('accessories') as ConfigurationCommon;

    const accessories: ConfigurationAccessory[] = [];

    commonConfig.accessoriesConfiguration.forEach(accessory => {
      accessory.id = (commonConfig.accessory.id || '') + accessory.id;
      accessory.services = [...commonConfig.accessory.services, ...accessory.services];
      accessories.push(accessory);
    });

    return {
      accessories: accessories,
    } as Configuration;
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