import {NumberInputModeType} from "../../enums/numberInputModeType.enum";
import {LocaleType} from "../../enums/localeType.enum";
import {CurrencyType} from "../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../enums/currencyDisplayType.enum";
import {ButtonClassType} from "../../enums/buttonClassType.enum";
import {ButtonLayoutType} from "../../enums/buttonLayoutType.enum";
import {IconType} from "../../enums/iconType.enum";
import {NoValueType} from "../../enums/no_value_type";
export class NumberAttributeComponentModel {
constructor(
  public useGrouping:boolean,
  public showButtons:boolean,
  public step:number,
  public mode:NumberInputModeType,
  public locale:LocaleType,
  public currency:CurrencyType|NoValueType.NI,
  public currencyDisplay:CurrencyDisplayType|NoValueType.NI,
  public minFractionDigits:number,
  public maxFractionDigits:number,
  public min:number,
  public max:number,
  public decrementButtonClass:ButtonClassType|NoValueType.NI,
  public incrementButtonClass:ButtonClassType|NoValueType.NI,
  public incrementButtonIcon:IconType|NoValueType.NI,
  public decrementButtonIcon:IconType|NoValueType.NI,
  public suffix:string|NoValueType.NI,
  public prefix:string|NoValueType.NI,
  public buttonLayout:ButtonLayoutType|NoValueType.NI,
  ) {
}
}
