import compose from "../unit-functions/compose-functions/compose";
import {BehaviorSubject, Observable} from "rxjs";
export default {
  toggle: {
    fun: function toggle(target:string, propname:string, statePropertySubjects:
      {componentName:string,propName:string,propValue:BehaviorSubject<any>,prop$:Observable<any>}[]):boolean{
      return compose([
        {funcName:'getSinglePropValue',params:[target,propname,[...statePropertySubjects]]},
        {funcName:'getOppositeValue',params:[]}])
    }
  },
  myCalc1: {
    fun: function myCalc1(target:string, propname:string, statePropertySubjects:
      {componentName:string,propName:string,propValue:BehaviorSubject<any>,prop$:Observable<any>}[]):{target:string,prop:string}{
      if(compose([
        {funcName:'addWith', params:[456,target,propname,[...statePropertySubjects]]},
        {funcName:'isLegalOperation', params:[]}
      ])){
        return {target:'logo',prop:'xxl'}
      }
      return {target:'logo',prop:'xl'}
    }
  },
  myCalc2: {
    fun: function myCalc2(value1:string,target:string, propname:string,target2:string, propname2:string,value2:string, statePropertySubjects:
      {componentName:string,propName:string,propValue:BehaviorSubject<any>,prop$:Observable<any>}[]):string{
      if(compose([
        {funcName:'addWith', params:[parseFloat(value1),target,propname,[...statePropertySubjects]]},
        {funcName:'isLegalOperation', params:[]}
      ])){
        return compose(
          [
            {funcName:'addWith', params:[parseFloat(value1),target,propname,[...statePropertySubjects]]},
            {funcName:'add', params:[4821]},
          ]
        )+'px'
      }
      return '999px'
    }
  },
  myCalc3: {
    fun: function myCalc3(value:string, statePropertySubjects:
      {componentName:string,propName:string,propValue:BehaviorSubject<any>,prop$:Observable<any>}[]):string{
      if(compose([
        {funcName:'add', params:[parseFloat(value),147]},
        {funcName:'isLegalOperation', params:[]}
      ])){
        return compose(
          [
            {funcName:'add', params:[parseFloat(value),147]}
          ]
        )+'px'
      }
      return '111px'
    }
  },
}
