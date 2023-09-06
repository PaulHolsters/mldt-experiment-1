import {ActionIdType, ComponentNameType} from "../../../types/type-aliases";
import {Blueprint} from "./Blueprint";
import {DataRecordModel} from "../../../models/DataRecordModel";
import {NoValueType} from "../../../enums/no_value_type";
import {AttributeComponentModel} from "../../../models/DataRepresentation/AttributeComponentModel";

export class ClientData {
  public constructor(public readonly id:ActionIdType,public readonly name:ComponentNameType, private _blueprint:Blueprint,
                     // todo fix bug: data is soms undefined en soms Object met bp als string + __ typename
                     private _data:(DataRecordModel|null)[]|DataRecordModel|NoValueType.NVY=NoValueType.NVY,
                     public _hardcodedData:any|NoValueType.NA=NoValueType.NA,
                     public _attributes:AttributeComponentModel[]|NoValueType.NA=NoValueType.NA,
                     public _errorMessages:string[]|NoValueType.NI=NoValueType.NI) {
  }
  public get blueprint():Blueprint{
    return Object.create(this._blueprint)
  }
  public get data():(DataRecordModel|null)[]|DataRecordModel|NoValueType.NVY{
    if(this._data instanceof Array) return [...this._data]
    if(typeof this._data === 'object' && this._data.hasOwnProperty('id') && this._data.hasOwnProperty('__typename')) return {...this._data}
    return this._data
  }
  public get hardcodedData():any|NoValueType.NA{
    // todo ik weet niet wat het is dus een kopie maken is lastig
    return this._hardcodedData
  }
  public get attributes():AttributeComponentModel[]|NoValueType.NA{
    if(this._attributes === NoValueType.NA) return this._attributes
    return Array.from(this._attributes)
  }
  public get errorMessages():string[]|NoValueType.NI{
    if(this._errorMessages === NoValueType.NI) return this._errorMessages
    return Array.from(this._errorMessages)
  }
  public update(data:Blueprint|DataRecordModel|(DataRecordModel|null)[]){
    if(data instanceof Array){
      this._data = data
    }  else if(data instanceof Blueprint){
      this._blueprint = data
    } else if(data.hasOwnProperty('id') && data.hasOwnProperty('__typename')){
      this._data = data
    } else throw new Error('Data has an invalid format: '+data.toString())
  }

}
