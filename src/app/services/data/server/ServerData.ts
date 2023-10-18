import {isDataRecord, isList, isServerData, ServerData as ServerDataType} from "../../../types/union-types";
export abstract class ServerData {
  // todo eigenlijk is het logischer om al deze methodes onder de respectievelijke types te zetten als functions
  public static getData(data:Object):ServerDataType|undefined{
    const serverData =
      Object.values(Object.values(data).length > 0 ? Object.values(data)[0] : {}).length>0 ? Object.values(Object.values(data)[0])[0] : undefined
    if(isServerData(serverData)){
      return serverData
    }else if(isList(serverData)){
      return {
        __brand: "server data",
        blueprint: null,
        dataSingle: null,
        numberOfNesting: null,
        dataMultiple:serverData}
    } else if(isDataRecord(serverData)){
      return {
        __brand: "server data",
        blueprint: null,
        dataSingle: serverData,
        numberOfNesting: null,
        dataMultiple:null}
    }
    return
  }
  public static getDataValue(data:ServerDataType,prop:string):number{
    const ar = Object.entries(data).find(([k,v])=>{
      return (k===prop)
    })
    if(ar && ar.length > 1 && typeof ar[1] === 'number') return ar[1]
    throw new Error('No value find in data form server for '+prop)
  }
  public static dataIsNumber(data:ServerDataType,prop:string):boolean{
    return Object.entries(data).find(([k,v])=>{
      return (typeof v === 'number') && k===prop
    }) !== undefined
  }
}
