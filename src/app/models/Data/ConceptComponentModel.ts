import {AttributeComponentModel} from "./AttributeComponentModel";
import {NoValueType} from "../../enums/no_value_type";
import {DataRecordModel} from "../DataRecordModel";

export class ConceptComponentModel {
constructor(
  public conceptName:string,
  public attributes:AttributeComponentModel[]|NoValueType.NA,
  public errorMessages:string[]|NoValueType.NI, // error boodschap op concept ipv attribuut niveau
  public dataList?:(DataRecordModel|null)[],
  public conceptData?:DataRecordModel,
  public conceptBluePrint?:Object
) {
}
getValueFor?(prop:string){
  return Reflect.get(this,prop)
}
}
