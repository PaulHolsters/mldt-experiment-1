import {Injectable} from '@angular/core';
import {EventType} from "./enums/eventTypes.enum";
import {StoreService} from "./store.service";
import AppConfig from "./configuration/appConfig";
import {NoValueType} from "./enums/no_value_type";
import {ActionsService} from "./actions.service";

@Injectable({
  providedIn: 'root'
})
export class EventsService{
  constructor(private storeService:StoreService,
              private actionsService:ActionsService) {
  }
  public triggerEvent(event:EventType,source:string,data?:any){
    if(data && data instanceof AppConfig){
      this.storeService.saveConfig(data)
    }
    this.storeService.appConfig?.getActionsForEvent(event).forEach(async action=>{
      if(action.sourceName===source || (action.sourceId === source && action.sourceName === NoValueType.NA)){
        await this.actionsService.triggerAction(action,data)
      }
    })
  }

}
