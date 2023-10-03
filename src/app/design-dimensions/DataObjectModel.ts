import {DataRecordModel} from "./DataRecordModel";
export interface DataObjectModel {
  // dit is de data zoals die terugkomt van de server
  dataMultiple:DataRecordModel[]|undefined,
  dataSingle:DataRecordModel|undefined,
  numberOfNesting:number|undefined,
  blueprint:string|undefined
}
