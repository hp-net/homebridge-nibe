
import { Parameter } from '../DataModel';

abstract class Provider {
    public abstract provide(parameters: Map<number, Parameter>, providerParameters: any);
}

class MaxValue extends Provider {
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

class ErsRotationSpeedStepSetter extends MaxValue {
    public provide(parameters: Map<number, Parameter>, providerParameters: any) {
        let value = super.provide(parameters, providerParameters);
        let newValue = providerParameters.newValue;
        
        let config = [30,18,50,75,100];

        let reverse = value < newValue;
        let steps = reverse ? [...config].sort((n1,n2) => n1 - n2) : [...config].sort((n1,n2) => n2 - n1);
        
        let out = value;
        let check = false;
        for (let step of steps) {
            if (step === value) {
                check = true;
                continue;
            }
            if (check) {
                if (reverse && step > newValue) {
                    break;
                }
                if (!reverse && step < newValue) {
                    break;
                }
                out = step;
            }
        }

        return config.indexOf(out);
    }
}

export abstract class ProviderManager {
    private static providers: {}; 

    public static get(name: string): Provider {
        if (!ProviderManager.providers) {
            ProviderManager.providers = {};
            ProviderManager.providers['MaxValue'] = new MaxValue();
            ProviderManager.providers['ErsRotationSpeedStepSetter'] = new ErsRotationSpeedStepSetter();
        }

        return ProviderManager.providers[name];
      }
}