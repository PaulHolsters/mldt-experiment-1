import {DataRecordModel} from "./DataRecordModel";
import {Blueprint} from "../types/type-aliases";
export interface DataObjectModel {
  dataMultiple:DataRecordModel[]|undefined,
  dataSingle:DataRecordModel|undefined,
  blueprint:Blueprint|undefined
}
