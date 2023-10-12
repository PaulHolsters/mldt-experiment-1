import {ComponentModel} from "../../ComponentModel";
import {ExtraColumnModel} from "./ExtraColumnModel";

export class TableContentInjectionRenderModel {
  public columnHeaderComponents: ComponentModel[]|undefined
  public footer: ComponentModel|undefined
  public caption: ComponentModel|undefined
  public extraColumns:ExtraColumnModel[]|undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
