import {FunctionType} from "../../../enums/functionTypes.enum";
import {NotConfigured} from "../../../types/type-aliases";

export class RadioButtonGroupDataRepresentationConfigModel {
  public pipe:FunctionType[]|NotConfigured=undefined
  constructor() {
  }
  setPipe(pipe:FunctionType[]|NotConfigured) {
    this.pipe = pipe
    return this
  }
}
