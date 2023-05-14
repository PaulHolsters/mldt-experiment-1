import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";
import {ConceptConfigModel} from "./ConceptConfigModel";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {RestrictionType} from "../../enums/restrictionType.enum";
import {TextAttributeConfigModel} from "./TextAttributeConfigModel";
import {NumberAttributeConfigModel} from "./NumberAttributeConfigModel";
import {NoValueType} from "../../enums/no_value_type";
export class AttributeConfigModel {
constructor(
  public name:string,// attribuutnaam of conceptnaam
  public disabled:boolean|NoValueType=NoValueType.NA, // indien concept is dit niet van toepassing
  public floatLabel:boolean|NoValueType=NoValueType.NA,// indien concept is dit niet van toepassing
  public text:TextAttributeConfigModel|undefined,// indien concept is dit niet van toepassing
  public number:NumberAttributeConfigModel|undefined,// indien concept is dit niet van toepassing
  public concept:ConceptConfigModel|undefined,
  public label:string|NoValueType.DBI|NoValueType.NA=NoValueType.DBI,// indien concept is dit niet van toepassing
  public advisoryText:string|NoValueType.NI=NoValueType.NI,// indien concept is dit niet van toepassing
  public errorMessages:string[]|NoValueType.NI|NoValueType.NA=NoValueType.NI,// indien concept is dit niet van toepassing
  ) {
}
}
