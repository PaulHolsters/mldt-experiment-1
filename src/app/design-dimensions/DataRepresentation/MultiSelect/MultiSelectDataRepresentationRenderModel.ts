import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class MultiSelectDataRepresentationRenderModel {
  public optionLabel:string|ZeroValueType.DeterminedByEngine|undefined=undefined
  public defaultLabel:string|ZeroValueType.DeterminedByEngine|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
