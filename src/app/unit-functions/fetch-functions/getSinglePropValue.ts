import {BehaviorSubject, Observable} from "rxjs";
export default {
  getSinglePropValue: {
    fun: function getSinglePropValue(target:string, propname:string, statePropertySubjects:
      {componentName:string,propName:string,propValue:BehaviorSubject<any>,prop$:Observable<any>}[]):any{
      let fetched
      const sub = statePropertySubjects.find(prop=>{
        return prop.componentName === target && prop.propName === propname
      })?.prop$.subscribe(val=>{
        fetched = val
      })
      while(fetched === undefined){
      }
      sub?.unsubscribe()
      return fetched
    }
  }}
