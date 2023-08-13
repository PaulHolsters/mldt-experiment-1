import {Injectable} from '@angular/core';
import {ActionType} from "../enums/actionTypes.enum";
import {ActionSubType} from "../enums/actionSubTypes.enum";
import { Observable, Subject} from "rxjs";
import {ActionModel} from "../models/ActionModel";
import {ActionSubjectModel} from "../models/ActionSubject";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class ActionsService{
  private actionSubjects:ActionSubjectModel[]|undefined
  public bindToActionsEmitter = new Subject()
  public bindToAction(actionType:ActionType,actionSubtype:ActionSubType):Observable<{
       action: ActionModel, data: any, target:EventTarget|undefined
}|undefined>|undefined{

    return this.actionSubjects?.find(actionSubject => {
      return actionSubject.actionType === actionType && actionSubject.actionSubType === actionSubtype
    })?.action$
  }
  public createActionSubjects(){
    this.actionSubjects = []
    this.configService.appConfig?.userConfig.actions.forEach(action=>{
      const subj = new Subject<{action: ActionModel; data: any; target:EventTarget|undefined}|undefined>()
      const newActionSubject:ActionSubjectModel = {
        actionType:action.actionType,
        actionSubType:action.actionSubType,
        subj:subj,
        action$:subj.asObservable()
      }
      this.actionSubjects?.push(newActionSubject)
    })
    this.bindToActionsEmitter.next(undefined)
  }
  public triggerAction(action: ActionModel,data?:any,target?:EventTarget):void{
    this.actionSubjects?.find(subj => {
      // todo wat als er twee acties zijn met hetzelfde type en subtype? => filter ook op id en event indien nodig, of zie dat je ze allemaal uitvoert!
      return subj.actionType === action.actionType && subj.actionSubType === action.actionSubType
    })?.subj.next({action:action,data:data,target:target})
  }
  constructor(private configService:ConfigService) {
  }
}
