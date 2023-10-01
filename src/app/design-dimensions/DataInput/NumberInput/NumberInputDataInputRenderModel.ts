import {NumberInputModeType} from "../../../enums/numberInputModeType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {ButtonLayoutType} from "../../../enums/buttonLayoutType.enum";
import {ButtonMeaningType} from "../../../enums/buttonMeaningType.enum";
import {NotAllowed, NotConfigured} from "../../../types/type-aliases";
export class NumberInputDataInputRenderModel {
  public advisoryText:string|NotConfigured|undefined=undefined
  public showButtons:boolean|undefined=undefined
  public step:number|undefined=undefined
  public mode:NumberInputModeType|undefined=undefined
  public min:number|undefined=undefined
  public max:number|undefined=undefined
  public decrementButtonClass:ButtonMeaningType|undefined=undefined
  public incrementButtonClass:ButtonMeaningType|undefined=undefined
  public incrementButtonIcon:IconType|NotConfigured|undefined=undefined
  public decrementButtonIcon:IconType|NotConfigured|undefined=undefined
  public buttonLayout:ButtonLayoutType|undefined=undefined
  public disabled: boolean | NotAllowed=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }
}
