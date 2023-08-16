import {AttributeComponentModel} from "./AttributeComponentModel";
import {NoValueType} from "../../enums/no_value_type";
import {DataRecordModel} from "../DataRecordModel";
import {Blueprint} from "../../types/type-aliases";

export class ClientDataRenderModel {
constructor(
  //zelfde als config
  public conceptName:string,
  public attributes:AttributeComponentModel[]|NoValueType.NA,
  public errorMessages:string[]|NoValueType.NI, // error boodschap op concept ipv attribuut niveau
  //toegevoegd na aanmaak (createClientDataInstance)
  public listOfRecords?:(DataRecordModel|null)[],
  public record?:DataRecordModel,
  public blueprint?:Blueprint
) {
}
getValueFor?(prop:string){
  return Reflect.get(this,prop)
}
}
