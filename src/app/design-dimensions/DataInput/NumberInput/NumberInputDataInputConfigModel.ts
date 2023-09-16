import {NumberInputModeType} from "../../../enums/numberInputModeType.enum";
import {ButtonClassType} from "../../../enums/buttonClassType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {ButtonLayoutType} from "../../../enums/buttonLayoutType.enum";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class NumberInputDataInputConfigModel {
  public advisoryText:string|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public showButtons:boolean=true
  public step:number=0
  public mode:NumberInputModeType=NumberInputModeType.Decimal
  public min:number=Number.MIN_SAFE_INTEGER
  public max:number=Number.MAX_SAFE_INTEGER
  public decrementButtonClass:ButtonClassType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public incrementButtonClass:ButtonClassType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public incrementButtonIcon:IconType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public decrementButtonIcon:IconType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public buttonLayout:ButtonLayoutType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor() {
  }
  setAdvisoryText(advisoryText:string|ZeroValueType.NotConfigured) {
    this.advisoryText = advisoryText
    return this
  }
  setShowButtons(showButtons:boolean) {
    this.showButtons = showButtons
    return this
  }
  setStep(step:number) {
    this.step = step
    return this
  }
  setMode(mode:NumberInputModeType) {
    this.mode = mode
    return this
  }
  setMin(min:number) {
    this.min = min
    return this
  }
  setMax(max:number) {
    this.max = max
    return this
  }
  setDecrementButtonClass(decrementButtonClass:ButtonClassType|ZeroValueType.NotConfigured) {
    this.decrementButtonClass = decrementButtonClass
    return this
  }
  setIncrementButtonClass(incrementButtonClass:ButtonClassType|ZeroValueType.NotConfigured) {
    this.incrementButtonClass = incrementButtonClass
    return this
  }
  setIncrementButtonIcon(incrementButtonIcon:IconType|ZeroValueType.NotConfigured) {
    this.incrementButtonIcon = incrementButtonIcon
    return this
  }
  setDecrementButtonIcon(decrementButtonIcon:IconType|ZeroValueType.NotConfigured) {
    this.decrementButtonIcon = decrementButtonIcon
    return this
  }
  setButtonLayout(buttonLayout:ButtonLayoutType|ZeroValueType.NotConfigured) {
    this.buttonLayout = buttonLayout
    return this
  }
}
