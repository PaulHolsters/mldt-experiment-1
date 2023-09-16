import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class RadioButtonGroupDataInputConfigModel {
  public radioValues:{label:string,value:string}[]|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  constructor() {
  }
  setRadioValues(radioValues:{label:string,value:string}[]|ZeroValueType.DeterminedByEngine) {
    this.radioValues = radioValues
    return this
  }
}
