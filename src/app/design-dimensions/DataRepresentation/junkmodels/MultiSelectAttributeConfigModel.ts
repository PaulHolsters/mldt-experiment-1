import {NoValueType} from "../../../enums/no_value_type";
import {DataObjectModel} from "../../DataObjectModel";
import {DataRecordModel} from "../../DataRecordModel";

export class MultiSelectAttributeConfigModel {
constructor(
  public conceptName:string|NoValueType.DBI,
  public options:DataRecordModel[]|NoValueType.DBI,
  public selectedOptions:DataRecordModel[]|undefined=[], // data value
  public optionLabel:string|NoValueType.DBI // data representatie
  ) {
}
}
