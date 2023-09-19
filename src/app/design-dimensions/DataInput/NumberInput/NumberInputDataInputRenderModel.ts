import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {NumberInputModeType} from "../../../enums/numberInputModeType.enum";
import {ButtonClassType} from "../../../enums/buttonClassType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {ButtonLayoutType} from "../../../enums/buttonLayoutType.enum";
export class NumberInputDataInputRenderModel {
  public advisoryText:string|ZeroValueType.NotConfigured|undefined=undefined
  public showButtons:boolean|undefined=undefined
  public step:number|undefined=undefined
  public mode:NumberInputModeType|undefined=undefined
  public min:number|undefined=undefined
  public max:number|undefined=undefined
  public decrementButtonClass:ButtonClassType|undefined=undefined
  public incrementButtonClass:ButtonClassType|undefined=undefined
  public incrementButtonIcon:IconType|ZeroValueType.NotConfigured|undefined=undefined
  public decrementButtonIcon:IconType|ZeroValueType.NotConfigured|undefined=undefined
  public buttonLayout:ButtonLayoutType|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableRenderModel')
  }
}
