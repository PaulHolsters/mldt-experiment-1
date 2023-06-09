import {NoValueType} from "../../enums/no_value_type";

export class MultiSelectAttributeComponentModel {
constructor(
  public conceptName:string|NoValueType.DBI,
  public options:string[]|NoValueType.DBI,
  public selectedOptions:string[],
  public optionLabel:string|NoValueType.DBI
  ) {
}
}
