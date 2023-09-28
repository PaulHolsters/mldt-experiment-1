import {ResponsiveTableLayoutType} from "../../enums/responsiveTableLayoutType.enum";

export class OverflowRenderModel {
  public overflowAuto:boolean|undefined=undefined
  public overflowScroll:boolean|undefined=undefined
  public overflowVisible:boolean|undefined=undefined
  public overflowHidden:boolean|undefined=undefined
  public overflowXAuto:boolean|undefined=undefined
  public overflowXVisible:boolean|undefined=undefined
  public overflowXHidden:boolean|undefined=undefined
  constructor(
  ) {
  }
  public setProperty(propName: string, value: any): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }
}
