import {Injectable} from '@angular/core';
import {ActionsService} from "./actions.service";
import {ConfigService} from "./config.service";
import {Subject} from "rxjs";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {StateService} from "./state.service";
import {UpdateViewService} from "./updateView.service";
import {ActionValueModel} from "../models/ActionValueModel";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {NoValueType} from "../enums/no_value_type";
import {ConfirmationModel} from "../models/ConfirmationModel";
import {DataService} from "./data.service";
import {Action} from "../effectclasses/Action";
import {ActionType} from "../enums/actionTypes.enum";
import {TriggerType} from "../enums/triggerTypes.enum";
import {ActionIdType} from "../types/type-aliases";

@Injectable({
  providedIn: 'root'
})
export class UiActionsService {
  public actionFinished = new Subject<{trigger:TriggerType,source:ActionIdType}>()

  constructor(
    private storeService:UpdateViewService,
    private stateService:StateService,
    private configService:ConfigService,
    private actionsService:ActionsService,
    private RBS:ResponsiveBehaviourService,
    private dataService:DataService) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public bindActions(){
    this.actionsService.bindToAction(new Action(ActionType.SetLocalConfigurationValueAndRebuild))?.subscribe(res=>{
      if(res){
        const action = this.setConfigValueAndRebuild(res.effect.action)
        if(action){
          this.actionFinished.next({trigger:TriggerType.ActionFinished,source:res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action(ActionType.SetConfirmation))?.subscribe(res=>{
      if(res && res.target && res.target instanceof EventTarget){
        const action = this.setConfirmation(res.effect.action,res.data, res.target)
        if(action){
          this.actionFinished.next({trigger:TriggerType.ActionFinished,source:res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action(ActionType.SetRenderProperty))?.subscribe(res=>{
      if(res){
        const action = this.setProperty(res.effect.action,res.data)
        if(action){
          this.actionFinished.next({trigger:TriggerType.ActionFinished,source:res.effect.action.id})
        }
      }
    })
  }
  private setConfigValueAndRebuild(action:Action){
    const currentAppConfig = this.configService.appConfig
    if(currentAppConfig){
      let config = this.configService.getConfigFromRoot(action.target)
      if(!config) throw new Error('action was not configured correctly')
      if(config.replace && (action.value !==NoValueType.NA && !(action.value instanceof ActionValueModel))){
        config.replace(action.value.getInstance(),action.value)
        this.configService.saveConfig(currentAppConfig)
        this.RBS.rebuildUI()
        return true
      }
    }
    return false
  }
  private setProperty(action:Action,data?:any){
    let val
    if(typeof (action.value as ActionValueModel).value === 'function'){
      val = (action.value as ActionValueModel).value(this.stateService)
    }
    if(!val) val = (action.value as ActionValueModel).value
    // todo maak methode waarmee je een reeks aan property-values naar een component kan sturen
    this.storeService.getStatePropertySubjects().find(prop=>{
      if(prop.componentName === action.target && action.value instanceof ActionValueModel)
        return prop.propName === PropertyName.data
      return false
    })?.propValue.next(data)
      this.storeService.getStatePropertySubjects().find(prop=>{
        if(prop.componentName === action.target && action.value instanceof ActionValueModel)
          return prop.propName === action.value.name
        return false
      })?.propValue.next(val)
    return true
  }
  private setConfirmation(action:Action,data?:any,target?:EventTarget){
    if(action.target!==NoValueType.NA){
      let comp = this.configService.getConfigFromRoot(action.target)
      if(comp && comp.attributes && this.RBS.screenSize){
        const attrVal = this.configService.getAttributeValue(this.RBS.screenSize,PropertyName.confirmationModel,comp.attributes)
        const cm = new ConfirmationModel(attrVal.icon,attrVal.message, target,data)
        this.storeService.getStatePropertySubjects().find(prop=>{
          if(prop.componentName === action.target)
            return prop.propName === PropertyName.confirmationModel
          return false
        })?.propValue.next(cm)
      } else throw new Error('Component with name '+action.target+ ' could not be found')
    }
    return true
  }
}

