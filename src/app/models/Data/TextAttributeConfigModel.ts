import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {ConceptConfigModel} from "./ConceptConfigModel";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {RestrictionType} from "../../enums/restrictionType.enum";
export class TextAttributeConfigModel {
constructor(
  public name:string,
  public disabled:boolean,
  public only:RestrictionType,
  public customRestriction:RegExp|RestrictionType.NA,
  public icon:IconType,
  public iconPosition:IconPositionType,
  public label:string|undefined,
  public floatLabel:boolean,
  public advisoryText:string|undefined,
  public errorMessage:string[]|undefined,
  public inputFontSize:InputFontSizeType,
  public attributes?:ConceptConfigModel[]
  ) {
}
}
