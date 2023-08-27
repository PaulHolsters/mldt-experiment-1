import {AttributeComponentModel} from "./AttributeComponentModel";
import {NoValueType} from "../../enums/no_value_type";
import {DataRecordModel} from "../DataRecordModel";
import { ComponentNameType, ConceptNameType} from "../../types/type-aliases";
import {Blueprint} from "../../services/data/Blueprint";

export class ClientDataRenderModel {
constructor(
  //zelfde als config
  public conceptName:ConceptNameType,
  public componentName:ComponentNameType,
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
