
import { Parameter } from '../DataModel';
import { PlatformAdapter } from '../PlatformAdapter';

function getVentilationStepConfig(platform: PlatformAdapter) {
  return [
    platform.getConfig('ventilationStep0') || 65,
    platform.getConfig('ventilationStep1') || 0,
    platform.getConfig('ventilationStep2') || 30,
    platform.getConfig('ventilationStep3') || 80,
    platform.getConfig('ventilationStep4') || 100,
  ];
}

abstract class Provider {
    public abstract provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter);
}

class MaxValue extends Provider {
  public provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter) {
    let max;
    for (const id of providerParameters.ids) {
      const param = parameters.get(id);
      if (param && param.value && (max === undefined || param.value > max)) {
        max = param.value;
      }
    }
    return max;
  }
}

class VentilationRotationSpeedStepSetter extends MaxValue {
  public provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter) {
    const value = super.provide(parameters, providerParameters, platform);
    const newValue = providerParameters.newValue;
        
    const config = getVentilationStepConfig(platform);

    const reverse = value < newValue;
    const steps = reverse ? [...config].sort((n1,n2) => n1 - n2) : [...config].sort((n1,n2) => n2 - n1);
        
    let out = value;
    let check = false;
    for (const step of steps) {
      if (step === value) {
        check = true;
        continue;
      }
      if (check) {
        if (reverse && step > newValue) {
          const index = steps.indexOf(step);
          if (index > 0 && (steps[index] - steps[index-1])/2<(newValue-steps[index-1])) {
            out = step;
          }
          break;
        }
        if (!reverse && step < newValue) {
          const index = steps.indexOf(step);
          if (index > 0 && (steps[index-1] - steps[index])/2>(newValue-steps[index])) {
            out = step;
          }
          break;
        }
        out = step;
      }
    }
    const result = config.indexOf(out);
    return result > 0 ? config.indexOf(out) : 0;
  }
}

class VentilationRotationSpeedSetter extends Provider {
  public provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter) {
    const newValue = providerParameters.newValue;
    const config = getVentilationStepConfig(platform);

    if (newValue === 0) {
      // find 0% rotation speed
      const min = Math.min(...config);
      const index = config.indexOf(min);
      return min === 0 ? index : undefined;
    } 
    
    return 0; //normal rotation speed
  }
}
export abstract class ProviderManager {
  private static providers; 

  public static get(name: string): Provider {
    if (!ProviderManager.providers) {
      ProviderManager.providers = {};
      ProviderManager.providers.MaxValue = new MaxValue();
      ProviderManager.providers.VentilationRotationSpeedStepSetter = new VentilationRotationSpeedStepSetter();
      ProviderManager.providers.VentilationRotationSpeedSetter = new VentilationRotationSpeedSetter();
    }

    return ProviderManager.providers[name];
  }
}