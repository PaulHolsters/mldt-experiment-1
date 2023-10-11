import {ActionIdType, ComponentNameType, DataLink, NotConfigured, NoValueYet} from "../../../types/type-aliases";
import {Blueprint} from "./Blueprint";
import { OutputData} from "../../../types/union-types";
import {DataRecordModel} from "../../../design-dimensions/DataRecordModel";

export class ClientData {
  public constructor(public readonly id:ActionIdType,
                     public readonly name:ComponentNameType,
                     private _blueprint:Blueprint,
                     public datalink:DataLink,
                     public errorMessages:string[]|NotConfigured=undefined) {
  }
  public get blueprint():Blueprint{
    return Object.create(this._blueprint)
  }
  public update(data:Blueprint|DataLink){
    if(data instanceof Blueprint){
      this._blueprint = data
    } else {
      this.datalink = data
    }
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
  public getOutputData():OutputData{
    const keys = this.blueprint.properties.properties.keys()
    const datalink:string[] = this.datalink
    if(datalink.length>=1) datalink.pop()
    let key:string
    let val
    if(datalink.length>=1){
      key = datalink.pop() as string
      if(key in this.blueprint.properties.properties){
        val = this.blueprint.properties.properties.get(key)
      }
    }
    while(val instanceof Array && val.length === 2 && val[1][0] instanceof Blueprint && datalink.length>=1){
      key = datalink.pop() as string
      if(key in val[1][0].properties.properties){
        val = val[1][0].properties.properties.get(key)
      }
    }
    if(this.isOutPutData(val)) return val
    throw new Error('bad config')
  }

}
