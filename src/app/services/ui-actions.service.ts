import { Injectable } from '@angular/core';
import {ActionsService} from "./actions.service";
import {ActionType} from "../enums/actionTypes.enum";
import {ActionSubType} from "../enums/actionSubTypes.enum";
import {EventType} from "../enums/eventTypes.enum";
import {ActionModel} from "../models/ActionModel";
import {ConfigService} from "./config.service";
import {Subject} from "rxjs";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {StateService} from "./state.service";
import {StoreService} from "./store.service";
import {ActionValueModel} from "../models/ActionValueModel";

@Injectable({
  providedIn: 'root'
})
export class UiActionsService {
  public actionFinished = new Subject()

  constructor(private storeService:StoreService,private stateService:StateService,private configService:ConfigService,private actionsService:ActionsService,private RBS:ResponsiveBehaviourService) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public bindActions(){
    this.actionsService.bindToAction(ActionType.Client,ActionSubType.SetConfigValueAndRebuild)?.subscribe(res=>{
      if(res){
        const action = this.setConfigValueAndRebuild(res.action)
        if(action){
          this.actionFinished.next({event:EventType.ActionFinished,sourceId:res.action.id})
        }
      }
    })
    this.actionsService.bindToAction(ActionType.Client,ActionSubType.SetProperty)?.subscribe(res=>{
      if(res){
        const action = this.setProperty(res.action)
        if(action){
          this.actionFinished.next({event:EventType.ActionFinished,sourceId:res.action.id})
        }
      }
    })
  }
  private setConfigValueAndRebuild(action:ActionModel){
    const currentAppConfig = this.configService.appConfig
    if(currentAppConfig){
      let config = currentAppConfig.getComponentConfig(action.targetName)
      if(!config) config = currentAppConfig.getComponentConfigThroughAttributes(action.targetName)
      if(!config) throw new Error('action was not configured correctly')
      if(config.replace && !(action.value instanceof ActionValueModel)){
        config.replace(action.value?.getInstance(),action.value)
        this.configService.saveConfig(currentAppConfig)
        this.RBS.rebuildUI()
        return true
      }
    }
    return false
  }
  private setProperty(action:ActionModel){
    let val
    if(typeof (action.value as ActionValueModel).value === 'function'){
      val = (action.value as ActionValueModel).value(this.stateService)
    }
    if(!val) val = (action.value as ActionValueModel).value
      this.storeService.getStatePropertySubjects().find(prop=>{
        if(prop.componentName === action.targetName && action.value instanceof ActionValueModel)
          return prop.propName === action.value.name
        return false
      })?.propValue.next(val)
    return true
  }
}
