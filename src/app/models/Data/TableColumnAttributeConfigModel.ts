import {NoValueType} from "../../enums/no_value_type";

export class TableColumnAttributeConfigModel {
constructor(
  public sort:boolean = false,
  public label:string|NoValueType.DBI,
  public customSort:Function|NoValueType.NA= NoValueType.NA,
  public filter:boolean = false,
  public customFilter:Function|NoValueType.NA= NoValueType.NA,

  ) {
}
}
