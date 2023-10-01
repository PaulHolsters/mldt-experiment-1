import {RestrictionType} from "../../../enums/restrictionType.enum";
import {NotAllowed} from "../../../types/type-aliases";
export class TextInputDataInputConfigModel {
  public disabled: boolean | NotAllowed = false
  setDisabled(disabled: boolean | NotAllowed) {
    this.disabled = disabled
    return this
  }
  constructor(public restrictions:RestrictionType[]|RegExp) {
  }
}
