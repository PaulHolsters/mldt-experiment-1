import {DataLink} from "../../../types/type-aliases";
import {Blueprint} from "../../../services/data/client/Blueprint";
import {BlueprintValue} from "../../../types/union-types";

export class RadioButtonGroupDataInputRenderModel {
  public disabled: boolean |undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
