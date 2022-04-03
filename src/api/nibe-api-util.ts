import { InfoData, Data} from './nibe-dto'

export class NibeUtil {

    public static getNibeInfo(data: Data): InfoData {
        const info = {};
        for (const systemUnit of data.unitData) {
            if (systemUnit.categories) {
                for (const category of systemUnit.categories) {
                    if(category.categoryId === 'SYSTEM_INFO') {
                        for (const parameter of category.parameters) {
                            if (parameter.key === 'COUNTRY') {
                                info['country'] = parameter.displayValue;
                            }
                            if (parameter.key === 'PRODUCT') {
                                info['product'] = parameter.displayValue;
                            }
                            if (parameter.key === 'SERIAL_NUMBER') {
                                info['serialNumber'] = parameter.displayValue;
                            }
                        }
                    }
                }
            }
        }

        return {
            country: info['country'],
            product: info['product'],
            serialNumber: info['serialNumber'],
        };
    }

}