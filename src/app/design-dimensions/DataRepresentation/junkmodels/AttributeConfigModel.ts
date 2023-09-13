import {ClientDataConfigModel} from "../Data/ClientDataConfigModel";
import {TextAttributeConfigModel} from "./TextAttributeConfigModel";
import {NumberAttributeConfigModel} from "./NumberAttributeConfigModel";
import {NoValueType} from "../../../enums/no_value_type";
import {RadioAttributeConfigModel} from "./RadioAttributeConfigModel";
import {MultiSelectAttributeConfigModel} from "./MultiSelectAttributeConfigModel";
import {DataRecordModel} from "../../DataRecordModel";
import {TableColumnAttributeConfigModel} from "./TableColumnAttributeConfigModel";
export class AttributeConfigModel {
constructor(
  public name:string,// attribuutnaam of conceptnaam
  public dataServer:string|undefined|DataRecordModel[]|number,
  public dataBlueprint:Map<string, string|DataRecordModel[]>|undefined,
  public disabled:boolean|NoValueType=NoValueType.NA, // indien concept is dit niet van toepassing
  public floatLabel:boolean|NoValueType=NoValueType.NA,// indien concept is dit niet van toepassing
  public text:TextAttributeConfigModel|undefined,// indien concept is dit niet van toepassing
  public number:NumberAttributeConfigModel|undefined,// indien concept is dit niet van toepassing
  public radio:RadioAttributeConfigModel|undefined,
  public multiselect:MultiSelectAttributeConfigModel|undefined,
  public tableColumn:TableColumnAttributeConfigModel|undefined,
  public concept:ClientDataConfigModel|undefined,
  public label:string|NoValueType.DBI|NoValueType.NA=NoValueType.DBI,// indien concept is dit niet van toepassing
  public advisoryText:string|NoValueType.NI=NoValueType.NI,// indien concept is dit niet van toepassing
  public errorMessages:string[]|NoValueType.NI|NoValueType.NA=NoValueType.NI,// indien concept is dit niet van toepassing
  ) {
}
}
