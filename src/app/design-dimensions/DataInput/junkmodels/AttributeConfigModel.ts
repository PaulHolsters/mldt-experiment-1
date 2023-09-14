
export class AttributeConfigModel {
constructor(
  public disabled:boolean|NoValueType=NoValueType.NA, // indien concept is dit niet van toepassing
  public advisoryText:string|NoValueType.NI=NoValueType.NI,//INPUT
  public errorMessages:string[]|NoValueType.NI|NoValueType.NA=NoValueType.NI,//INPUT
  ) {
}
}
