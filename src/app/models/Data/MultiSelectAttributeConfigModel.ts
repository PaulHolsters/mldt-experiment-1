import {NoValueType} from "../../enums/no_value_type";

export class MultiSelectAttributeConfigModel {
constructor(
  public conceptName:string|NoValueType.DBI,
  public options:string[]|NoValueType.DBI,
  public selectedOptions:string[]|NoValueType.DBI,
  public optionLabel:string|NoValueType.DBI
  ) {
}
}
