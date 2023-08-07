import { Observable, Subject} from "rxjs";
import {ActionType} from "../enums/actionTypes.enum";
import {ActionSubType} from "../enums/actionSubTypes.enum";
import {ActionModel} from "./ActionModel";

export interface ActionSubjectModel {
  actionType:ActionType,
  actionSubType?:ActionSubType,
  subj:Subject<{action:ActionModel,data:any,target:EventTarget|undefined}|undefined>
  action$:Observable<{action:ActionModel,data:any,target:EventTarget|undefined}|undefined>
}
