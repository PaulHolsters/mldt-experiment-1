import {IconType} from "../../../enums/iconType.enum";
import {IconPositionType} from "../../../enums/iconPositionType.enum";
import {InputFontSizeType} from "../../../enums/inputFontSizeType.enum";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class TextInputDataRepresentationConfigModel {
  public icon:IconType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public iconPosition:IconPositionType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public inputFontSize:InputFontSizeType=InputFontSizeType.Base
  public floatLabel:boolean=true
  public advisoryText:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  constructor() {
  }
  setIcon(icon:IconType|NoValueType.NO_VALUE_NEEDED) {
    this.icon = icon
    return this
  }
  setIconPosition(iconPosition:IconPositionType|NoValueType.NO_VALUE_NEEDED) {
    this.iconPosition = iconPosition
    return this
  }
  setInputFontSize(inputFontSize:InputFontSizeType) {
    this.inputFontSize = inputFontSize
    return this
  }
  setFloatLabel(floatLabel:boolean) {
    this.floatLabel = floatLabel
    return this
  }
  setAdvisoryText(advisoryText:string|NoValueType.NO_VALUE_NEEDED) {
    this.advisoryText = advisoryText
    return this
  }
}
