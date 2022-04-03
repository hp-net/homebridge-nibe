import { Logger } from 'homebridge';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const DEFAULT_LANG = 'en';
const ENCODING = 'utf8';

export class Locale {

    private texts : Record<string, string>;

    constructor(private readonly lang: string, private readonly log: Logger) {
        try {
            this.texts = yaml.load(fs.readFileSync(path.resolve(__dirname,`./lang/${lang}.yaml`), ENCODING));
        } catch (e1) {
            log.error(`Failed to load language file: ${e1}`);
            try {
                this.texts = yaml.load(fs.readFileSync(path.resolve(__dirname,`./lang/${DEFAULT_LANG}.yaml`), ENCODING));
            } catch (e2) {
                log.error(`Failed to load default language file: ${e2}`);
                throw e2;
            }
        }
    }

    public text(key: string, defaultValue: string) {
        const value = this.texts[key];
        return value === null ? defaultValue : value;
    }
}