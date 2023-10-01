import {ComponentModel} from "../../ComponentModel";
import {ExtraColumnModel} from "./ExtraColumnModel";
import {NotConfigured} from "../../../types/type-aliases";

export class TableContentInjectionRenderModel {
  public columnHeaderComponents: ComponentModel[]|NotConfigured|undefined=undefined
  public footer: ComponentModel|NotConfigured|undefined=undefined
  public caption: ComponentModel|NotConfigured|undefined=undefined
  public extraColumns:ExtraColumnModel[]|NotConfigured|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
