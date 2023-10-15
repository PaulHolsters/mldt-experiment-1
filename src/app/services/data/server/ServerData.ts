import { isServerData, ServerData as ServerDataType} from "../../../types/union-types";
export abstract class ServerData {
  // todo eigenlijk is het logischer om al deze methodes onder de respectievelijke types te zetten als functions
  public static getData(data:Object):ServerDataType|undefined{
    const serverData = Object.values(Object.values(data).length > 0 ? Object.values(data)[0] : {}).length>0 ? Object.values(Object.values(data)[0])[0] : undefined
    if(isServerData(serverData)) return serverData
    return
  }
  public static getDataValue(data:ServerDataType,prop:string):number{
    // todo fix
    const ar = Object.entries(data).find(([k,v])=>{
      return (k===prop)
    })
    if(ar) return ar[1]
    throw new Error('No value find in data form server for '+prop)
  }
  public static dataIsNumber(data:ServerDataType,prop:string):boolean{
    return Object.entries(data).find(([k,v])=>{
      return (typeof v === 'number') && k===prop
    }) !== undefined
  }
}
