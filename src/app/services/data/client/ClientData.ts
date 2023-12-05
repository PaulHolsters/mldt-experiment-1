import {ActionIdType, ComponentNameType} from "../../../types/type-aliases";
import {
  DataRecord,
  isDataRecord, List, OutputData, ServerData,
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
      }else{
        this.outputData = data
      }
  }
}
