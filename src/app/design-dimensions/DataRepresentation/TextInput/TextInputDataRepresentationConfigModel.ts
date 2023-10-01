import {IconType} from "../../../enums/iconType.enum";
import {IconPositionType} from "../../../enums/iconPositionType.enum";
import {InputFontSizeType} from "../../../enums/inputFontSizeType.enum";
import {NotConfigured} from "../../../types/type-aliases";
export class TextInputDataRepresentationConfigModel {
  public icon:IconType|NotConfigured=undefined
  public iconPosition:IconPositionType|NotConfigured=undefined
  public inputFontSize:InputFontSizeType=InputFontSizeType.Base
  public floatLabel:boolean=true
  public advisoryText:string|NotConfigured=undefined
  constructor() {
  }
  setIcon(icon:IconType|NotConfigured) {
    this.icon = icon
    return this
  }
  setIconPosition(iconPosition:IconPositionType|NotConfigured) {
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
  setAdvisoryText(advisoryText:string|NotConfigured) {
    this.advisoryText = advisoryText
    return this
  }
}
