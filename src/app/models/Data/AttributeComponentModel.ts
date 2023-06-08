import {ConceptComponentModel} from "./ConceptComponentModel";
import {NoValueType} from "../../enums/no_value_type";
import {TextAttributeComponentModel} from "./TextAttributeComponentModel";
import {NumberAttributeComponentModel} from "./NumberAttributeComponentModel";
import {RadioAttributeComponentModel} from "./RadioAttributeComponentModel";
import {MultiSelectAttributeConfigModel} from "./MultiSelectAttributeConfigModel";
export class AttributeComponentModel {
constructor(
  public name:string,
  public dataType:string,
  public disabled:boolean,
  public floatLabel:boolean,
  public text:TextAttributeComponentModel|undefined,
  public number:NumberAttributeComponentModel|undefined,
  public radio:RadioAttributeComponentModel|undefined,
  public multiselect:MultiSelectAttributeConfigModel|undefined,// todo nogaan hoe dit allemaal zit
  public concept:ConceptComponentModel|undefined,
  public label:string|NoValueType.DBI|NoValueType.NA,
  public advisoryText:string|NoValueType,
  public errorMessages:string[]|NoValueType,
  public dataPipe:Function[]|NoValueType
  ) {
}
}
