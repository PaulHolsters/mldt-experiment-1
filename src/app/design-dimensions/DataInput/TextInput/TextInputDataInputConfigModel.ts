import {RestrictionType} from "../../../enums/restrictionType.enum";
export class TextInputDataInputConfigModel {
  public disabled: boolean  = false
  setDisabled(disabled: boolean ) {
    this.disabled = disabled
    return this
  }
  constructor(public restrictions:RestrictionType[]|RegExp) {
  }
}
