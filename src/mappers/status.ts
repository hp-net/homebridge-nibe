import { Characteristics, Services } from '../Platform';
import Mapper from '../Mapper';
import { Category } from '../api/nibe-dto';

export default class StatusMapper extends Mapper {

    public handleUpdate(category: Category) {
        this.log.debug('Updating accessory: ' + JSON.stringify(category));
        
        category.parameters.forEach((parameter) => {
          if (parameter.key == 'OUTDOOR_TEMP_BT1' && parameter.value) {
           this.getService(Services.TemperatureSensor)
              .updateCharacteristic(Characteristics.CurrentTemperature, parameter.value)
              .updateCharacteristic(Characteristics.Name, this.locale.text('temperature.current.name', parameter.title));
          }
        });
    }

}