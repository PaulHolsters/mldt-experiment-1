export class ChildComponentsPropsModel {
  constructor(
    public grow:number|undefined=undefined,
    public shrink:number|undefined=undefined,
    public height:string|undefined=undefined,
    public calcHeight:string|undefined=undefined,
    public width:string|undefined=undefined,
    public calcWidth:string|undefined=undefined,
    public scroll:boolean=false,
  ) {
  }
  public setProperty(arr:any[]): void {
    if (Reflect.has(this, arr[0]))
      Reflect.set(this, arr[0], arr[1])
    else throw new Error('cannot set property ' + arr[0] + ' because it does not exist on the object of type ChildComponentsPropsModel')
  }
}
