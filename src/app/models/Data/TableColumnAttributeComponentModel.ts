import {NoValueType} from "../../enums/no_value_type";

export class TableColumnAttributeComponentModel {
constructor(
  public sort:boolean,
  public label:string|NoValueType.DBI,
  public customSort:Function|NoValueType.NA
  ) {
}
}
