import {ActionIdType, ComponentNameType} from "../../../types/type-aliases";
import {Blueprint} from "./Blueprint";
import {isOutPutData, OutputData} from "../../../types/union-types";

export class ClientData {
  // dit kan je zien als het client data render model
  public constructor(public readonly id:ActionIdType,
                     public readonly name:ComponentNameType,
                     private _blueprint:Blueprint,
                     public outputData:OutputData|undefined,
                     public errorMessages:string[]|undefined) {
  }
  public get blueprint():Blueprint{
    return Object.create(this._blueprint)
  }
  public update(data:Blueprint|OutputData){
    let updated = false
    if(data instanceof Blueprint){
      this._blueprint = data
    } else if(isOutPutData(data)){
      // todo fix client data system:
      /*
      * strategie:
      * UI component => name => clientData => outputData: raw data to be displayed in the UI component
      * Op basis van action config kan je zien over welk veld het gaat => dus neem je deze data
      * Wat nog ontbreekt: het veld waarover het gaat, of geen veld indien het om een volledig record gaat => staat al in de actie zelf
      * in de action meerdere targets definiëren
      * */
      this.outputData = data
    } else throw new Error('invalid data')
  }
  public setOutputData(data:unknown){
    if(isOutPutData(data)) this.outputData = data
  }
  //export type BlueprintValue = PropertyType|['enum',string[]]|['object'|'list',[Blueprint,undefined]]
}
