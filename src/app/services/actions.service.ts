import {Injectable} from '@angular/core';
import { Observable, Subject} from "rxjs";
import {ConfigService} from "./config.service";
import {Effect} from "../effectclasses/Effect";
import {Action} from "../effectclasses/Action";
import {ActionSubjectModel} from "../design-dimensions/ActionSubject";
import {Blueprint} from "./data/client/Blueprint";
import {ComponentNameType, FrontendDataType, ServerDataRequestType} from "../types/type-aliases";
import {ClientData} from "./data/client/ClientData";
import {DataRecord, List} from "../types/union-types";

@Injectable({
  providedIn: 'root'
})
export class ActionsService{
  private actionSubjects:ActionSubjectModel[]|undefined
  public bindToActionsEmitter = new Subject()
  public bindToAction(action:Action):Observable<{
    // todo data is een kakofonie: eventueel binden vanuit de service naar acties met hetzelfde datatype voor data?
       effect: Effect,
    data: FrontendDataType|Blueprint|[ComponentNameType,DataRecord|List]|ClientData|string|ServerDataRequestType,
    target:EventTarget|undefined,
    source?:ComponentNameType
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
  public triggerAction(effect: Effect,data?:any,target?:EventTarget,source?:ComponentNameType):void{
    this.actionSubjects?.find(subj => {
      // todo wat als er twee acties zijn met hetzelfde type en subtype? => filter ook op id en event indien nodig, of zie dat je ze allemaal uitvoert!
      return subj.service === effect.action.service && subj.method === effect.action.serviceMethod
    })?.subj.next({effect:effect,data:data,target:target,source:source})
  }
  constructor(private configService:ConfigService) {
  }
}
