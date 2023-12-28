import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ConfigService} from "./config.service";
import {Effect} from "../effectclasses/Effect";
import {Action} from "../effectclasses/Action";
import {ActionSubjectModel} from "../design-dimensions/ActionSubject";
import {Blueprint} from "./data/client/Blueprint";
import {ComponentNameType, EffectAsSource, FrontendDataType, ServerDataRequestType} from "../types/type-aliases";
import {ClientData} from "./data/client/ClientData";
import {DataRecord, List} from "../types/union-types";
import {ServerAction} from "../effectclasses/ServerAction";
import {ServiceType} from "../enums/serviceTypes.enum";
import {ServiceMethodType} from "../enums/serviceMethodTypes.enum";

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private actionSubjects: ActionSubjectModel[] | undefined
  public bindToActionsEmitter = new Subject()
//: FrontendDataType | Blueprint | [ComponentNameType, DataRecord | List] | ClientData | string | ServerDataRequestType,
  public bindToAction(action: Action): Observable<
    {
      effect:Effect,
      data:any,
      target:EventTarget|undefined,
      source?: ComponentNameType|[ComponentNameType,string]|[ComponentNameType,number|undefined]}|undefined
  > | undefined {
    return this.actionSubjects?.find(actionSubject => {
      return actionSubject.service === action.service && actionSubject.method === action.serviceMethod
    })?.action$
  }

  public createActionSubjects() {
    this.actionSubjects = []
    this.configService.effects.forEach(effect => {
      const subj = new Subject<{
        effect:Effect,
        data:any,
        target:EventTarget|undefined,
        source?: ComponentNameType|[ComponentNameType,string]|[ComponentNameType,number|undefined]}|undefined>()

      if (effect.action instanceof ServerAction) {
        const newActionSubject: ActionSubjectModel = {
          service: ServiceType.DataService,
          method: ServiceMethodType.ExecuteServerAction,
          subj: subj,
          action$: subj.asObservable()
        }
        this.actionSubjects?.push(newActionSubject)
      } else {
        const newActionSubject: ActionSubjectModel = {
          service: effect.action.service,
          method: effect.action.serviceMethod,
          subj: subj,
          action$: subj.asObservable()
        }
        this.actionSubjects?.push(newActionSubject)
      }
    })
    this.bindToActionsEmitter.next(undefined)
  }

  public triggerAction(effect: Effect, data?: any, target?: EventTarget,
                       source?: ComponentNameType|[ComponentNameType,string]|[ComponentNameType,number|undefined]|undefined): void {
    this.actionSubjects?.find(subj => {
      // todo wat als er twee acties zijn met hetzelfde type en subtype? => filter ook op id en event indien nodig, of zie dat je ze allemaal uitvoert!
      if (effect.action instanceof ServerAction) {
        return subj.service === ServiceType.DataService && subj.method === ServiceMethodType.ExecuteServerAction
      } else {
        return subj.service === effect.action.service && subj.method === effect.action.serviceMethod
      }
    })?.subj.next({effect: effect, data: data, target: target, source: source})
  }
//:string|[ComponentNameType,string|(number|undefined)]|ServiceType
  constructor(private configService: ConfigService) {
  }
}
