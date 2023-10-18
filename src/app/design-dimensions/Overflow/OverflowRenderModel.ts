export class OverflowRenderModel {
  public overflowAuto:boolean|null=null
  public overflowScroll:boolean|null=null
  public overflowVisible:boolean|null=null
  public overflowHidden:boolean|null=null
  public overflowXAuto:boolean|null=null
  public overflowXVisible:boolean|null=null
  public overflowXHidden:boolean|null=null
  constructor(
  ) {
  }
  public setProperty(propName: string, value: any): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }
}
