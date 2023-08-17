import {DataRecordModel} from "./DataRecordModel";
import {BlueprintType} from "../types/type-aliases";
export interface DataObjectModel {
  dataMultiple:DataRecordModel[]|undefined,
  dataSingle:DataRecordModel|undefined,
  blueprint:BlueprintType|undefined
}
