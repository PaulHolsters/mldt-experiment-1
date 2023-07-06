import {NoValueType} from "../../enums/no_value_type";
import {FunctionType} from "../../enums/functionTypes.enum";

export class RadioAttributeConfigModel {
constructor(
  public conceptName:string|NoValueType.DBI,
  public values:string[]|NoValueType.DBI,
  public value:string|NoValueType.NA|NoValueType.NVY,
  public pipe:FunctionType[]|NoValueType.NA
  ) {
}
}
