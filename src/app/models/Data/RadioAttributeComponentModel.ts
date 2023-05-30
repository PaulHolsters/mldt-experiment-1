import {NoValueType} from "../../enums/no_value_type";
export class RadioAttributeComponentModel {
constructor(
  public values:string[],
  public conceptName:string,
  public value:number|NoValueType.NA|NoValueType.NVY
  ) {
}
}
// todo hou er rekening mee dat NoValueTypes ook strings zijn => programmatorisch constraints toevoegen!
