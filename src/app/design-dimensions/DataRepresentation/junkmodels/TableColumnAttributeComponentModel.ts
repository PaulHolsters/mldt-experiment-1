import {NoValueType} from "../../../enums/no_value_type";

export class TableColumnAttributeComponentModel {
constructor(
  public sort:boolean,
  public filter:boolean,
  public label:string|NoValueType.DBI,
  public customSort:Function|NoValueType.NA,
  public customFilter:Function|NoValueType.NA
  ) {
}
}
