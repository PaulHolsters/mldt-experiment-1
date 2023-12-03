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
import {ComponentNameType} from "../types/type-aliases";

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
              private UIActionsService:UiActionsService) {

    this.serverDataService.actionFinished.subscribe(res =>{
      this.triggerEvent(res.trigger,res.source)
    })
    this.clientDataService.clientDataUpdated.subscribe(res =>{
      this.triggerEvent(TriggerType.ClientDataUpdated, ServiceType.DataService,res)
    })
    this.clientDataService.actionFinished.subscribe(res =>{
      this.triggerEvent(res.trigger,res.source)
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
    this.UIActionsService.actionFinished.subscribe(res =>{
      this.triggerEvent(res.trigger,res.source)
    })
    this.RBSService.actionFinished.subscribe(res =>{
      this.triggerEvent(res.trigger,res.source)
    })
    this.storeService.actionFinished.subscribe(res =>{
      this.triggerEvent(res.trigger,res.source)
    })
  }
  public triggerEvent(trigger:TriggerType,source:string|[ComponentNameType,string]|ServiceType,data?:any,target?:EventTarget){
    // todo werk any weg op termijn hier
    if(data && data instanceof AppConfig){
      this.configService.saveConfig(data)
      this.actionsService.createActionSubjects()
    }
    this.configService.getEffectsForEvent(trigger,source).forEach(effect=>{
      if(typeof source === 'string'||source instanceof Array) this.actionsService.triggerAction(effect,data,target,source)
      else this.actionsService.triggerAction(effect,data,target)
    })
  }
}
