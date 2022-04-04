import { PLATFORM_NAME, Services } from '../Platform';
import Mapper from '../Mapper';
import {Category} from '../api/nibe-dto';

export default class Ers1Mapper extends Mapper {

    public handleUpdate(category: Category) {
        this.log.debug('Updating accessory: ' + JSON.stringify(category));
        this.accessory.getService(Services.TemperatureSensor);
        //const service = this.registerService(Services.TemperatureSensor);
        //this.temperature = service.getCharacteristic(Characteristics.CurrentTemperature);

//accessory.context.myData = 'anything';

        category.parameters.forEach((parameter) => {
          parameter.parameterId;
          parameter.title;
          parameter.designation;
          parameter.unit;
          parameter.displayValue;
          parameter.key;
          parameter.value;
        });
    }
}