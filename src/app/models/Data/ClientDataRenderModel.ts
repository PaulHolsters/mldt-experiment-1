import {AttributeComponentModel} from "./AttributeComponentModel";
import {NoValueType} from "../../enums/no_value_type";
import {DataRecordModel} from "../DataRecordModel";
import {ActionIdType} from "../../types/type-aliases";
import {Blueprint} from "../../services/data/Blueprint";

export class ClientDataRenderModel {
constructor(
  public actionId:ActionIdType,
  public blueprint:Blueprint,
  public data:(DataRecordModel|null)[]|DataRecordModel|NoValueType.NVY=NoValueType.NVY,
  public hardcodedData:any|NoValueType.NA,
  public attributes:AttributeComponentModel[]|NoValueType.NA,
  public errorMessages:string[]|NoValueType.NI
) {
}
getValueFor?(prop:string){
  return Reflect.get(this,prop)
}
}
