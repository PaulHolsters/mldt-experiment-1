import {BehaviorSubject, Observable} from "rxjs";

export interface StatePropertySubjectModel {
  componentName:string,
  propName:string,
  propValue:BehaviorSubject<any>,
  prop$:Observable<any>

}
