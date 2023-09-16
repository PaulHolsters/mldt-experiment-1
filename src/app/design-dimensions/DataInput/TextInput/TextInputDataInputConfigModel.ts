import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {RestrictionType} from "../../../enums/restrictionType.enum";
export class TextInputDataInputConfigModel {
  public restrictions:RestrictionType[]|RegExp|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor() {
  }
  setRestrictions(restrictions:RestrictionType[]|RegExp|ZeroValueType.NotConfigured) {
    this.restrictions = restrictions
    return this
  }
}
