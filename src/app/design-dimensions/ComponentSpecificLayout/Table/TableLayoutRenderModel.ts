import {ResponsiveTableLayoutType} from "../../../enums/responsiveTableLayoutType.enum";

export class TableLayoutRenderModel {
  public responsiveTableLayout: ResponsiveTableLayoutType|null=null
  public tableBreakpoint: number|null=null
  constructor() {
  }
  public setProperty(propName: string, value: ResponsiveTableLayoutType|number): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
