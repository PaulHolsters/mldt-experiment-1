import {NumberInputDataInputConfigModel} from "./NumberInput/NumberInputDataInputConfigModel";
import {TextInputDataInputConfigModel} from "./TextInput/TextInputDataInputConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {RadioButtonGroupDataInputConfigModel} from "./RadioButtonGroup/RadioButtonGroupDataInputConfigModel";

export class DataInputConfigModel {


  constructor(
    public componentConfigModel:
      NumberInputDataInputConfigModel |
      TextInputDataInputConfigModel |
      RadioButtonGroupDataInputConfigModel
  ) {
  }


}
