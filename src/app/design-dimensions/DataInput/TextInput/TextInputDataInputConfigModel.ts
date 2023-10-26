import {RestrictionType} from "../../../enums/restrictionType.enum";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class TextInputDataInputConfigModel {
  public disabled: boolean  = false
  public restrictions:RestrictionType[]|RegExp|NoValueType.NO_VALUE_NEEDED = NoValueType.NO_VALUE_NEEDED
  setDisabled(disabled: boolean ) {
    this.disabled = disabled
    return this
  }
  setRestrictions(restrictions:RestrictionType[]|RegExp|NoValueType.NO_VALUE_NEEDED) {
    this.restrictions = restrictions
    return this
  }
  constructor() {
  }
}
