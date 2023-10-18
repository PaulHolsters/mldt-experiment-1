import {ActionIdType} from "../../types/type-aliases";
import {NoValueType} from "../../enums/NoValueTypes.enum";

export class ClientDataConfigModel {
constructor(
  public actionId:ActionIdType,
  public errorMessages:string[]|NoValueType.NO_VALUE_ALLOWED=NoValueType.NO_VALUE_ALLOWED,
  public hardcodedData:any|NoValueType.NO_VALUE_ALLOWED=NoValueType.NO_VALUE_ALLOWED,
  ) {
}
}
