import {Injectable} from '@angular/core';
import {ConfigService} from "./config.service";
import {StoreService} from "./store.service";
import {ComponentType} from "./enums/componentTypes.enum";
import {Table} from "./componentclasses/Table";
import utilFunctions from "./utils/utilFunctions";
import {Container} from "./componentclasses/Container";
import {Form} from "./componentclasses/Form";
import {Dialog} from "./componentclasses/Dialog";
import {Button} from "./componentclasses/Button";
import {Label} from "./componentclasses/Label";
import {TextInput} from "./componentclasses/TextInput";
import {FormControl} from "./componentclasses/FormControl";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private componentData:{name:string,properties:Map<string,any>}[] = []
  constructor(private configService:ConfigService) {
  }
  public getProperties(type:ComponentType){
    switch (type) {
      case ComponentType.Table:
        return Table.getProperties()
      case ComponentType.Container:
        return Container.getProperties()
      case ComponentType.Form:
        return Form.getProperties()
      case ComponentType.Dialog:
        return Dialog.getProperties()
      case ComponentType.Button:
        return Button.getProperties()
      case ComponentType.Label:
        return Label.getProperties()
      case ComponentType.TextInput:
        return TextInput.getProperties()
      case ComponentType.FormControl:
        return FormControl.getProperties()
      default:
        throw new Error('Er bestaat geen component van het type '+type)
    }
  }
  private createMap(name:string):Map<string,any>{
    if(name !== 'content-container'){
      let compModel  = this.configService.appConfig?.getComponentConfig(name)
      if (!compModel) {
        compModel = this.configService.appConfig?.getComponentConfigThroughAttributes(name)
      }
      if(compModel)
      return this.getProperties(compModel.type)
      debugger
      throw new Error('Er bestaat geen component met deze naam '+name)
    } else return this.getProperties(ComponentType.Container)
  }
  public syncData(name:string,data:{key:string,value:any}|{key:string,value:any}[]){
    const obj = this.componentData.find(obj=>{
      return obj.name===name
    })
    if(!obj){
      const newObj = {name:name,properties:this.createMap(name)}
      this.componentData.push(newObj)
    }
    this.updateMap(name,data)
  }
  public getValue(name:string,propName:string):any{
    return this.componentData.find(c=>{
      return c.name === name
    })?.properties.get(propName)
  }
  private updateMap(name:string,data:{key:string,value:any}|{key:string,value:any}[]){
    const obj = this.componentData.find(cd=>{
      return cd.name===name
    })
    if(data instanceof Array){
      data.forEach(data=>{
        if(obj)
        obj.properties.set(data.key,data.value)
      })
    } else{
      if(obj)
        obj.properties.set(data.key,data.value)
    }
  }
}
