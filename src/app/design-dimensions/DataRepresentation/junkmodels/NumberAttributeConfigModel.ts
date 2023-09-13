import {NumberInputModeType} from "../../../enums/numberInputModeType.enum";
import {LocaleType} from "../../../enums/localeType.enum";
import {CurrencyType} from "../../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../../enums/currencyDisplayType.enum";
import {ButtonClassType} from "../../../enums/buttonClassType.enum";
import {ButtonLayoutType} from "../../../enums/buttonLayoutType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {NoValueType} from "../../../enums/no_value_type";

export class NumberAttributeConfigModel {
constructor(
  public useGrouping:boolean=false, // data output representation eigen model
  public showButtons:boolean=false,  // data-input  eigen model
  public step:number=0,  // data input representation   eigen model
  public mode:NumberInputModeType=NumberInputModeType.Decimal, // data input representation   eigen model
  public locale:LocaleType=LocaleType.en_US, // data output representation  eigen model
  public currency:CurrencyType|NoValueType.NI=NoValueType.NI, // data output representation   eigen model
  public currencyDisplay:CurrencyDisplayType|NoValueType.NI=NoValueType.NI, // data output representation   eigen model
  public minFractionDigits:number=0, // data output representation   eigen model
  public maxFractionDigits:number=20, // data output representation   eigen model
  public min:number=Number.MIN_SAFE_INTEGER, // data input representation   eigen model
  public max:number=Number.MAX_SAFE_INTEGER, // data input representation   eigen model
  public decrementButtonClass:ButtonClassType|NoValueType.NI=NoValueType.NI, //data-input eigen model
  public incrementButtonClass:ButtonClassType|NoValueType.NI=NoValueType.NI, //data-input eigen model
  public incrementButtonIcon:IconType|NoValueType.NI=NoValueType.NI, //data-input eigen model
  public decrementButtonIcon:IconType|NoValueType.NI=NoValueType.NI, //data-input eigen model
  public suffix:string|NoValueType.NI=NoValueType.NI,// todo waarvoor dient dit?
  public prefix:string|NoValueType.NI=NoValueType.NI,// todo waarvoor dient dit?
  public buttonLayout:ButtonLayoutType|NoValueType.NI=NoValueType.NI,// data-input eigen model
  public value:number|NoValueType.NA|NoValueType.NVY // data value
  ) {
}
}
