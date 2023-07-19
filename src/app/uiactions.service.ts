import { Injectable } from '@angular/core';
import {ActionsService} from "./actions.service";
import {ActionType} from "./enums/actionTypes.enum";
import {ActionSubType} from "./enums/actionSubTypes.enum";
import {EventType} from "./enums/eventTypes.enum";
import {ActionModel} from "./models/ActionModel";
import {ConfigService} from "./config.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UIActionsService {
  public actionFinished = new Subject()

  constructor(private configService:ConfigService,private actionsService:ActionsService) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public bindActions(){
    this.actionsService.bindToAction(ActionType.Server,ActionSubType.SetValue)?.subscribe(res=>{
      if(res){
        const action = this.setValue(res.action)
        if(action){
          this.actionFinished.next({event:EventType.ActionFinished,sourceId:res.action.id})
        }
      }
    })
  }
  setValue(action:ActionModel){
    const currentAppConfig = this.configService.appConfig
    if(currentAppConfig){
      let config = currentAppConfig.getComponentConfig(action.targetName)
      if(!config) config = currentAppConfig.getComponentConfigThroughAttributes(action.targetName)
      if(!config) throw new Error('action was not configured correctly')
      debugger
      // todo change the property
      // config prop replacen en terug uploaden
      if(config.replace){
        config.replace(action.value?.getInstance(),action.value)
        return true
      }
      debugger
    }
    return false
  }
}
