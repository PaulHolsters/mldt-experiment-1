import { Injectable } from '@angular/core';
import {StoreService} from "./store.service";
import {EventType} from "./enums/eventTypes.enum";
import {ActionModel} from "./models/ActionModel";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private storeService:StoreService) { }

  public triggerEvent(event:EventType,source:string){
    this.storeService.getActionsForEvent(event).forEach(action=>{
      if(action.sourceName===source){
        this.executeAction(action)
      }
    })
  }

  private executeAction(action:ActionModel){

  }




}
