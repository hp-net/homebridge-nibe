import {Parameter} from '../DataModel';
import {PlatformAdapter} from '../PlatformAdapter';

function getVentilationStepConfig(parameters: Map<number, Parameter>, providerParameters: any) {
  return [
    parameters.get(providerParameters.steps[0]),
    parameters.get(providerParameters.steps[1]),
    parameters.get(providerParameters.steps[2]),
    parameters.get(providerParameters.steps[3]),
    parameters.get(providerParameters.steps[4]),
  ].map(p => p ? p.rawValue : 0);
}

function getHotWaterHeatingTempConfig(platform: PlatformAdapter) {
  return platform.getConfig('hotwaterHeatingTemp') || 40;
}

abstract class Provider {
    public abstract provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter): any;
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
        
    const config = getVentilationStepConfig(parameters, providerParameters);

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
    const config = getVentilationStepConfig(parameters, providerParameters);

    if (newValue === 0) {
      // find 0% rotation speed
      const min = Math.min(...config);
      const index = config.indexOf(min);
      return min === 0 ? index : undefined;
    } 
    
    return 0; //normal rotation speed
  }
}

class HeatMediumFlowMapper extends Provider {
  public provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter): any {

    const heatPomp = parameters.get(providerParameters.heatPompParamId);
    if (!heatPomp || heatPomp.rawValue <= 0) {
      return 0; //OFF
    }

    const temp = parameters.get(providerParameters.temperatureParamId);
    if (providerParameters.type === 'hotwater') {
      if (temp && temp.value && temp.value > getHotWaterHeatingTempConfig(platform)) {
        return 1; //HEATING
      }
    } else {
      const coolingTemp = parameters.get(providerParameters.calculatedCoolingTemperatureParamId);
      if (temp && temp.value && temp.value <= getHotWaterHeatingTempConfig(platform)) {
        return coolingTemp && temp.rawValue < coolingTemp.rawValue ? 2 : 1;
      }
    }

    return 0; //OFF
  }
}

class HeatMediumFlowTemperature extends HeatMediumFlowMapper {
  public provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter) {
    const value = super.provide(parameters, providerParameters, platform);

    if (value === 2 || value === 3) { // HEATING OR COOLING
      const temp = parameters.get(providerParameters.temperatureParamId);
      if (temp) {
        return temp.value;
      }
    }

    // IDLE
    const outdoorTemp = parameters.get(providerParameters.outdoorTemperatureParamId);
    const coolingStartTemp = parameters.get(providerParameters.coolingStartTemperatureParamId);
    const isCooling = outdoorTemp && coolingStartTemp && outdoorTemp.rawValue > coolingStartTemp.rawValue;

    const temp = parameters.get(isCooling ? providerParameters.calculatedCoolingTemperatureParamId : providerParameters.calculatedHeatingTemperatureParamId);
    if (temp) {
      return temp.value;
    }

    return 0;
  }
}

class TargetTemperature extends HeatMediumFlowMapper {
  public provide(parameters: Map<number, Parameter>, providerParameters: any, platform: PlatformAdapter) {
    const value = super.provide(parameters, providerParameters, platform);

    const outdoorTemp = parameters.get(providerParameters.outdoorTemperatureParamId);
    const coolingStartTemp = parameters.get(providerParameters.coolingStartTemperatureParamId);
    const isCooling = value === 2 || (outdoorTemp && coolingStartTemp && outdoorTemp.rawValue > coolingStartTemp.rawValue);

    const temp = parameters.get(isCooling ? providerParameters.calculatedCoolingTemperatureParamId : providerParameters.calculatedHeatingTemperatureParamId);
    if (temp) {
      return temp.value;
    }

    return 0;
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
      ProviderManager.providers.HeatMediumFlowMapper = new HeatMediumFlowMapper();
      ProviderManager.providers.HeatMediumFlowTemperature = new HeatMediumFlowTemperature();
      ProviderManager.providers.TargetTemperature = new TargetTemperature();
    }

    if(ProviderManager.providers[name] === undefined){
      throw new ReferenceError(`No provider with name ${name}`);
    }

    return ProviderManager.providers[name];
  }
}