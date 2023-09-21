import {ActionIdType} from "../../types/type-aliases";
import {NoValueType} from "../../enums/no_value_type";

export class ClientDataConfigModel {
  // dit is de data integratie
constructor(
  public actionId:ActionIdType,
  public dataLink:string[]|NoValueType.NA=NoValueType.NA,
  public errorMessages:string[]|NoValueType.NI=NoValueType.NI,
  public hardcodedData:any|NoValueType.NA=NoValueType.NA,
  ) {
}
}
