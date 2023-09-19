import {LocaleType} from "../../../enums/localeType.enum";
import {CurrencyType} from "../../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../../enums/currencyDisplayType.enum";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {CurrencyModel} from "./CurrencyModel";

export class NumberInputDataRepresentationConfigModel {
  public useGrouping: boolean = true
  public locale: LocaleType = LocaleType.en_US
  public currency:CurrencyModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public minFractionDigits: number = 0
  public maxFractionDigits: number = 20
  public floatLabel:boolean|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public suffix:string|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public prefix:string|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured

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
  setFloatLabel(floatLabel:boolean|ZeroValueType.NotConfigured) {
    this.floatLabel = floatLabel
    return this
  }
  setPrefix(prefix:string|ZeroValueType.NotConfigured) {
    this.prefix = prefix
    return this
  }
  setSuffix(suffix:string|ZeroValueType.NotConfigured) {
    this.suffix = suffix
    return this
  }

}
