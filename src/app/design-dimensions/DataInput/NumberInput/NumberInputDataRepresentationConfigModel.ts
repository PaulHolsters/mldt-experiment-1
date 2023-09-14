import {NumberInputModeType} from "../../../enums/numberInputModeType.enum";
import {NoValueType} from "../../../enums/no_value_type";
import {ButtonClassType} from "../../../enums/buttonClassType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {ButtonLayoutType} from "../../../enums/buttonLayoutType.enum";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";

export class NumberInputDataRepresentationConfigModel {
  public advisoryText:string|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public showButtons:boolean=false,  // data-input  eigen model
  public step:number=0,  // data input representation   eigen model
  public mode:NumberInputModeType=NumberInputModeType.Decimal, // data input representation   eigen model
  public min:number=Number.MIN_SAFE_INTEGER, // data input representation   eigen model
  public max:number=Number.MAX_SAFE_INTEGER, // data input representation   eigen model
  public decrementButtonClass:ButtonClassType|NoValueType.NI=NoValueType.NI, //data-input eigen model
  public incrementButtonClass:ButtonClassType|NoValueType.NI=NoValueType.NI, //data-input eigen model
  public incrementButtonIcon:IconType|NoValueType.NI=NoValueType.NI, //data-input eigen model
  public decrementButtonIcon:IconType|NoValueType.NI=NoValueType.NI, //data-input eigen model
  public buttonLayout:ButtonLayoutType|NoValueType.NI=NoValueType.NI,// data-input eigen model
  constructor() {
  }
  setAdvisoryText(advisoryText:string|ZeroValueType.NotConfigured) {
    this.advisoryText = advisoryText
    return this
  }
}
