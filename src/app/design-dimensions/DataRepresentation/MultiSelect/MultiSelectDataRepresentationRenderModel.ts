import {DeterminedByEngine} from "../../../types/type-aliases";
import {DataLink} from "../../../types/union-types";
import {Blueprint} from "../../../services/data/client/Blueprint";

export class MultiSelectDataRepresentationRenderModel {
  public optionLabel:string|DeterminedByEngine=undefined
  public defaultLabel:string|DeterminedByEngine=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }
  setDBIValues(data: [DataLink,Blueprint]) {
    if (!this.optionLabel) {
      this.optionLabel = data[0]
    }
    if (!this.defaultLabel) {
      this.defaultLabel = data[1]
    }
  }

}
