import {NumberInputModeType} from "../../../enums/numberInputModeType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {ButtonLayoutType} from "../../../enums/buttonLayoutType.enum";
import {ButtonMeaningType} from "../../../enums/buttonMeaningType.enum";
import {NotAllowed, NotConfigured} from "../../../types/type-aliases";

export class NumberInputDataInputConfigModel {
  public advisoryText:string|NotConfigured=undefined
  public showButtons:boolean=true
  public step:number=0
  public mode:NumberInputModeType=NumberInputModeType.Decimal
  public min:number=Number.MIN_SAFE_INTEGER
  public max:number=Number.MAX_SAFE_INTEGER
  public decrementButtonClass:ButtonMeaningType=ButtonMeaningType.Info
  public incrementButtonClass:ButtonMeaningType=ButtonMeaningType.Info
  public incrementButtonIcon:IconType|NotConfigured=undefined
  public decrementButtonIcon:IconType|NotConfigured=undefined
  public buttonLayout:ButtonLayoutType=ButtonLayoutType.Stacked
  public disabled: boolean | NotAllowed = false
  setDisabled(disabled: boolean | NotAllowed):NumberInputDataInputConfigModel {
    this.disabled = disabled
    return this
  }
  constructor() {
  }
  setAdvisoryText(advisoryText:string|NotConfigured) {
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
  setIncrementButtonIcon(incrementButtonIcon:IconType|NotConfigured) {
    this.incrementButtonIcon = incrementButtonIcon
    return this
  }
  setDecrementButtonIcon(decrementButtonIcon:IconType|NotConfigured) {
    this.decrementButtonIcon = decrementButtonIcon
    return this
  }
  setButtonLayout(buttonLayout:ButtonLayoutType) {
    this.buttonLayout = buttonLayout
    return this
  }
}
