import {NumberInputModeType} from "../../enums/numberInputModeType.enum";
import {LocaleType} from "../../enums/localeType.enum";
import {CurrencyType} from "../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../enums/currencyDisplayType.enum";
import {ButtonClassType} from "../../enums/buttonClassType.enum";
import {ButtonLayoutType} from "../../enums/buttonLayoutType.enum";
import {IconType} from "../../enums/iconType.enum";
import {NoValueType} from "../../enums/no_value_type";

export class NumberAttributeConfigModel {
constructor(
  public useGrouping:boolean=false,
  public showButtons:boolean=false,
  public step:number=0,
  public mode:NumberInputModeType=NumberInputModeType.Decimal,
  public locale:LocaleType=LocaleType.en_US,
  public currency:CurrencyType|NoValueType.NI=NoValueType.NI,
  public currencyDisplay:CurrencyDisplayType|NoValueType.NI=NoValueType.NI,
  public minFractionDigits:number=0,
  public maxFractionDigits:number=20,
  public min:number=Number.MIN_SAFE_INTEGER,
  public max:number=Number.MAX_SAFE_INTEGER,
  public decrementButtonClass:ButtonClassType|NoValueType.NI=NoValueType.NI,
  public incrementButtonClass:ButtonClassType|NoValueType.NI=NoValueType.NI,
  public incrementButtonIcon:IconType|NoValueType.NI=NoValueType.NI,
  public decrementButtonIcon:IconType|NoValueType.NI=NoValueType.NI,
  public suffix:string|NoValueType.NI=NoValueType.NI,
  public prefix:string|NoValueType.NI=NoValueType.NI,
  public buttonLayout:ButtonLayoutType|NoValueType.NI=NoValueType.NI
  ) {
}
}
