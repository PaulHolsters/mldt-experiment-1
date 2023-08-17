import {DataRecordModel} from "./DataRecordModel";
import {Blueprint} from "../types/union-types";
export interface DataObjectModel {
  dataMultiple:DataRecordModel[]|undefined,
  dataSingle:DataRecordModel|undefined,
  blueprint:Blueprint|undefined
}
