import {RestrictionType} from "../../../enums/restrictionType.enum";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class TextInputDataInputConfigModel {
  public disabled: boolean | ZeroValueType.NotAllowed = false
  setDisabled(disabled: boolean | ZeroValueType.NotAllowed) {
    this.disabled = disabled
    return this
  }
  constructor(public restrictions:RestrictionType[]|RegExp) {
  }
}
