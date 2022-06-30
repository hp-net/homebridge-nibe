
import { Parameter } from '../DataModel';
import { PlatformAdapter } from '../PlatformAdapter';


abstract class Provider {
    public abstract provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter);
}

class MaxValue extends Provider {
    public provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter) {
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
    public provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter) {
        let value = super.provide(parameters, providerParameters, platform);
        let newValue = providerParameters.newValue;
        
        let config = [
            platform.getConfig('ersStep0') || 65,
            platform.getConfig('ersStep1') || 0,
            platform.getConfig('ersStep2') || 30,
            platform.getConfig('ersStep3') || 80,
            platform.getConfig('ersStep4') || 100
        ];

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
                    let index = steps.indexOf(step);
                    if (index > 0 && (steps[index] - steps[index-1])/2<(newValue-steps[index-1])) {
                        out = step;
                    }
                    break;
                }
                if (!reverse && step < newValue) {
                    let index = steps.indexOf(step);
                    if (index > 0 && (steps[index-1] - steps[index])/2>(newValue-steps[index])) {
                        out = step;
                    }
                    break;
                }
                out = step;
            }
        }
        let result = config.indexOf(out);
        return result > 0 ? config.indexOf(out) : 0;
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