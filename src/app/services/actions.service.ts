import {Injectable} from '@angular/core';
import { Observable, Subject} from "rxjs";
import {ConfigService} from "./config.service";
import {Effect} from "../effectclasses/Effect";
import {Action} from "../effectclasses/Action";
import {ActionSubjectModel} from "../design-dimensions/ActionSubject";
import {DataRecordModel} from "../design-dimensions/DataRecordModel";
import {Blueprint} from "./data/client/Blueprint";
import {ComponentNameType} from "../types/type-aliases";

@Injectable({
  providedIn: 'root'
})
export class ActionsService{
  private actionSubjects:ActionSubjectModel[]|undefined
  public bindToActionsEmitter = new Subject()
  public bindToAction(action:Action):Observable<{
    // todo hier gaat op termijn een branded type moeten komen dat gaat checken of wat er binnenkomt
    //      qua type wel ok is on runtime
       effect: Effect, data: Blueprint|[ComponentNameType,DataRecordModel|(DataRecordModel|null)[]], target:EventTarget|undefined
}|undefined>|undefined{
    return this.actionSubjects?.find(actionSubject => {
      return actionSubject.service === action.service && actionSubject.method === action.serviceMethod
    })?.action$
  }
  public createActionSubjects(){
    this.actionSubjects = []
    this.configService.effects.forEach(effect=>{
      const subj = new Subject<{effect: Effect; data: any; target:EventTarget|undefined}|undefined>()
      const newActionSubject:ActionSubjectModel = {
        service:effect.action.service,
        method:effect.action.serviceMethod,
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
