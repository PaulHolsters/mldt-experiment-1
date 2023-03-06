import getSinglePropValue from "../fetch-functions/getSinglePropValue";
import {BehaviorSubject, Observable} from "rxjs";
export default {
  addWith: {
    fun: function addwith(term: number, target: string, propname: string, statePropertySubjects:
      { componentName: string, propName: string, propValue: BehaviorSubject<any>, prop$: Observable<any> }[]): number {
      const value = getSinglePropValue.getSinglePropValue.fun(target, propname, statePropertySubjects)
      return parseFloat(value) + term
    }
  },
  add:{
    fun: function add(term1:number,term2:number):number{
      return term1+term2
    }
  },
  isLegalOperation:{
    fun: function isLegalOperation(input:number):boolean{
      return !isNaN(input)
    }
  }
}
