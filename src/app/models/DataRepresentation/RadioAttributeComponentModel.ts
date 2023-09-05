import {NoValueType} from "../../enums/no_value_type";
import {FunctionType} from "../../enums/functionTypes.enum";
export class RadioAttributeComponentModel {
constructor(
  public conceptName:string|NoValueType.DBI,
  public radioValues:{label:string,value:string}[]|NoValueType.DBI,
  public value:string|NoValueType.NA|NoValueType.NVY,
  public pipe:FunctionType[]|NoValueType.NA
  ) {
}
}
// todo hou er rekening mee dat NoValueTypes ook strings zijn => programmatorisch constraints toevoegen!
