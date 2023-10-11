import {DeterminedByEngine} from "../../../types/type-aliases";


export class MultiSelectDataRepresentationConfigModel {
  public optionLabel:string|DeterminedByEngine=undefined // het eerste veld niet gelijk aan id
  public optionValue:string='id'
  public placeholder:string|DeterminedByEngine=undefined // Select a WAARDE optionLabel
  constructor() {
  }
  setOptionLabel(optionLabel:string|DeterminedByEngine) {
    this.optionLabel = optionLabel
    return this
  }
  setPlaceholder(ph:string|DeterminedByEngine) {
    this.placeholder = ph
    return this
  }
}
