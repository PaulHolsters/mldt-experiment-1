import {Injectable} from '@angular/core';
import {ActionType} from "./enums/actionTypes.enum";
import {ActionSubType} from "./enums/actionSubTypes.enum";
import { Observable, Subject} from "rxjs";
import {ActionModel} from "./models/ActionModel";
import {ActionSubjectModel} from "./models/ActionSubject";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class ActionsService{
  private actionSubjects:ActionSubjectModel[]|undefined
  public bindToActionsEmitter = new Subject()
  public bindToAction(actionType:ActionType,actionSubtype:ActionSubType):Observable<{action:ActionModel,data:any}|undefined>|undefined{
    return this.actionSubjects?.find(actionSubject => {
      return actionSubject.actionType === actionType && actionSubject.actionSubType === actionSubtype
    })?.action$
  }
  public createActionSubjects(){
    this.actionSubjects = []
    this.configService.appConfig?.userConfig.actions.forEach(action=>{
      // todo dit is de reden waarom er direct undefnied wordt uitgespuwd
      const subj = new Subject<{action: ActionModel; data: any}|undefined>()
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
  public triggerAction(action: ActionModel,data?:string):void{
    this.actionSubjects?.find(subj => {
      return subj.actionType === action.actionType && subj.actionSubType === action.actionSubType
    })?.subj.next({action:action,data:data})
  }
  constructor(private configService:ConfigService) {
  }
}
