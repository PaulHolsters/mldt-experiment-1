import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {RestrictionType} from "../../enums/restrictionType.enum";

export class TextAttributeConfigModel {
constructor(
  public only:RestrictionType=RestrictionType.NI,
  public customRestriction:RegExp|RestrictionType.NA=RestrictionType.NA,
  public icon:IconType,
  public iconPosition:IconPositionType=IconPositionType.NI,
  public inputFontSize:InputFontSizeType=InputFontSizeType.Base,
  ) {
}
}
