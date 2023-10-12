import {FunctionType} from "../../../enums/functionTypes.enum";
import {LabelType} from "../../../types/type-aliases";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class RadioButtonGroupDataRepresentationConfigModel {
  public pipe:FunctionType[]|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public values:LabelType[]|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
  constructor() {
  }
  setPipe(pipe:FunctionType[]|NoValueType.NO_VALUE_NEEDED) {
    this.pipe = pipe
    return this
  }
  setValues(values:LabelType[]|NoValueType.CALCULATED_BY_ENGINE) {
    this.values = values
    return this
  }

}
