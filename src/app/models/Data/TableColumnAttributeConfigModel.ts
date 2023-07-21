import {NoValueType} from "../../enums/no_value_type";

export class TableColumnAttributeConfigModel {
constructor(
  public sort:boolean = false,
  public label:string|NoValueType.DBI
  ) {
}
}
