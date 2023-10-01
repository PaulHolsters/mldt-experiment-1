import {DeterminedByEngine, NotConfigured} from "../../../types/type-aliases";

export class TableDataRepresentationRenderModel {
  public columnName:string|DeterminedByEngine=undefined
  public sort:DeterminedByEngine|NotConfigured|Function=undefined
  public filter:DeterminedByEngine|NotConfigured|Function=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
