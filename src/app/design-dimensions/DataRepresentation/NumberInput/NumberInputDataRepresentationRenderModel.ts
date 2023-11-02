import {LocaleType} from "../../../enums/localeType.enum";
import {CurrencyType} from "../../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../../enums/currencyDisplayType.enum";
import {isNoValueType} from "../../../types/union-types";

export class NumberInputDataRepresentationRenderModel {
  public useGrouping: boolean|null=null
  public locale: LocaleType|null=null
  public currency: CurrencyType | null=null
  public currencyDisplay: CurrencyDisplayType | null=null
  public minFractionDigits: number|null=null
  public maxFractionDigits: number |null=null
  public floatLabel:boolean|null=null
  public suffix:string|null=null
  public prefix:string|null=null
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)){
      // todo aanpakken voor currency model
      if(!isNoValueType(value)){
        Reflect.set(this, propName, value)
      }
    }
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
