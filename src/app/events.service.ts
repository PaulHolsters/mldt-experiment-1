import {Injectable} from '@angular/core';
import {EventType} from "./enums/eventTypes.enum";
import AppConfig from "./configuration/appConfig";
import {NoValueType} from "./enums/no_value_type";
import {ActionsService} from "./actions.service";
import {ConfigService} from "./config.service";
import {DataService} from "./data.service";
import {StylesService} from "./styles.service";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class EventsService{
  constructor(private configService:ConfigService,
              private actionsService:ActionsService) {
    debugger
  }
  public triggerEvent(event:EventType,source:string,data?:any){
    if(data && data instanceof AppConfig){
      this.configService.saveConfig(data)
      this.actionsService.createActionSubjects()
    }
    debugger
    this.configService.appConfig?.getActionsForEvent(event).forEach(action=>{
      if(action.sourceName===source || (action.sourceId === source && action.sourceName === NoValueType.NA)){
        this.actionsService.triggerAction(action,data)
      }
    })
  }

}
