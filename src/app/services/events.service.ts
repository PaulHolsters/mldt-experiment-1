import {Injectable} from '@angular/core';
import {TriggerType} from "../enums/triggerTypes.enum";
import AppConfig from "./appConfig";
import {ActionsService} from "./actions.service";
import {ConfigService} from "./config.service";
import {DataService} from "./data.service";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {StoreService} from "./store.service";
import {UiActionsService} from "./ui-actions.service";

@Injectable({
  providedIn: 'root'
})
export class EventsService{
  constructor(private configService:ConfigService,
              private actionsService:ActionsService,
              private dataService:DataService,
              private RBSService:ResponsiveBehaviourService,
              private storeService:StoreService,
              private UIActionsService:UiActionsService) {

    this.dataService.actionFinished.subscribe(res =>{
      const eventData = res as {trigger:TriggerType,sourceId:string}
      this.triggerEvent(eventData.trigger,eventData.sourceId)
    })

    this.UIActionsService.actionFinished.subscribe(res =>{
      const eventData = res as {trigger:TriggerType,sourceId:string}
      this.triggerEvent(eventData.trigger,eventData.sourceId)
    })

    this.RBSService.actionFinished.subscribe(res =>{
      const eventData = res as {trigger:TriggerType,sourceId:string}
      this.triggerEvent(eventData.trigger,eventData.sourceId)
    })

    this.storeService.actionFinished.subscribe(res =>{
      const eventData = res as {trigger:TriggerType,sourceId:string}
      this.triggerEvent(eventData.trigger,eventData.sourceId)
    })
  }
  public triggerEvent(trigger:TriggerType,source:string,data?:any,target?:EventTarget){
    if(data && data instanceof AppConfig){
      this.configService.saveConfig(data)
      this.actionsService.createActionSubjects()
    }
    this.configService.appConfig?.getEffectsForEvent(trigger,source).forEach(effect=>{
      this.actionsService.triggerAction(effect,data,target)
    })
  }

}
