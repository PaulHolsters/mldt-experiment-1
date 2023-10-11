import {ActionIdType, ComponentNameType, DataLink, NotConfigured, NoValueYet} from "../../../types/type-aliases";
import {Blueprint} from "./Blueprint";
import {BlueprintValue, OutputData} from "../../../types/union-types";
import {DataRecordModel} from "../../../design-dimensions/DataRecordModel";

export class ClientData {
  public constructor(public readonly id:ActionIdType,
                     public readonly name:ComponentNameType,
                     private _blueprint:Blueprint,
                     public outputData:OutputData,
                     public errorMessages:string[]|NotConfigured=undefined) {
  }
  public get blueprint():Blueprint{
    return Object.create(this._blueprint)
  }
  public update(data:Blueprint|OutputData){
    let updated = false
    if(data instanceof Blueprint){
      this._blueprint = data
    } else {
      this.outputData = data
    }
  }
  public setOutputData(data:unknown){
    if(this.isOutPutData(data)) this.outputData = data
  }
  public isOutPutData(data:any): data is OutputData{
    if(!data) return true
    if(typeof data === 'string') return true
    if((typeof data === 'object' && !(data instanceof Array) && 'id' in data && '__typename' in data)) return true
    if(data instanceof Array && data.length===0) return true
    return data instanceof Array && (typeof data[0] === 'string' || data[0] === null ||
      (typeof data[0] === 'object' && !(data[0] instanceof Array) && 'id' in data[0] && '__typename' in data[0])
    )
  }
  //export type BlueprintValue = PropertyType|['enum',string[]]|['object'|'list',[Blueprint,undefined]]
}
