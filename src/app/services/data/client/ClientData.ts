import {ActionIdType, ComponentNameType} from "../../../types/type-aliases";
import {Blueprint} from "./Blueprint";
import {
  isDataRecord,
  isOutPutData,
  OutputData,
} from "../../../types/union-types";

export class ClientData {
  // dit kan je zien als het client data render model
  public constructor(public readonly id: ActionIdType,
                     public readonly name: ComponentNameType,
                     private _blueprint: Blueprint,
                     public outputData: OutputData|undefined,
                     public errorMessages: string[] | undefined) {
  }
  public get blueprint():Blueprint{
    return Object.create(this._blueprint)
  }
  public update(data:Blueprint|OutputData,field?:string){
    if(data instanceof Blueprint){
      this._blueprint = data
    } else if(isOutPutData(data)){
      if(isDataRecord(data) && field){
        this.outputData = data[field]
      } else{
        this.outputData = data
      }
    } else throw new Error('invalid data')
  }
}
