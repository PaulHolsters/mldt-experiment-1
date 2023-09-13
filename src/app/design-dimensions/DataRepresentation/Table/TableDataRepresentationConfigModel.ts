import {LocaleType} from "../../../enums/localeType.enum";
import {CurrencyType} from "../../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../../enums/currencyDisplayType.enum";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {NoValueType} from "../../../enums/no_value_type";
export class TableDataRepresentationConfigModel {
  public sort:boolean = false
  public label:string|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public customSort:Function|NoValueType.NA= NoValueType.NA
  public filter:boolean = false
  public customFilter:Function|NoValueType.NA= NoValueType.NA
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
  setCurrency(currency: CurrencyType) {
    this.currency = currency
    return this
  }
  setCurrencyDisplay(currencyDisplay: CurrencyDisplayType) {
    this.currencyDisplay = currencyDisplay
    return this
  }
  setMinFractionDigits(MFD: number) {
    this.minFractionDigits = MFD
    return this
  }
  setManFractionDigits(MFD: number) {
    this.maxFractionDigits = MFD
    return this
  }
}
