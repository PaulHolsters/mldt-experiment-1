import {AttributeComponentModel} from "./AttributeComponentModel";
import {NoValueType} from "../../enums/no_value_type";
import {DataObjectModel} from "../DataObjectModel";
import {DataRecordModel} from "../DataRecordModel";

export class ConceptComponentModel {
constructor(
  public conceptId:string|NoValueType.NA,
  public conceptName:string,
  public attributes:AttributeComponentModel[]|NoValueType.NA,
  public errorMessages:string[]|NoValueType.NI, // error boodschap op concept ipv attribuut niveau
  public dataList?:DataRecordModel[],
  public conceptData?:DataRecordModel,
  public conceptBluePrint?:Object
) {
}
getValueFor?(prop:string){
  console.log('dit heb ik gevonden')
  return Reflect.get(this,prop)
}
}
