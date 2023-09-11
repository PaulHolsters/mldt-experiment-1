import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {RestrictionType} from "../../enums/restrictionType.enum";
import {NoValueType} from "../../enums/no_value_type";
export class TextAttributeComponentModel {
constructor(
  public only:RestrictionType|NoValueType.NI,
  public customRestriction:RegExp|RestrictionType.NA,
  public icon:IconType,
  public iconPosition:IconPositionType|NoValueType.NI,
  public floatLabel:boolean,
  public inputFontSize:InputFontSizeType,
  public value:string|NoValueType.NA|NoValueType.NVY
  ) {
}
}
