import {Injectable} from '@angular/core';
import {ServiceType} from "../enums/serviceTypes.enum";
import {ServiceMethodType} from "../enums/serviceMethodTypes.enum";
import { Observable, Subject} from "rxjs";
import {ActionSubjectModel} from "../models/ActionSubject";
import {ConfigService} from "./config.service";
import {ActionType} from "../enums/actionTypes.enum";
import {Effect} from "../effectclasses/Effect";
import {Action} from "../effectclasses/Action";

@Injectable({
  providedIn: 'root'
})
export class ActionsService{
  private actionSubjects:ActionSubjectModel[]|undefined
  public bindToActionsEmitter = new Subject()
  public bindToAction(action:Action):Observable<{
       effect: Effect, data: any, target:EventTarget|undefined
}|undefined>|undefined{
    return this.actionSubjects?.find(actionSubject => {
      return actionSubject.service === action.service && actionSubject.method === action.serviceMethod
    })?.action$
  }
  public createActionSubjects(){
    this.actionSubjects = []

    this.configService.appConfig?.userConfig.effects.forEach(effect=>{
      const subj = new Subject<{effect: Effect; data: any; target:EventTarget|undefined}|undefined>()
      const newActionSubject:ActionSubjectModel = {
        service:effect.service,
        method:effect.serviceMethod,
        subj:subj,
        action$:subj.asObservable()
      }
      this.actionSubjects?.push(newActionSubject)
    })
    this.bindToActionsEmitter.next(undefined)
  }
  public triggerAction(effect: Effect,data?:any,target?:EventTarget):void{
    this.actionSubjects?.find(subj => {
      // todo wat als er twee acties zijn met hetzelfde type en subtype? => filter ook op id en event indien nodig, of zie dat je ze allemaal uitvoert!
      return subj.service === effect.action.service && subj.method === effect.action.serviceMethod
    })?.subj.next({effect:effect,data:data,target:target})
  }
  constructor(private configService:ConfigService) {
  }
}
