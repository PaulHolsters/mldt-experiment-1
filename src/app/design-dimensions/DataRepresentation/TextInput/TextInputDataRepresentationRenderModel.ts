import {IconType} from "../../../enums/iconType.enum";
import {IconPositionType} from "../../../enums/iconPositionType.enum";
import {InputFontSizeType} from "../../../enums/inputFontSizeType.enum";
import {NotConfigured} from "../../../types/type-aliases";
export class TextInputDataRepresentationRenderModel {
  public icon:IconType|NotConfigured=undefined
  public iconPosition:IconPositionType|NotConfigured=undefined
  public inputFontSize:InputFontSizeType|undefined=undefined
  public floatLabel:boolean|undefined=undefined
  public advisoryText:string|NotConfigured=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
