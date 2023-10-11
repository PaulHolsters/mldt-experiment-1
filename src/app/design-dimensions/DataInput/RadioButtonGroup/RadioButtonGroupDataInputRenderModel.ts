import {DataLink, DeterminedByEngine, NotAllowed} from "../../../types/type-aliases";
import {Blueprint} from "../../../services/data/client/Blueprint";

export class RadioButtonGroupDataInputRenderModel {
  public radioValues:{label:string,value:string}[]|DeterminedByEngine=undefined
  public disabled: boolean |NotAllowed=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }
  setDBIValues(data: [DataLink,Blueprint]) {
    if (!this.radioValues) {
      // todo
    }
  }

}
