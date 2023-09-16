import {NumberInputDataInputConfigModel} from "./NumberInput/NumberInputDataInputConfigModel";
import {TextInputDataInputConfigModel} from "./TextInput/TextInputDataInputConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {RadioButtonGroupDataInputConfigModel} from "./RadioButtonGroup/RadioButtonGroupDataInputConfigModel";

export class DataInputConfigModel {
  public disabled: boolean | ZeroValueType.NotAllowed = false

  constructor(
    public componentConfigModel:
      NumberInputDataInputConfigModel |
      TextInputDataInputConfigModel |
      RadioButtonGroupDataInputConfigModel
  ) {
  }

  setDisabled(disabled: boolean | ZeroValueType.NotAllowed) {
    this.disabled = disabled
  }
}
