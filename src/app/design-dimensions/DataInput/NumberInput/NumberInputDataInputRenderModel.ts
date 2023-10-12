import {NumberInputModeType} from "../../../enums/numberInputModeType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {ButtonLayoutType} from "../../../enums/buttonLayoutType.enum";
import {ButtonMeaningType} from "../../../enums/buttonMeaningType.enum";
export class NumberInputDataInputRenderModel {
  public advisoryText:string|undefined
  public showButtons:boolean|undefined
  public step:number|undefined
  public mode:NumberInputModeType|undefined
  public min:number|undefined
  public max:number|undefined
  public decrementButtonClass:ButtonMeaningType|undefined
  public incrementButtonClass:ButtonMeaningType|undefined
  public incrementButtonIcon:IconType|undefined
  public decrementButtonIcon:IconType|undefined
  public buttonLayout:ButtonLayoutType|undefined
  public disabled: boolean | undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }
}
