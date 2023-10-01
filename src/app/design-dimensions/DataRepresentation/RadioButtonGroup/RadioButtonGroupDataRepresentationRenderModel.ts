import {FunctionType} from "../../../enums/functionTypes.enum";
import {NotConfigured} from "../../../types/type-aliases";
export class RadioButtonGroupDataRepresentationRenderModel {
  public pipe:FunctionType[]|NotConfigured=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
