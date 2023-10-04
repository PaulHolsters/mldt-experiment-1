import {ActionIdType, ComponentNameType, NotConfigured} from "../../../types/type-aliases";
import {Blueprint} from "./Blueprint";
import {OutputData} from "../../../types/union-types";

export class ClientData {
  public constructor(public readonly id:ActionIdType,
                     public readonly name:ComponentNameType,
                     private _blueprint:Blueprint,
                     public outputData:OutputData=undefined,
                     public errorMessages:string[]|NotConfigured=undefined) {
  }
  public get blueprint():Blueprint{
    return Object.create(this._blueprint)
  }
  public update(data:Blueprint|OutputData){
    // todo branded type DATA, eens gecheckt altijd valid
    if(data instanceof Blueprint){
      this._blueprint = data
    } else {
      this.outputData = data
    }
  }

}
