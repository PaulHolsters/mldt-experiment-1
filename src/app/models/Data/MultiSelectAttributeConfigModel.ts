import {NoValueType} from "../../enums/no_value_type";

export class MultiSelectAttributeConfigModel {
constructor(
  public conceptName:string|NoValueType.DBI,
  public options:Object[]|NoValueType.DBI,
  public selectedOptions:Object[]|undefined=[],
  public optionLabel:string|NoValueType.DBI
  ) {
}
}
