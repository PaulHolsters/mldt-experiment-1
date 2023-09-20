import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {LocaleType} from "../../../enums/localeType.enum";
import {CurrencyType} from "../../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../../enums/currencyDisplayType.enum";

export class NumberInputDataRepresentationRenderModel {
  public useGrouping: boolean|undefined=undefined
  public locale: LocaleType|undefined=undefined
  public currency: CurrencyType | ZeroValueType.NotConfigured|undefined=undefined
  public currencyDisplay: CurrencyDisplayType | ZeroValueType.NotConfigured|undefined=undefined
  public minFractionDigits: number|undefined=undefined
  public maxFractionDigits: number |undefined=undefined
  public floatLabel:boolean|undefined=undefined
  public suffix:string|ZeroValueType.NotConfigured|undefined=undefined
  public prefix:string|ZeroValueType.NotConfigured|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableRenderModel')
  }

}
