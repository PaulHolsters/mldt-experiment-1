import { Injectable } from '@angular/core';
import {ActionType} from "./enums/actionTypes.enum";
import {ActionSubType} from "./enums/actionSubTypes.enum";
import {Observable} from "rxjs";
import {ActionModel} from "./models/ActionModel";
import {ActionSubjectModel} from "./models/ActionSubject";
import {EventType} from "./enums/eventTypes.enum";

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private actionSubjects:ActionSubjectModel[] = [
  ]
  public bindToAction(actionType:ActionType,actionSubtype:ActionSubType):Observable<{action:ActionModel,data:any}>|undefined{
    return this.actionSubjects.find(actionSubject => {
      return actionSubject.actionType === actionType && actionSubject.actionSubType === actionSubtype
    })?.action$
  }
  private createActionSubjects(){

  }
  public triggerAction(action: ActionModel,data?:string){
    this.actionSubjects.find(subj => {
      return subj.actionType === action.actionType && subj.actionSubType === action.actionSubType
    })?.subj.next({action:action,data:data})

    /*
    *      BIJVOORBEELD ActionSubType.SetResponsiveBehaviour:
                this.storeService.createStore() // storeservice moet hier op intekenen en dan doen: this.createStore
                this.createActionSubjects() // idem voor actionService
                this.setResponsiveBehaviour() // idem voor RBS service
    * */


/*    switch (action.on) {
      case EventType.RootComponentReady:
        switch (action.actionType) {
          case ActionType.Client:
            switch (action.actionSubType) {
              case ActionSubType.SetResponsiveBehaviour:
                this.storeService.createStore()
                this.createActionSubjects()
                this.setResponsiveBehaviour()
                break
              default:
            }
            break
          case ActionType.Server:
            switch (action.actionSubType) {
              case ActionSubType.GetDataBluePrint:
                // todo zoek actionSubj op en doe de next method
                await this.dataService.getDataBluePrint(action)
                break
              default:
            }
            break
        }
        break
      case EventType.ComponentReady:
        switch (action.actionType) {
          case ActionType.Client:
            break
          case ActionType.Server:
            switch (action.actionSubType) {
              case ActionSubType.GetDataBluePrint:
                await this.dataService.getDataBluePrint(action)
                break
              case ActionSubType.GetAllData:
                await this.dataService.getAllData(action)
                break
              case ActionSubType.GetDataByID:
                if(data){
                  await this.dataService.getDataByID(action,data)
                }
                break
              default:
            }
            break
        }
        break
      case EventType.ComponentClicked:
        switch (action.actionType) {
          case ActionType.Client:
            break
          case ActionType.Server:
            switch (action.actionSubType) {
              case ActionSubType.GetDataBluePrint:
                await this.dataService.getDataBluePrint(action)
                break
              case ActionSubType.PersistNewData:
                await this.dataService.persistNewData(action)
                break
              // todo voorzien dat je data en masse kan wijzigen aanmaken of verwijderen
              case ActionSubType.PersistUpdatedData:
                await this.dataService.persistUpdatedData(action)
                break
              case ActionSubType.DeleteByID:
                await this.dataService.deleteData(action)
                break
              default:
            }
            break
        }
        break
      case EventType.ActionFinished:
        switch (action.actionType){
          case ActionType.Client:
            switch (action.actionSubType){
              case ActionSubType.SetValue:
                await this.configService.setValue(action)
                // todo het rerenderen optimaliseren zodat enkel dat wordt gererendered dat aangepast werd.
                this.rerender()
                break
              default:
            }
            break
          default:
        }
        break
      default: return undefined
    }*/
    return undefined
  }
  constructor() {
    this.createActionSubjects()
  }



}
