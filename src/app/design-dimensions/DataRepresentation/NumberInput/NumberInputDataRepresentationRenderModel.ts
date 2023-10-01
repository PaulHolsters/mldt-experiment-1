import {LocaleType} from "../../../enums/localeType.enum";
import {CurrencyType} from "../../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../../enums/currencyDisplayType.enum";
import {NotConfigured} from "../../../types/type-aliases";

export class NumberInputDataRepresentationRenderModel {
  public useGrouping: boolean|undefined=undefined
  public locale: LocaleType|undefined=undefined
  public currency: CurrencyType | NotConfigured=undefined
  public currencyDisplay: CurrencyDisplayType | NotConfigured=undefined
  public minFractionDigits: number|undefined=undefined
  public maxFractionDigits: number |undefined=undefined
  public floatLabel:boolean|undefined=undefined
  public suffix:string|NotConfigured=undefined
  public prefix:string|NotConfigured=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
