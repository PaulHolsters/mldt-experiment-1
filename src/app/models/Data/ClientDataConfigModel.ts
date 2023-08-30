import {ActionIdType} from "../../types/type-aliases";
import {NoValueType} from "../../enums/no_value_type";
import {AttributeComponentModel} from "./AttributeComponentModel";

export class ClientDataConfigModel {
constructor(
  public actionId:ActionIdType,
  public dataLink:string[]|NoValueType.NA=NoValueType.NA,
  public attributes:AttributeComponentModel[]|NoValueType.NA,
  public errorMessages:string[]|NoValueType.NI
  ) {
}
}
