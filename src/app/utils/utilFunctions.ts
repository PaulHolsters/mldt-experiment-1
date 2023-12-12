import {DataDependedPropType, isPropsByDataType, PropsByDataType} from "../types/type-aliases";
import UtilFunctions from "./utilFunctions";

export default  {
  isCss: function (val:string):boolean{
    const valTrimmed = val.trim()
    const match = valTrimmed.match(/-?(?:\.\d+(?:rem|em|px|%)|0\.\d+(?:rem|em|px|%)|[1-9](?:\d*\.?\d*(?:rem|em|px|%)|))/g)
    if(match)
    return match[0].length === valTrimmed.length
    return false
  },
  isSameCss: function (val1:string,val2:string):boolean {
    if(!(this.isCss(val1)&&this.isCss(val2))) throw ('only css values are allowed as params')
    if(val1.trim().endsWith('px')) return val2.endsWith('px')
    if(val1.trim().endsWith('%')) return val2.endsWith('%')
    if(val1.trim().endsWith('rem')) return val2.endsWith('rem')
    if(val1.trim().endsWith('em')) return val2.endsWith('em')
    return false
  },
  getNumberFromCss: function (val:string):number {
    if(!this.isCss(val)) throw ('only css value is allowed as param')
    return parseFloat(val)
  },
  capitalizeFirst: function(text: string): string {
    return text.charAt(0).toUpperCase() + text.substring(1)
  },
  toUpperCase: function(text:string):string{
    return text.toUpperCase()
  },
  toLowerCase: function(text:string):string{
    return text.toLowerCase()
  },
  createSpaces: function(text:string):string{
    return text.replace(/_/g,' ')
  },
  areEqual: function(val1:any,val2:any):boolean{
    // todo wanneer het gaat om propsByData te vergelijken werkt het niet
    if(isPropsByDataType(val1)&&isPropsByDataType(val2)){
      function itemsEqual(i1:DataDependedPropType,i2:DataDependedPropType):boolean{
        if(!UtilFunctions.areEqual(i1[0],i2[0]))return false
        if(!UtilFunctions.areEqual(i1[1].dataChunk,i2[1].dataChunk))return false
        return UtilFunctions.areEqual(i1[2], i2[2])
      }
      const unEqualElV1 = val1.find(v1=>{
        return val2.find(el=>{
          return itemsEqual(el,v1)
        })===undefined
      })
      if(unEqualElV1) return false
      const unEqualElV2 = val2.find(v2=>{
        return val1.find(el=>{
          return itemsEqual(el,v2)
        })===undefined
      })
      return !unEqualElV2
    }
    if(val1 instanceof Array && val2 instanceof Array){
      if(val1.length!==val2.length) return false
      const val1Filtered:any[] = val1.filter(v1=>{
        return val2.find(v2=>{
          return this.areEqual(v1, v2);
        }) === undefined
      })
      const val2Filtered:any[] = val2.filter(v2=>{
        return val1.find(v1=>{
          return this.areEqual(v2, v1);
        }) === undefined
      })
      return val1Filtered.length === 0 && val2Filtered.length === 0
    }
    if(val1!==null && val2!==null && typeof val1 === 'object' && typeof val2 === 'object'){
      const keys1 = Object.keys(val1)
      const keys2 = Object.keys(val2)
      if(this.areEqual(keys1,keys2)){
        return keys1.find(k=>{
          return !this.areEqual(val1[k],val2[k])
        }) === undefined
      }
      return false
    }
    if(typeof val1==='function' && typeof val2==='function'){
      return val1.name === val2.name
    }
    return val1===val2
  },
  not: function(v:boolean):boolean{
    return !v
  }
}
