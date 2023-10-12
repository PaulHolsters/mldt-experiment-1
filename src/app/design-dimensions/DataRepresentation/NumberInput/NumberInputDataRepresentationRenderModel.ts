import {LocaleType} from "../../../enums/localeType.enum";
import {CurrencyType} from "../../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../../enums/currencyDisplayType.enum";

export class NumberInputDataRepresentationRenderModel {
  public useGrouping: boolean|undefined
  public locale: LocaleType|undefined
  public currency: CurrencyType | undefined
  public currencyDisplay: CurrencyDisplayType | undefined
  public minFractionDigits: number|undefined
  public maxFractionDigits: number |undefined
  public floatLabel:boolean|undefined
  public suffix:string|undefined
  public prefix:string|undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
