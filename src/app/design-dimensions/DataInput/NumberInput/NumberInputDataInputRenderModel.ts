import {NumberInputModeType} from "../../../enums/numberInputModeType.enum";
import {IconType} from "../../../enums/iconType.enum";
import {ButtonLayoutType} from "../../../enums/buttonLayoutType.enum";
import {ButtonMeaningType} from "../../../enums/buttonMeaningType.enum";
import {isNoValueType} from "../../../types/union-types";
export class NumberInputDataInputRenderModel {
  public advisoryText:string|null=null
  public showButtons:boolean|null=null
  public step:number|null=null
  public mode:NumberInputModeType|null=null
  public min:number|null=null
  public max:number|null=null
  public decrementButtonClass:ButtonMeaningType|null=null
  public incrementButtonClass:ButtonMeaningType|null=null
  public incrementButtonIcon:IconType|null=null
  public decrementButtonIcon:IconType|null=null
  public buttonLayout:ButtonLayoutType|null=null
  public disabled: boolean | null=null
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)){
      if(!isNoValueType(value)) Reflect.set(this, propName, value)
    }
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }
}
