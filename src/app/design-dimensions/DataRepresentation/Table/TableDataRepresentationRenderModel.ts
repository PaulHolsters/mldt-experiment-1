import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";

export class TableDataRepresentationRenderModel {
  public label:string|ZeroValueType.DeterminedByEngine|undefined=undefined
  public sort:ZeroValueType.DeterminedByEngine|ZeroValueType.NotConfigured|Function|undefined=undefined
  public filter:ZeroValueType.DeterminedByEngine|ZeroValueType.NotConfigured|Function|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableRenderModel')
  }

}
