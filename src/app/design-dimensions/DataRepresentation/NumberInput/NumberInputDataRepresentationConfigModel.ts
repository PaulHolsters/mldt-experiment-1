import {LocaleType} from "../../../enums/localeType.enum";
import {CurrencyModel} from "./CurrencyModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class NumberInputDataRepresentationConfigModel {
  public useGrouping: boolean = true
  public locale: LocaleType = LocaleType.en_US
  public currency:CurrencyModel|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public minFractionDigits: number = 0
  public maxFractionDigits: number = 20
  public floatLabel:boolean=true
  public suffix:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public prefix:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED

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
  setPrefix(prefix:string|NoValueType.NO_VALUE_NEEDED) {
    this.prefix = prefix
    return this
  }
  setSuffix(suffix:string|NoValueType.NO_VALUE_NEEDED) {
    this.suffix = suffix
    return this
  }

}
