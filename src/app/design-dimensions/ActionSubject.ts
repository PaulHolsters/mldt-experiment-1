import { Observable, Subject} from "rxjs";
import {ServiceType} from "../enums/serviceTypes.enum";
import {ServiceMethodType} from "../enums/serviceMethodTypes.enum";
import {Effect} from "../effectclasses/Effect";

export interface ActionSubjectModel {
  service:ServiceType,
  method:ServiceMethodType,
  subj:Subject<{effect:Effect,data:any,target:EventTarget|undefined}|undefined>
  action$:Observable<{effect:Effect,data:any,target:EventTarget|undefined}|undefined>
}
