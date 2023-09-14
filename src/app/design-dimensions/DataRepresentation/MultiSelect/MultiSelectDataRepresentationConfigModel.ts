import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";

export class MultiSelectDataRepresentationConfigModel {
  public optionLabel:string|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public defaultLabel:string|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  constructor() {
  }
  setOptionLabel(optionLabel:string|ZeroValueType.DeterminedByEngine) {
    this.optionLabel = optionLabel
    return this
  }
  setDefaultLabel(defaultLabel:string|ZeroValueType.DeterminedByEngine) {
    this.defaultLabel = defaultLabel
    return this
  }
}
