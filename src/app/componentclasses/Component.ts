import {ComponentDataType} from "../enums/componentDataTypes.enum";

export abstract class Component{
  public static getProperties(){
    const keys = Reflect.ownKeys(this)
    const properties = new Map<string,any>()
    keys.forEach(k=>{
      if(typeof k === 'string')
      properties.set(k,Reflect.get(this,k))

    })
    return properties
  }

  public static getDataType():ComponentDataType|undefined{
    const hasDataType = Reflect.ownKeys(this).find(k=>{
      return k === 'dataType';

    }) !== undefined
    if(hasDataType) return Reflect.get(this,'dataType')
    return undefined
  }

}
