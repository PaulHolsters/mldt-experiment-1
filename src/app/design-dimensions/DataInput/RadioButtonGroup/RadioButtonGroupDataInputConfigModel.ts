import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class RadioButtonGroupDataInputConfigModel {
  constructor(public radioValues:{label:string,value:string}[]|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine) {
  }
}
