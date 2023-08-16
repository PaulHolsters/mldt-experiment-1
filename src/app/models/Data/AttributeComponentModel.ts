import {ClientDataRenderModel} from "./ClientDataRenderModel";
import {NoValueType} from "../../enums/no_value_type";
import {TextAttributeComponentModel} from "./TextAttributeComponentModel";
import {NumberAttributeComponentModel} from "./NumberAttributeComponentModel";
import {RadioAttributeComponentModel} from "./RadioAttributeComponentModel";
import {MultiSelectAttributeComponentModel} from "./MultiSelectAttributeComponentModel";
import {DataRecordModel} from "../DataRecordModel";
import {TableColumnAttributeConfigModel} from "./TableColumnAttributeConfigModel";
import {TableColumnAttributeComponentModel} from "./TableColumnAttributeComponentModel";
import {Blueprint} from "../../types/type-aliases";
export class AttributeComponentModel {
constructor(
  public name:string,
  public dataServer:string|undefined|DataRecordModel[]|number,
  public dataBlueprint:Blueprint|undefined,
  public disabled:boolean,
  public floatLabel:boolean|NoValueType.NA,
  public text:TextAttributeComponentModel|undefined,
  public number:NumberAttributeComponentModel|undefined,
  public radio:RadioAttributeComponentModel|undefined,
  public multiselect:MultiSelectAttributeComponentModel|undefined,
  public tableColumn:TableColumnAttributeComponentModel|undefined,
  public concept:ClientDataRenderModel|undefined,
  public dataList:DataRecordModel[]|undefined,
  public label:string|NoValueType.DBI|NoValueType.NA,
  public advisoryText:string|NoValueType,
  public errorMessages:string[]|NoValueType
  ) {
}
}
