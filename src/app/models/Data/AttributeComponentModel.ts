import {ConceptComponentModel} from "./ConceptComponentModel";
import {NoValueType} from "../../enums/no_value_type";
import {TextAttributeComponentModel} from "./TextAttributeComponentModel";
import {NumberAttributeComponentModel} from "./NumberAttributeComponentModel";
import {RadioAttributeComponentModel} from "./RadioAttributeComponentModel";
import {MultiSelectAttributeComponentModel} from "./MultiSelectAttributeComponentModel";
import {DataObjectModel} from "../DataObjectModel";
export class AttributeComponentModel {
constructor(
  public name:string,
  public dataType:string|DataObjectModel[],
  public bluePrint:Map<string, string|DataObjectModel[]>|undefined,
  public disabled:boolean,
  public floatLabel:boolean|NoValueType.NA,
  public text:TextAttributeComponentModel|undefined,
  public number:NumberAttributeComponentModel|undefined,
  public radio:RadioAttributeComponentModel|undefined,
  public multiselect:MultiSelectAttributeComponentModel|undefined,
  public concept:ConceptComponentModel|undefined,
  public dataList:DataObjectModel[]|undefined,
  public label:string|NoValueType.DBI|NoValueType.NA,
  public advisoryText:string|NoValueType,
  public errorMessages:string[]|NoValueType,
  public dataPipe:Function[]|NoValueType
  ) {
}
}
