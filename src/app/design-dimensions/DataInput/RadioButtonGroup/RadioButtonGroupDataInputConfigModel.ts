import {DeterminedByEngine, NotAllowed} from "../../../types/type-aliases";

export class RadioButtonGroupDataInputConfigModel {
  public disabled: boolean | NotAllowed = false
  setDisabled(disabled: boolean | NotAllowed) {
    this.disabled = disabled
    return this
  }
  constructor(public radioValues:{label:string,value:string}[]|DeterminedByEngine=undefined) {
  }
}
