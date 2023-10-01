import {ComponentModel} from "../../ComponentModel";
import {NotConfigured} from "../../../types/type-aliases";

export class MenubarContentInjectionRenderModel {
  public start: ComponentModel|NotConfigured=undefined
  public end: ComponentModel|NotConfigured=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
