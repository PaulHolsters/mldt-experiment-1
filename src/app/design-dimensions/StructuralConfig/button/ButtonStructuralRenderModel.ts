import {IconConfigModel} from "./IconConfigModel";
import {NotConfigured} from "../../../types/type-aliases";
export class ButtonStructuralRenderModel {
  public label:string|NotConfigured=undefined
  public icon:IconConfigModel|NotConfigured=undefined
  constructor() {
  }
  public setProperty(propName: string, value: any|undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }

}
