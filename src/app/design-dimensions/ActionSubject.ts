import { Observable, Subject} from "rxjs";
import {ServiceType} from "../enums/serviceTypes.enum";
import {ServiceMethodType} from "../enums/serviceMethodTypes.enum";
import {Effect} from "../effectclasses/Effect";
import {ActionIdType, ComponentNameType} from "../types/type-aliases";
import {NoValueType} from "../enums/NoValueTypes.enum";

export interface ActionSubjectModel {
  service:ServiceType,
  method:ServiceMethodType,
  subj:Subject<{
    effect:Effect,
    data:any,
    target:EventTarget|undefined,
    source?: ComponentNameType|[ComponentNameType,string]|[ComponentNameType,number|undefined]}|undefined
  >
  action$:Observable<{effect:Effect,data:any,target:EventTarget|undefined,source?:ComponentNameType|[ComponentNameType,string]|[ComponentNameType,number|undefined]}|undefined>,
  executionId?:ActionIdType
}
