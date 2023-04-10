export class ChildComponentsPropsModel {
  constructor(
    public grow:number|undefined=undefined,
    public shrink:number|undefined=undefined,
    public height:string|undefined=undefined,
    public calcHeight:string|undefined=undefined,
    public width:string|undefined=undefined,
    public calcWidth:string|undefined=undefined,
    public horizontalScrolling:boolean=false,
    public verticalScrolling:boolean=false,
    public scroll:boolean=false,
    public isRow:boolean|undefined=undefined,
    public isColumn:boolean|undefined=undefined,
  ) {
  }
  public setProperties(arr:any[]): void {
    arr.forEach(prop=>{
      if (Reflect.has(this, prop[0]))
        Reflect.set(this, prop[0], prop[1])
      else throw new Error('cannot set property ' + prop[0] + ' because it does not exist on the object of type ChildComponentsPropsModel')
    })
  }
}
