import {Injectable} from '@angular/core';
import {ActionsService} from "./actions.service";
import {ConfigService} from "./config.service";
import {Subject} from "rxjs";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {StateService} from "./state.service";
import {RenderPropertiesService} from "./renderProperties.service";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {ServerDataService} from "./data/server/server-data.service";
import {Action} from "../effectclasses/Action";
import {ActionType} from "../enums/actionTypes.enum";
import {TriggerType} from "../enums/triggerTypes.enum";
import {ActionIdType, ComponentNameType, isComponentName, isDataLink} from "../types/type-aliases";
import {ActionValueModel} from "../design-dimensions/ActionValueModel";
import {ConfirmationModel} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmationModel";
import {ClientDataService} from "./data/client/client-data.service";
import {Effect} from "../effectclasses/Effect";
import {Blueprint} from "./data/client/Blueprint";
import {ClientData} from "./data/client/ClientData";
import {NoValueType} from "../enums/NoValueTypes.enum";
import {DataRecord, isClientData, List} from "../types/union-types";
import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";

@Injectable({
  providedIn: 'root'
})
export class UiActionsService {
  public actionFinished = new Subject<{trigger:TriggerType.ActionFinished,source:ActionIdType}>()

  constructor(
    private renderPropertiesService:RenderPropertiesService,
    private stateService:StateService,
    private configService:ConfigService,
    private actionsService:ActionsService,
    private RBS:ResponsiveBehaviourService,
    private dataService:ServerDataService,
    private clientDataService:ClientDataService) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public bindActions(){
    this.actionsService.bindToAction(new Action('',ActionType.SetLocalConfigurationValueAndRebuild))?.subscribe(res=>{
      if(res){
        const action = this.setConfigValueAndRebuild(res.effect.action)
        if(action){
          this.actionFinished.next({trigger:TriggerType.ActionFinished,source:res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action('',ActionType.SetConfirmation))?.subscribe(res=>{
      if(res && res.target && res.target instanceof EventTarget){
        const action = this.setConfirmation(res.effect.action,res.data, res.target)
        if(action){
          this.actionFinished.next({trigger:TriggerType.ActionFinished,source:res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action('',ActionType.SetRenderProperty))?.subscribe(res=>{
      if(res){
        const action = this.setProperty(res.effect.action,res.data)
        if(action){
          this.actionFinished.next({trigger:TriggerType.ActionFinished,source:res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action('',ActionType.UpdateDataRelatedProperties))?.subscribe(res=>{
      if(res){
        const action = this.updateDataRelatedProps(res)
        if(action){
          this.actionFinished.next({trigger:TriggerType.ActionFinished,source:res.effect.action.id})
        }
      }
    })
    this.actionsService.bindToAction(new Action('',ActionType.UpdateDataProperties))?.subscribe(res=>{
      if(res){
        const action = this.outputData(res)
        if(action){
          this.actionFinished.next({trigger:TriggerType.ActionFinished,source:res.effect.action.id})
        }
      }
    })
  }
  private updateDataRelatedProps(res: {
    effect: Effect,
    data: Blueprint|[ComponentNameType,DataRecord|(DataRecord|null)[]]|ClientData|string,
    target: EventTarget | undefined}){
    if(isClientData(res.data)){
      const dl = this.configService.getConfigFromRoot(res.data.name)
      if(dl && dl.clientData && isDataLink(res.effect.action.conceptName,this.configService)){
        // todo voeg interface voor getRenderProps toe
        const value = res.data.blueprint.getBlueprintValueForDataLink(res.effect.action.conceptName)
        const input:{
          [key: string]: any
        }|undefined
          = dl.dataInput?.getDataInputRenderProperties(this.RBS.screenSize,
          value)
        const repres:{
          [key: string]: any
        }|undefined
          = dl.dataRepresentation?.getDataRepresentationRenderProperties(this.RBS.screenSize,
          value)
        this.renderPropertiesService.getStatePropertySubjects().filter(sp=>{
          return sp.componentName===dl.name
        }).forEach(prop=>{
          if(input && prop.propName in input){
            prop.propValue.next(input[prop.propName])
          }
          if(repres && prop.propName in repres){
            prop.propValue.next(repres[prop.propName])
          }
        })
      }
    }
    return true
  }
  private outputData(res:{effect:Effect,data:Blueprint|[ComponentNameType,DataRecord|List]|ClientData|string, target:EventTarget|undefined}) {
    if(isComponentName(res.effect.action.target,this.configService)){
      const cd = this.clientDataService.getClientData(res.effect.action.target)
      this.renderPropertiesService.getStatePropertySubjects().filter(ps=>{
        return ps.componentName===cd?.name
      }).forEach(propSubj=>{
        switch (propSubj.propName){
          case PropertyName.outputData:
            propSubj.propValue.next(cd?.outputData)
            break
          case PropertyName.conceptBlueprint:
            propSubj.propValue.next(cd?.blueprint)
            break
          case PropertyName.dataLink:
            if(cd?.name && isDataLink(res.effect.action.conceptName,this.configService)) {
              propSubj.propValue.next(res.effect.action.conceptName)
            }
            break
        }
      })
    } else{
      this.clientDataService.clientData.forEach(cd=>{
        this.renderPropertiesService.getStatePropertySubjects().filter(ps=>{
          return ps.componentName===cd.name
        }).forEach(propSubj=>{
          switch (propSubj.propName){
            case PropertyName.outputData:
              propSubj.propValue.next(cd.outputData)
              break
            case PropertyName.conceptBlueprint:
              propSubj.propValue.next(cd.blueprint)
              break
            case PropertyName.dataLink:
              if(isDataLink(res.effect.action.conceptName,this.configService)) {
                propSubj.propValue.next(res.effect.action.conceptName)
              }
              break
          }
        })
      })
    }
    return true
  }
  private setConfigValueAndRebuild(action:Action){
    const currentAppConfig = this.configService.appConfig
    if(currentAppConfig){
      let config = this.configService.getConfigFromRoot(action.target)
      if(!config) throw new Error('action was not configured correctly')
      if(config.replace && (action.value instanceof ActionValueModel)){
        // ResponsiveSizeConfigModel | ResponsiveOverflowConfigModel | ResponsiveContainerChildLayoutConfigModel | ResponsiveVisibilityConfigModel
        if(action.value.value!=='list'&& action.value.value!=='object' && typeof action.value.value!=='function'&&typeof action.value.value !== 'boolean')
        config.replace(action.value.name,action.value.value)
        this.configService.saveConfig(currentAppConfig)
        this.RBS.rebuildUI()
        return true
      }
    }
    return false
  }
  private setProperty(action:Action,data?:any){
    let val
    if(typeof ((action.value as ActionValueModel).value) === 'function'){
      val = ((action.value as ActionValueModel).value as Function)(this.stateService)
    }
    if(!val) val = (action.value as ActionValueModel).value
    // todo maak methode waarmee je een reeks aan property-values naar een component kan sturen
    this.renderPropertiesService.getStatePropertySubjects().find(prop=>{
      if(prop.componentName === action.target && action.value instanceof ActionValueModel)
        return prop.propName === PropertyName.data
      return false
    })?.propValue.next(data)
      this.renderPropertiesService.getStatePropertySubjects().find(prop=>{
        if(prop.componentName === action.target && action.value instanceof ActionValueModel)
          return prop.propName === action.value.name
        return false
      })?.propValue.next(val)
    return true
  }
  private setConfirmation(action:Action,data?:any,target?:EventTarget){
/*    if(action.target!==NoValueType.NO_VALUE_ALLOWED){
      let comp = this.configService.getConfigFromRoot(action.target)
      if(comp && comp.attributes && this.RBS.screenSize){
        const attrVal = this.configService.getAttributeValue(this.RBS.screenSize,PropertyName.confirmationModel,comp.attributes)
        const cm = new ConfirmationModel(attrVal.icon,attrVal.message, target,data)
        this.renderPropertiesService.getStatePropertySubjects().find(prop=>{
          if(prop.componentName === action.target)
            return prop.propName === PropertyName.confirmationModel
          return false
        })?.propValue.next(cm)
      } else throw new Error('Component with name '+action.target+ ' could not be found')
    }*/
    return true
  }
}

