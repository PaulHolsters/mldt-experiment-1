import {ConceptModel} from "./ConceptModel";
import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {ConceptConfigModel} from "./ConceptConfigModel";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {RestrictionType} from "../../enums/restrictionType.enum";
export class AttributeModel {
constructor(
  public name:string,
  public only:RestrictionType,
  public customRestriction:RegExp|RestrictionType.NA,
  public icon:IconType,
  public iconPosition:IconPositionType,
  public label:string|undefined,
  public floatLabel:boolean,
  public advisoryText:string|undefined,
  public errorMessage:string[]|undefined,
  public inputFontSize:InputFontSizeType,
  public value?:number|string|Date|ConceptModel,
  public attributes?:ConceptConfigModel[],
  public dataPipe?:Function[]
  ) {
}
}
