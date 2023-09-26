import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class RadioButtonGroupDataInputConfigModel {
  public disabled: boolean | ZeroValueType.NotAllowed = false
  setDisabled(disabled: boolean | ZeroValueType.NotAllowed) {
    this.disabled = disabled
    return this
  }
  constructor(public radioValues:{label:string,value:string}[]|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine) {
  }
}
