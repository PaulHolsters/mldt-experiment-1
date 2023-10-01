import {DeterminedByEngine} from "../../../types/type-aliases";

export class MultiSelectDataRepresentationRenderModel {
  public optionLabel:string|DeterminedByEngine=undefined
  public defaultLabel:string|DeterminedByEngine=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
