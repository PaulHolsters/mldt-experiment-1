import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {RestrictionType} from "../../enums/restrictionType.enum";
import {NoValueType} from "../../enums/no_value_type";

export class TextAttributeConfigModel {
constructor(
  public only:RestrictionType=RestrictionType.NI, // data - input => voorlopig in eigen component
  public customRestriction:RegExp|RestrictionType.NA=RestrictionType.NA, // data - input => voorlopig in eigen component
  public icon:IconType, //  icons on a component => nieuw model (is voor input, button ,....)
  public iconPosition:IconPositionType=IconPositionType.NI, // icons on a component => nieuw model
  public inputFontSize:InputFontSizeType=InputFontSizeType.Base, // font model => nieuw model : geldt voor vele componenten
  public value:string|NoValueType.NA|NoValueType.NVY // data value = clientdata
  ) {
}
}
