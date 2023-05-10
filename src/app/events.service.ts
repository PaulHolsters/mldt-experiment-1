import {Injectable} from '@angular/core';
import {StoreService} from "./store.service";
import {EventType} from "./enums/eventTypes.enum";
import {ActionModel} from "./models/ActionModel";
import {ActionType} from "./enums/actionTypes.enum";
import {ActionSubType} from "./enums/actionSubTypes.enum";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private storeService:StoreService,private dataService:DataService) { }
  public triggerEvent(event:EventType,source:string){
    this.storeService.getActionsForEvent(event).forEach(action=>{
      if(action.sourceName===source){
        this.executeAction(action)
      }
    })
  }
  private executeAction(action:ActionModel){
    switch (action.on){
      case EventType.ComponentReady:
        switch (action.actionType){
          case ActionType.Component:
            break
          case ActionType.Server:
            switch (action.actionSubType){
              case ActionSubType.GetDataBluePrint:
                this.dataService.getDataBluePrint(action)
                break
              default:
            }
            break
        }
        break
      case EventType.Click:
        break
      default:
    }
  }
}
