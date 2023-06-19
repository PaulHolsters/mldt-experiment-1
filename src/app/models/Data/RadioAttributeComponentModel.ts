import {NoValueType} from "../../enums/no_value_type";
export class RadioAttributeComponentModel {
constructor(
  public conceptName:string|NoValueType.DBI,
  public values:string[]|NoValueType.DBI,
  public value:string|NoValueType.NA|NoValueType.NVY,
  ) {
}
}
// todo hou er rekening mee dat NoValueTypes ook strings zijn => programmatorisch constraints toevoegen!
