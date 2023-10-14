import {ActionIdType} from "../../types/type-aliases";
import {NoValueType} from "../../enums/NoValueTypes.enum";

export class ClientDataConfigModel {
  // dit is de data integratie
constructor(
  public actionId:ActionIdType,
  public errorMessages:string[]|NoValueType.NO_VALUE_ALLOWED=NoValueType.NO_VALUE_ALLOWED,
  public hardcodedData:any|NoValueType.NO_VALUE_ALLOWED=NoValueType.NO_VALUE_ALLOWED,
  ) {
}
}
