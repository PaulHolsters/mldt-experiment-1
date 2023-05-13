import {ConceptConfigModel} from "./ConceptConfigModel";
import {NumberInputModeType} from "../../enums/numberInputModeType.enum";
import {LocaleType} from "../../enums/localeType.enum";
import {CurrencyType} from "../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../enums/currencyDisplayType.enum";
import {SpinnerModeType} from "../../enums/spinnerModeType.enum";
import {ButtonClassType} from "../../enums/buttonClassType.enum";
import {ButtonLayoutType} from "../../enums/buttonLayoutType.enum";
export class NumberAttributeConfigModel {
constructor(
  public name:string,
  public disabled:boolean,
  public floatLabel:boolean,
  public useGrouping:boolean,
  public showButtons:boolean,
  public step:number,
  public mode:NumberInputModeType,
  public locale:LocaleType,
  public currency?:CurrencyType|undefined,
  public currencyDisplay?:CurrencyDisplayType|undefined,
  public minFractionDigits?:number|undefined,
  public maxFractionDigits?:number|undefined,
  public min?:number|undefined,
  public max?:number|undefined,
  public spinnerMode?:SpinnerModeType|undefined,
  public decrementButtonClass?:ButtonClassType|undefined,
  public incrementButtonClass?:ButtonClassType|undefined,
  public incrementButtonIcon?:ButtonClassType|undefined,
  public decrementButtonIcon?:ButtonClassType|undefined,
  public suffix?:string|undefined,
  public prefix?:string|undefined,
  public buttonLayout?:ButtonLayoutType|undefined,
  public advisoryText?:string|undefined,
  public errorMessage?:string[]|undefined,
  public label?:string|undefined,
  public attributes?:ConceptConfigModel[]
  ) {
}
}
