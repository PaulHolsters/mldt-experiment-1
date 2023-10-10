import {FunctionType} from "../../../enums/functionTypes.enum";
import {DeterminedByEngine, LabelType, NotConfigured} from "../../../types/type-aliases";

export class RadioButtonGroupDataRepresentationConfigModel {
  public pipe:FunctionType[]|NotConfigured=undefined
  public values:LabelType[]|DeterminedByEngine
  constructor() {
  }
  setPipe(pipe:FunctionType[]|NotConfigured) {
    this.pipe = pipe
    return this
  }
  setValues(values:LabelType[]|DeterminedByEngine) {
    this.values = values
    return this
  }

}
