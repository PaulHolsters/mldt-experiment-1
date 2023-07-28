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

}
