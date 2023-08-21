import {DataRecordModel} from "./DataRecordModel";
export interface DataObjectModel {
  dataMultiple:DataRecordModel[]|undefined,
  dataSingle:DataRecordModel|undefined,
  numberOfNesting:number|undefined,
  blueprint:string|undefined
}
