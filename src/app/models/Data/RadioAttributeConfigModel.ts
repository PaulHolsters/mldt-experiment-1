import {NoValueType} from "../../enums/no_value_type";

export class RadioAttributeConfigModel {
constructor(
  public conceptName:string|NoValueType.DBI,
  public values:string[]|NoValueType.DBI,
  public value:number|NoValueType.NA|NoValueType.NVY,
  ) {
}
}
