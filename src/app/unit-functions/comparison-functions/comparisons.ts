import getSinglePropValue from "../fetch-functions/getSinglePropValue";
import {BehaviorSubject, Observable} from "rxjs";
import utilFunctions from "../../utils/utilFunctions";
export default {
  // todo 1 string 1 < string 2 = alfabetisch: string 1 komt vóór string 2 indien true
  // todo 2 een andere interessante comparator zijn datum comparators natuurlijk, alsook de lengte van een woord
  isEqualTo: {
    fun: function isEqualTo(value:any,value2:any):boolean{
      return value===value2
    }
  },
  isGreaterThan: {
    fun: function isGreaterThan(value:any,value2:any):boolean{
      return value>value2
    }
  },
  isGreaterThanOrEqualTo: {
    fun: function isGreaterThanOrEqualTo(value:any,value2:any):boolean{
      return value>=value2
    }
  },
  isSmallerThan: {
    fun: function isSmallerThan(value:any,value2:any):boolean{
      return value<value2
    }
  },
  isSmallerThanOrEqualTo: {
    fun: function isSmallerThanOrEqualTo(value:any,value2:any):boolean{
      return value<=value2
    }
  },
  propIsEqualTo: {
    fun: function propIsEqualTo(target:string,propname:string,value2:any,statePropertySubjects:
      {componentName:string,propName:string,propValue:BehaviorSubject<any>,prop$:Observable<any>}[]):boolean{
      const val1 = getSinglePropValue.getSinglePropValue.fun(target,propname,[...statePropertySubjects])
      return val1===value2
    }
  },
  propIsGreaterThan: {
    fun: function propIsGreaterThan(target:string,propname:string,value2:any,statePropertySubjects:
      {componentName:string,propName:string,propValue:BehaviorSubject<any>,prop$:Observable<any>}[]):boolean{
      const propValue = getSinglePropValue.getSinglePropValue.fun(target,propname,[...statePropertySubjects])
      if(typeof propValue !== typeof value2) throw new Error('you can only compare values that have the same type')
      if(utilFunctions.isCss(propValue)&&utilFunctions.isCss(value2)&&utilFunctions.isSameCss(propValue,value2)){
        return utilFunctions.getNumberFromCss(propValue)>utilFunctions.getNumberFromCss(value2)
      }
      throw ('values could not be compared')
    }
  },
  propIsGreaterThanOrEqualTo: {
    fun: function propIsGreaterThanOrEqualTo(target:string,propname:string,value2:any,statePropertySubjects:
      {componentName:string,propName:string,propValue:BehaviorSubject<any>,prop$:Observable<any>}[]):boolean{
      const propValue = getSinglePropValue.getSinglePropValue.fun(target,propname,[...statePropertySubjects])
      if(typeof propValue !== typeof value2) throw new Error('you can only compare values that have the same type')
      if(utilFunctions.isCss(propValue)&&utilFunctions.isCss(value2)&&utilFunctions.isSameCss(propValue,value2)){
        return utilFunctions.getNumberFromCss(propValue)>=utilFunctions.getNumberFromCss(value2)
      }
      throw ('values could not be compared')
    }
  },
  propIsSmallerThan: {
    fun: function propIsSmallerThan(target:string,propname:string,value2:any,statePropertySubjects:
      {componentName:string,propName:string,propValue:BehaviorSubject<any>,prop$:Observable<any>}[]):boolean{
      const propValue = getSinglePropValue.getSinglePropValue.fun(target,propname,[...statePropertySubjects])
      if(typeof propValue !== typeof value2) throw new Error('you can only compare values that have the same type')
      if(utilFunctions.isCss(propValue)&&utilFunctions.isCss(value2)&&utilFunctions.isSameCss(propValue,value2)){
        return utilFunctions.getNumberFromCss(propValue)<utilFunctions.getNumberFromCss(value2)
      }
      throw ('values could not be compared')
    }
  },
  propIsSmallerThanOrEqualTo: {
    fun: function propIsSmallerThanOrEqualTo(target:string,propname:string,value2:any,statePropertySubjects:
      {componentName:string,propName:string,propValue:BehaviorSubject<any>,prop$:Observable<any>}[]):boolean{
      const propValue = getSinglePropValue.getSinglePropValue.fun(target,propname,[...statePropertySubjects])
      if(typeof propValue !== typeof value2) throw new Error('you can only compare values that have the same type')
      if(utilFunctions.isCss(propValue)&&utilFunctions.isCss(value2)&&utilFunctions.isSameCss(propValue,value2)){
        return utilFunctions.getNumberFromCss(propValue)<=utilFunctions.getNumberFromCss(value2)
      }
      throw ('values could not be compared')
    }
  },
}
