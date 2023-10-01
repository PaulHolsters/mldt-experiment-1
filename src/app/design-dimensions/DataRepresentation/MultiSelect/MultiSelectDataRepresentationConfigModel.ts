import {DeterminedByEngine} from "../../../types/type-aliases";


export class MultiSelectDataRepresentationConfigModel {
  public optionLabel:string|DeterminedByEngine=undefined
  public defaultLabel:string|DeterminedByEngine=undefined
  constructor() {
  }
  setOptionLabel(optionLabel:string|DeterminedByEngine) {
    this.optionLabel = optionLabel
    return this
  }
  setDefaultLabel(defaultLabel:string|DeterminedByEngine) {
    this.defaultLabel = defaultLabel
    return this
  }
}
