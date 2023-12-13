import {BehaviorSubject, Observable, Subject} from "rxjs";

export interface StatePropertySubjectModel {
  componentName:string,
  propName:string,
  index:number|undefined,
  propValue:BehaviorSubject<any>|Subject<any>,
  prop$:Observable<any>

}
