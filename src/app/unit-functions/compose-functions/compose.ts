import getSinglePropValue from "../fetch-functions/getSinglePropValue";
import getOppositeValue from "../boolean-functions/booleanOperations";
import mathOperations from "../math-functions/mathOperations";
export default function compose(functions:{funcName:string,params:any[]}[]):any{
  const functionsObj = Object.assign({},getSinglePropValue)
  const functionsObj2 = Object.assign(functionsObj,getOppositeValue)
  const functionsObj3 = Object.assign(functionsObj2,mathOperations)
  let outputVal: any
  functions.forEach(({funcName, params})=>{
    for (let [prop,val] of Object.entries(functionsObj3)){
      if(prop === funcName){
        if(outputVal !== undefined){
          outputVal = Reflect.apply(val.fun,null,[outputVal,params])
        }else{
          outputVal = Reflect.apply(val.fun,null,params)
        }
        break
      }
    }
  })
  return outputVal
}
