import {Injectable} from '@angular/core';
import {EventType} from "../enums/eventTypes.enum";
import AppConfig from "./appConfig";
import {NoValueType} from "../enums/no_value_type";
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
      const eventData = res as {event:EventType,sourceId:string}
      this.triggerEvent(eventData.event,eventData.sourceId)
    })

    this.UIActionsService.actionFinished.subscribe(res =>{
      const eventData = res as {event:EventType,sourceId:string}
      this.triggerEvent(eventData.event,eventData.sourceId)
    })

    this.RBSService.actionFinished.subscribe(res =>{
      const eventData = res as {event:EventType,sourceId:string}
      this.triggerEvent(eventData.event,eventData.sourceId)
    })

    this.storeService.actionFinished.subscribe(res =>{
      const eventData = res as {event:EventType,sourceId:string}
      this.triggerEvent(eventData.event,eventData.sourceId)
    })
  }
  public triggerEvent(event:EventType,source:string,data?:any,target?:EventTarget){
    if(data && data instanceof AppConfig){
      this.configService.saveConfig(data)
      this.actionsService.createActionSubjects()
    }
    this.configService.appConfig?.getActionsForEvent(event).forEach(action=>{
      if(action.sourceName===source || (action.sourceId === source && action.sourceName === NoValueType.NA)){
        this.actionsService.triggerAction(action,data,target)
      }
    })
  }

}
