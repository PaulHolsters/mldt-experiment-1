import {DataRecordModel} from "./DataRecordModel";

export interface DataObjectModel {
  dataMultiple:DataRecordModel[]|undefined,
  dataSingle:DataRecordModel|undefined,
  blueprint:Object|undefined
}
