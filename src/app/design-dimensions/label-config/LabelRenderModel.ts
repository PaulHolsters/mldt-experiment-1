import {MenuItem} from "primeng/api";
import {ComponentModel} from "../ComponentModel";
export class LabelRenderModel {
  public label: string|undefined
  constructor() {
  }
  public setProperty(propName: string, value: string|number|MenuItem[]|ComponentModel| undefined): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type AttributesComponentPropsModel')
  }

}
