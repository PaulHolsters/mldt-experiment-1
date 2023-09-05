import {NoValueType} from "../../enums/no_value_type";
import {DataObjectModel} from "../DataObjectModel";
import {DataRecordModel} from "../DataRecordModel";

export class MultiSelectAttributeConfigModel {
constructor(
  public conceptName:string|NoValueType.DBI,
  public options:DataRecordModel[]|NoValueType.DBI,
  public selectedOptions:DataRecordModel[]|undefined=[],
  public optionLabel:string|NoValueType.DBI
  ) {
}
}
