import {NoValueType} from "../../enums/no_value_type";
import {DataObjectModel} from "../DataObjectModel";

export class MultiSelectAttributeConfigModel {
constructor(
  public conceptName:string|NoValueType.DBI,
  public options:DataObjectModel[]|NoValueType.DBI,
  public selectedOptions:DataObjectModel[]|undefined=[],
  public optionLabel:string|NoValueType.DBI
  ) {
}
}
