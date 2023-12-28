import {Injectable} from '@angular/core';
import {TriggerType} from "../enums/triggerTypes.enum";
import AppConfig from "./appConfig";
import {ActionsService} from "./actions.service";
import {ConfigService} from "./config.service";
import {ServerDataService} from "./data/server/server-data.service";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {RenderPropertiesService} from "./renderProperties.service";
import {UiActionsService} from "./ui-actions.service";
import {ServiceType} from "../enums/serviceTypes.enum";
import {ClientDataService} from "./data/client/client-data.service";
import {ActionType} from "../enums/actionTypes.enum";
import {ComponentNameType, EffectIdType, isEffectAsSource} from "../types/type-aliases";
import {StateService} from "./state.service";
import {isNoValueType} from "../types/union-types";

@Injectable({
  providedIn: 'root'
})
export class EventsService{
  constructor(private configService:ConfigService,
              private actionsService:ActionsService,
              private serverDataService:ServerDataService,
              private clientDataService:ClientDataService,
              private RBSService:ResponsiveBehaviourService,
              private storeService:RenderPropertiesService,
              private UIActionsService:UiActionsService,
              private stateService:StateService) {

    this.UIActionsService.actionFinished.subscribe(res =>{
      // todo er wordt een effect as source aangemaakt maar geen verstuurd na actie => gewoon versturen zit in res.effect.source[1] en res.effect.id
      if(isEffectAsSource(res,this.configService)){
        this.runningEffects.splice(this.runningEffects.map(e=>e[0]).indexOf(res[0]),1)
      }
      this.triggerEvent(res.trigger,res.source)
    })

    this.RBSService.actionFinished.subscribe(res =>{
      if(isEffectAsSource(res,this.configService)){
        this.runningEffects.splice(this.runningEffects.map(e=>e[0]).indexOf(res[0]),1)
      }
      this.triggerEvent(res.trigger,res.source)
    })

    this.storeService.actionFinished.subscribe(res =>{
      if(isEffectAsSource(res,this.configService)){
        this.runningEffects.splice(this.runningEffects.map(e=>e[0]).indexOf(res[0]),1)
      }
      this.triggerEvent(res.trigger,res.source)
    })

    this.serverDataService.actionFinished.subscribe(res =>{
      if(isEffectAsSource(res,this.configService)){
        this.runningEffects.splice(this.runningEffects.map(e=>e[0]).indexOf(res[0]),1)
      }
      this.triggerEvent(res.trigger,res.source)
    })

    this.clientDataService.actionFinished.subscribe(res =>{
      if(isEffectAsSource(res,this.configService)){
        this.runningEffects.splice(this.runningEffects.map(e=>e[0]).indexOf(res[0]),1)
      }
      this.triggerEvent(res.trigger,res.source)
    })

    this.clientDataService.clientDataUpdated.subscribe(res =>{
      this.triggerEvent(TriggerType.ClientDataUpdated, ServiceType.DataService,res)
    })
    this.clientDataService.startDataServerAction.subscribe(res =>{
      switch (res.action){
        case ActionType.GetInstance:
          this.triggerEvent(TriggerType.InstanceNeeded,ServiceType.DataService,res)
          break
        case ActionType.GetAllInstances:
          this.triggerEvent(TriggerType.AllInstancesNeeded,ServiceType.DataService,res)
          break
      }
    })
  }
  public hasEffect(param: [EffectIdType,number|undefined]) {
    return this.runningEffects.find(e=>{
      return e[0]===param[0] && e[1]===param[1]
    }) !== undefined
  }

  private runningEffects: [EffectIdType,number|undefined][] = []
  public triggerEvent(trigger:TriggerType,source:ComponentNameType|[ComponentNameType,string]|[ComponentNameType,(number|undefined)]|ServiceType,data?:any,target?:EventTarget){
    // todo werk any weg op termijn hier
    if(data && data instanceof AppConfig){
      this.configService.saveConfig(data)
      this.actionsService.createActionSubjects()
    }
    this.configService.getEffectsForEvent(trigger,source).forEach(effect=>{
      if(
        typeof source === 'string'
        ||(source instanceof Array
        && source.length===2
        && typeof source[0]==='string'
        && typeof source[1]==='string')){
        // todo voorlopig enkel condities op de trigger, later ook de action zelf
        if(isNoValueType(effect.trigger.condition) || (effect.trigger.condition(this,source))){
          this.actionsService.triggerAction(effect,data,target,(source as (string|[string,string])))
          const index = source instanceof Array && source.length===2 && typeof source[1] === 'number'? source[1]: undefined
          if(!isNoValueType(effect.id) && !this.hasEffect([effect.id,index])){
            this.runningEffects.push([effect.id,index])
          }
        }
      } else if(isNoValueType(effect.trigger.condition) ||
        (source instanceof Array && source.length===2 && (typeof source[1] === 'number'|| source[1]===undefined)
        && effect.trigger.condition(this,source))){
        // todo het is wellicht deze die getriggered wordt en die bevat geen source => zet source er gewoon bij
        if(typeof source === 'number'){
          this.actionsService.triggerAction(effect,data,target)
        }else {
          this.actionsService.triggerAction(effect,data,target,source)
        }
        const index = source instanceof Array && source.length===2 && typeof source[1] === 'number'? source[1]: undefined
        if(!isNoValueType(effect.id) && !this.hasEffect([effect.id,index])){
          this.runningEffects.push([effect.id,index])
        }
      }
    })
  }
}
