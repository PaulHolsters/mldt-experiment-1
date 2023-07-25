import {Injectable} from '@angular/core';
import {ConfigService} from "./config.service";
import {StoreService} from "./store.service";
import {ComponentType} from "./enums/componentTypes.enum";
import {Table} from "./componentclasses/Table";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private componentData:{name:string,properties:Map<string,any>}[] = []
  constructor(private configService:ConfigService,private storeService:StoreService) {
  }
  private createMap(name:string):Map<string,any>{
    debugger
    let compModel = this.configService.appConfig?.getComponentConfig(name)
    if (!compModel) {
      compModel = this.configService.appConfig?.getComponentConfigThroughAttributes(name)
    }
    if(compModel){
      switch (compModel.type){
        case ComponentType.Table:
          return Table.getProperties()
        default:
          throw new Error('Er bestaat geen component van het type '+compModel.type)
      }
    }else throw new Error('Er bestaat geen component met deze naam')
  }
  public syncData(name:string,data:{key:string,value:any}|{key:string,value:any}[]){
    const obj = this.componentData.find(obj=>{
      return obj.name===name
    })
    if(!obj){
      const newObj = {name:name,properties:this.createMap(name)}
      this.componentData.push(newObj)
      debugger
    }
    this.updateMap(name,data)
  }
  private updateMap(name:string,data:{key:string,value:any}|{key:string,value:any}[]){
    const obj = this.componentData.find(cd=>{
      return cd.name===name
    })
    debugger
    if(data instanceof Array){
      data.forEach(data=>{
        if(obj)
        obj.properties.set(data.key,data.value)
      })
    } else{
      if(obj)
        obj.properties.set(data.key,data.value)
      debugger
    }
  }
}
