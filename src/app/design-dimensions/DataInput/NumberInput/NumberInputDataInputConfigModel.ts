import {NumberInputModeType} from "../../../enums/numberInputModeType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {ButtonLayoutType} from "../../../enums/buttonLayoutType.enum";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ButtonMeaningType} from "../../../enums/buttonMeaningType.enum";

export class NumberInputDataInputConfigModel {
  public advisoryText:string|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public showButtons:boolean=true
  public step:number=0
  public mode:NumberInputModeType=NumberInputModeType.Decimal
  public min:number=Number.MIN_SAFE_INTEGER
  public max:number=Number.MAX_SAFE_INTEGER
  public decrementButtonClass:ButtonMeaningType=ButtonMeaningType.Info
  public incrementButtonClass:ButtonMeaningType=ButtonMeaningType.Info
  public incrementButtonIcon:IconType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public decrementButtonIcon:IconType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public buttonLayout:ButtonLayoutType=ButtonLayoutType.Stacked
  public disabled: boolean | ZeroValueType.NotAllowed = false
  setDisabled(disabled: boolean | ZeroValueType.NotAllowed):NumberInputDataInputConfigModel {
    this.disabled = disabled
    return this
  }
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
  setDecrementButtonClass(decrementButtonClass:ButtonMeaningType) {
    this.decrementButtonClass = decrementButtonClass
    return this
  }
  setIncrementButtonClass(incrementButtonClass:ButtonMeaningType) {
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
  setButtonLayout(buttonLayout:ButtonLayoutType) {
    this.buttonLayout = buttonLayout
    return this
  }
}
