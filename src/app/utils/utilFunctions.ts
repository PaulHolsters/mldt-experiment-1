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
  }
}
