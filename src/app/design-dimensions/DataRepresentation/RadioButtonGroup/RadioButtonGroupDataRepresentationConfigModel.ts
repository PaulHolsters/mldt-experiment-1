import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {FunctionType} from "../../../enums/functionTypes.enum";

export class RadioButtonGroupDataRepresentationConfigModel {
  public pipe:FunctionType[]|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor() {
  }
  setPipe(pipe:FunctionType[]|ZeroValueType.NotConfigured) {
    this.pipe = pipe
    return this
  }
}
