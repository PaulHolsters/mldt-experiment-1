import {BehaviorSubject, Observable} from "rxjs";
import {ActionType} from "../enums/actionTypes.enum";
import {ActionSubType} from "../enums/actionSubTypes.enum";
import {ActionModel} from "./ActionModel";

export interface ActionSubjectModel {
  actionType:ActionType,
  actionSubType?:ActionSubType,
  subj:BehaviorSubject<{action:ActionModel,data:any}>
  action$:Observable<{action:ActionModel,data:any}>
}
