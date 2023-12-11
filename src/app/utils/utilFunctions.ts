import {isPropsByDataType} from "../types/type-aliases";

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
      const v1 = [...val1]
      const v2 = [...val2]
      v1.filter(vl1=>{
        const v2prop = v2.find(vl2=>{
          return vl2[0] === vl1[0]
        })
        if(!v2prop) return false
        if(vl1[1] instanceof Array){

        } else{
          return v2prop[1].dataChunk
        }

      })
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
    return val1===val2
  },
  not: function(v:boolean):boolean{
    return !v
  }
}
