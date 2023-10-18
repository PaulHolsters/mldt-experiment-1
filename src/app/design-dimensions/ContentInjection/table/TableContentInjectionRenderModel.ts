import {ComponentModel} from "../../ComponentModel";
import {ExtraColumnModel} from "./ExtraColumnModel";

export class TableContentInjectionRenderModel {
  public columnHeaderComponents: ComponentModel[]|null=null
  public footer: ComponentModel|null=null
  public caption: ComponentModel|null=null
  public extraColumns:ExtraColumnModel[]|null=null
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
