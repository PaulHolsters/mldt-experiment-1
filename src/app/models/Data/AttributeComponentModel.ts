import {ConceptComponentModel} from "./ConceptComponentModel";
import {ConceptConfigModel} from "./ConceptConfigModel";
import {TextAttributeConfigModel} from "./TextAttributeConfigModel";
import {NumberAttributeConfigModel} from "./NumberAttributeConfigModel";
import {NoValueType} from "../../enums/no_value_type";
export class AttributeComponentModel {
constructor(
  public name:string,
  public dataType:string,
  public disabled:boolean,
  public floatLabel:boolean,
  public text:TextAttributeConfigModel|undefined,
  public number:NumberAttributeConfigModel|undefined,
  public concept:ConceptConfigModel|undefined,
  public label:string|NoValueType.DBI|NoValueType.NA,
  public advisoryText:string|NoValueType,
  public errorMessages:string[]|NoValueType,
  public value:number|string|Date|ConceptComponentModel|NoValueType,
  public dataPipe:Function[]|NoValueType
  ) {
}
}
