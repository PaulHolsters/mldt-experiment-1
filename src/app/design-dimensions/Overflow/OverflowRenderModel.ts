export class OverflowRenderModel {
  public overflowAuto:boolean|undefined
  public overflowScroll:boolean|undefined
  public overflowVisible:boolean|undefined
  public overflowHidden:boolean|undefined
  public overflowXAuto:boolean|undefined
  public overflowXVisible:boolean|undefined
  public overflowXHidden:boolean|undefined
  constructor(
  ) {
  }
  public setProperty(propName: string, value: any): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }
}
