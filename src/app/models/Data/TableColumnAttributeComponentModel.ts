import {NoValueType} from "../../enums/no_value_type";

export class TableColumnAttributeComponentModel {
constructor(
  public sort:boolean = false,
  public label:string|NoValueType.DBI
  ) {
}
}
