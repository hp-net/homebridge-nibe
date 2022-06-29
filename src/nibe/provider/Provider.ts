
import { Parameter } from '../DataModel';

abstract class Provider {
    public abstract provide(parameters: Map<number, Parameter>, providerParameters: any);
}

class ErsMaxFanSpeed extends Provider {
    public provide(parameters: Map<number, Parameter>, providerParameters: any) {
        let max;
        for (const id of providerParameters.ids) {
            let param = parameters.get(id);
            if (param && param.value && (max === undefined || param.value > max)) {
                max = param.value;
            }
        }

        return max;
    }
}

export abstract class ProviderManager {
    private static providers: {}; 

    public static get(name: string): Provider {
        if (!ProviderManager.providers) {
            ProviderManager.providers = {};
            ProviderManager.providers['ErsMaxFanSpeed'] = new ErsMaxFanSpeed();
        }

        return ProviderManager.providers[name];
      }
}