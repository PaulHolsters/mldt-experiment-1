import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {IconType} from "../../../enums/iconType.enum";
import {IconPositionType} from "../../../enums/iconPositionType.enum";
import {InputFontSizeType} from "../../../enums/inputFontSizeType.enum";
export class TextInputDataRepresentationConfigModel {
  public icon:IconType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public iconPosition:IconPositionType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public inputFontSize:InputFontSizeType=InputFontSizeType.Base
  constructor() {
  }
  setIcon(icon:IconType|ZeroValueType.NotConfigured) {
    this.icon = icon
    return this
  }
  setIconPosition(iconPosition:IconPositionType|ZeroValueType.NotConfigured) {
    this.iconPosition = iconPosition
    return this
  }
  setInputFontSize(inputFontSize:InputFontSizeType) {
    this.inputFontSize = inputFontSize
    return this
  }
}
