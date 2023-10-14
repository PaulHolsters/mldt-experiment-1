import {isOutPutData, OutputData} from "../../../types/union-types";


export abstract class ServerData {
  public static getData(data:Object):OutputData|undefined{
    const outputData = Object.values(Object.values(data).length > 0 ? Object.values(data)[0] : {}).length>0 ? Object.values(Object.values(data)[0])[0] : undefined
    if(isOutPutData(outputData)) return outputData
    return
  }
  public static getDataValue(data:Object,prop:string){
    const ar = Object.entries(data).find(([k,v])=>{
      return (k===prop)
    })
    if(ar) return ar[1]
    throw new Error('No value find in data form server for '+prop)
  }
  public static dataIsNumber(data:Object,prop:string):boolean{
    return Object.entries(data).find(([k,v])=>{
      return (typeof v === 'number') && k===prop
    }) !== undefined
  }



}
