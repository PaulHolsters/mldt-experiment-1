import {Injectable} from '@angular/core';
import {ActionsService} from "./actions.service";
import {ActionType} from "../enums/serviceTypes.enum";
import {ActionSubType} from "../enums/serviceMethodTypes.enum";
import {EventType} from "../enums/triggerTypes.enum";
import {ActionModel} from "../models/ActionModel";
import {ConfigService} from "./config.service";
import {Subject} from "rxjs";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {StateService} from "./state.service";
import {StoreService} from "./store.service";
import {ActionValueModel} from "../models/ActionValueModel";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {NoValueType} from "../enums/no_value_type";
import {ConfirmationModel} from "../models/ConfirmationModel";
import {DataSpecificationType} from "../enums/dataSpecifications.enum";
import {DataService} from "./data.service";
import {DataRecordModel} from "../models/DataRecordModel";

@Injectable({
  providedIn: 'root'
})
export class UiActionsService {
  public actionFinished = new Subject()

  constructor(
    private storeService:StoreService,
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
    this.actionsService.bindToAction(ActionType.Client,ActionSubType.SetConfigValueAndRebuild)?.subscribe(res=>{
      if(res){
        const action = this.setConfigValueAndRebuild(res.action,res.data)
        if(action){
          this.actionFinished.next({event:EventType.ActionFinished,sourceId:res.action.id})
        }
      }
    })
    this.actionsService.bindToAction(ActionType.Client,ActionSubType.InitializeForm)?.subscribe(res=>{
      if(res){
        // todo res.data is any dus wordt niet gecheckt, maw maak data niet langer any!!!
        const action = this.initializeForm(res.action,res.data,res.target)
        if(action){
          this.actionFinished.next({event:EventType.ActionFinished,sourceId:res.action.id})
        }
      }
    })
    this.actionsService.bindToAction(ActionType.Client,ActionSubType.SetConfirmation)?.subscribe(res=>{
      if(res && res.target && res.target instanceof EventTarget){
        const action = this.setConfirmation(res.action,res.data, res.target)
        if(action){
          this.actionFinished.next({event:EventType.ActionFinished,sourceId:res.action.id})
        }
      }
    })
    this.actionsService.bindToAction(ActionType.Client,ActionSubType.SetProperty)?.subscribe(res=>{
      if(res){
        const action = this.setProperty(res.action,res.data)
        if(action){
          this.actionFinished.next({event:EventType.ActionFinished,sourceId:res.action.id})
        }
      }
    })
  }
  private setConfigValueAndRebuild(action:ActionModel,data?:any){
    const currentAppConfig = this.configService.appConfig
    if(currentAppConfig){
      let config = this.configService.getConfigFromRoot(action.targetName)
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
  private setProperty(action:ActionModel,data?:any){
    let val
    if(typeof (action.value as ActionValueModel).value === 'function'){
      val = (action.value as ActionValueModel).value(this.stateService)
    }
    if(!val) val = (action.value as ActionValueModel).value
    // todo maak methode waarmee je een reeks aan property-values naar een component kan sturen
    this.storeService.getStatePropertySubjects().find(prop=>{
      if(prop.componentName === action.targetName && action.value instanceof ActionValueModel)
        return prop.propName === PropertyName.data
      return false
    })?.propValue.next(data)
      this.storeService.getStatePropertySubjects().find(prop=>{
        if(prop.componentName === action.targetName && action.value instanceof ActionValueModel)
          return prop.propName === action.value.name
        return false
      })?.propValue.next(val)
    return true
  }
  private setConfirmation(action:ActionModel,data?:any,target?:EventTarget){
    if(action.targetName!==NoValueType.NA){
      let comp = this.configService.getConfigFromRoot(action.targetName)
      if(comp && comp.attributes && this.RBS.screenSize){
        const attrVal = this.configService.getAttributeValue(this.RBS.screenSize,PropertyName.confirmationModel,comp.attributes)
        const cm = new ConfirmationModel(attrVal.icon,attrVal.message, target,data)
        this.storeService.getStatePropertySubjects().find(prop=>{
          if(prop.componentName === action.targetName)
            return prop.propName === PropertyName.confirmationModel
          return false
        })?.propValue.next(cm)
      } else throw new Error('Component with name '+action.targetName+ ' could not be found')
    }
    return true
  }
  private initializeForm(action:ActionModel,data?:DataRecordModel,target?:EventTarget){
    const config = this.configService.getConfigFromRoot(action.targetName)
    if(config?.data){
      const compObj = this.dataService.createExtendedConceptModel(action.targetName, {dataSingle:data,dataMultiple:undefined,blueprint:undefined}, config.data)
      const error = compObj?.conceptData === undefined
        || compObj?.conceptBluePrint === null || (compObj?.conceptBluePrint &&  Object.values(compObj?.conceptBluePrint).includes(null))
      if (compObj && !error) {
        this.dataService.saveData(compObj)
        this.dataService.setDataObjectState(config.name, config.type, [DataSpecificationType.Id], compObj)
        // todo bij error de desbetreffende component vervangen door een standaard errortext component
      }
    } else throw new Error('Configuration of component with name '+action.targetName+' is missing a valid data configuration')
    return true
  }
}

