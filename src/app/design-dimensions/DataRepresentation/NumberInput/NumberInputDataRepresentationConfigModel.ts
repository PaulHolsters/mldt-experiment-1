import {LocaleType} from "../../../enums/localeType.enum";
import {CurrencyModel} from "./CurrencyModel";
import {NotConfigured} from "../../../types/type-aliases";

export class NumberInputDataRepresentationConfigModel {
  public useGrouping: boolean = true
  public locale: LocaleType = LocaleType.en_US
  public currency:CurrencyModel|NotConfigured=undefined
  public minFractionDigits: number = 0
  public maxFractionDigits: number = 20
  public floatLabel:boolean=true
  public suffix:string|NotConfigured=undefined
  public prefix:string|NotConfigured=undefined

  constructor() {
  }
  setUseGrouping(useGrouping: boolean) {
    this.useGrouping = useGrouping
    return this
  }
  setLocale(locale: LocaleType) {
    this.locale = locale
    return this
  }
  setCurrency(currency: CurrencyModel) {
    this.currency = currency
    return this
  }
  setMinFractionDigits(MFD: number) {
    this.minFractionDigits = MFD
    return this
  }
  setMaxFractionDigits(MFD: number) {
    this.maxFractionDigits = MFD
    return this
  }
  setFloatLabel(floatLabel:boolean) {
    this.floatLabel = floatLabel
    return this
  }
  setPrefix(prefix:string|NotConfigured) {
    this.prefix = prefix
    return this
  }
  setSuffix(suffix:string|NotConfigured) {
    this.suffix = suffix
    return this
  }

}
