import {ActionIdType, ComponentNameType} from "../../../types/type-aliases";
import {
  DataRecord,
  isDataRecord, isList, List, OutputData, ServerData,
} from "../../../types/union-types";

export class ClientData {
  // dit kan je zien als het client data render model
  public constructor(public readonly id: ActionIdType,
                     public readonly name: ComponentNameType,
                     public outputData: OutputData,
                     public errorMessages: string[] | undefined) {
  }
  public update(data:OutputData,field?:string){
      if(isDataRecord(data) && field){
        this.outputData = data[field]
      } else if(field && isDataRecord(this.outputData)){
        this.outputData[field] = data
      }else if(isDataRecord(data) && isList(this.outputData)){
        this.outputData.splice(this.outputData.findIndex(od=>{
          return od.id === data.id
        }),1,{...data})
      }else{
        this.outputData = data
      }
  }
}
