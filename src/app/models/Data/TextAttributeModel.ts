import {ConceptModel} from "./ConceptModel";
import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {ConceptConfigModel} from "./ConceptConfigModel";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {RestrictionType} from "../../enums/restrictionType.enum";
import {DataType} from "../../enums/dataType.enum";
export class TextAttributeModel {
  /*
  * {name:string,dataType:string,disabled:boolean,only:RestrictionType,
      customRestriction:RegExp|RestrictionType.NA,icon?:IconType,
      iconPosition?:IconPositionType,label?:string,floatLabel?:boolean,
      advisoryText?:string,errorMessages?:string[],formControl?:InputFontSizeType}
  * */
constructor(
  public name:string,
  public dataType:string,
  public disabled:boolean,
  public only:RestrictionType,
  public customRestriction:RegExp|RestrictionType.NA,
  public icon:IconType,
  public iconPosition:IconPositionType,
  public floatLabel:boolean,
  public inputFontSize:InputFontSizeType,
  public label:string|undefined,
  public advisoryText:string|undefined,
  public errorMessages:string[]|undefined,
  public value?:number|string|Date|ConceptModel,
  public attributes?:ConceptConfigModel[],
  public dataPipe?:Function[]
  ) {
}
}
