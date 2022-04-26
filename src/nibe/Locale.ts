import { Logger } from './Logger';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

const DEFAULT_LANG = 'en';
const ENCODING = 'utf8';

export class Locale {
    
    private texts : unknown;
    
    constructor(private readonly lang: string, private readonly log: Logger) {
        try {
            const nodeEnv: string = (process.env.NODE_ENV as string);
            let langFile = path.resolve(__dirname, `../lang/${lang}.yaml`);
            if (nodeEnv === 'test') {
                langFile = path.resolve(__dirname, `../../lang/${lang}.yaml`);
            }
            this.texts = yaml.load(fs.readFileSync(langFile, ENCODING));
            
            this.texts = this.flattenObject(this.texts);
        } catch (e1) {
            log.error(`Failed to load language file: ${e1}`);
            try {
                this.texts = yaml.load(fs.readFileSync(path.resolve(__dirname, `../lang/${DEFAULT_LANG}.yaml`), ENCODING));
            } catch (e2) {
                log.error(`Failed to load default language file: ${e2}`);
                throw e2;
            }
        }
    }

    public text(key: string, defaultValue: string | undefined) {
        if (this.texts instanceof Object) {
            const value: string = (<any>this.texts)[key];
            return value === null ? defaultValue : value;
        }

        return defaultValue;
    }

    private flattenObject(ob: any) {
        const toReturn = {};
    
        for (const i in ob) {
            if (!Object.prototype.hasOwnProperty.call(ob, i)) {
                continue;
            }
    
            if ((typeof ob[i]) === 'object' && ob[i] !== null) {
                const flatObject = this.flattenObject(ob[i]);
                for (const x in flatObject) {
                    if (!Object.prototype.hasOwnProperty.call(flatObject, x)) {
                        continue;
                    }
    
                    toReturn[i + '.' + x] = flatObject[x];
                }
            } else {
                toReturn[i] = ob[i];
            }
        }
        return toReturn;
    }
}