export class ParentComponentPropsModel {
  constructor(
    public row: boolean=true,
    public column: boolean=false,
    public wrap: boolean=true,
    public justifyContentStart: boolean=true,
    public justifyContentCenter: boolean=false,
    public justifyContentEnd: boolean=false,
    public justifyContentBetween: boolean=false,
    public justifyContentEvenly: boolean=false,
    public justifyContentAround: boolean=false,
    public alignItemsStart: boolean=true,
    public alignItemsCenter: boolean=false,
    public alignItemsEnd: boolean=false,
    public alignItemsBaseline: boolean=false,
    public alignItemsStretch: boolean=false,
    public alignContentStart: boolean=true,
    public alignContentCenter: boolean=false,
    public alignContentEnd: boolean=false,
    public alignContentBetween: boolean=false,
    public alignContentEvenly: boolean=false,
    public alignContentAround: boolean=false,
  ) {
  }
  public setProperties(arr:any[]): void {
    arr.forEach(prop=>{
      if (Reflect.has(this, prop[0]))
        Reflect.set(this, prop[0], prop[1])
      else throw new Error('cannot set property ' + prop[0] + ' because it does not exist on the object of type ParentComponentPropsModel')
    })
  }
}
