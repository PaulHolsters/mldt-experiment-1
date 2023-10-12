import {IconType} from "../../../enums/iconType.enum";
import {IconPositionType} from "../../../enums/iconPositionType.enum";
import {InputFontSizeType} from "../../../enums/inputFontSizeType.enum";
export class TextInputDataRepresentationRenderModel {
  public icon:IconType|undefined
  public iconPosition:IconPositionType|undefined
  public inputFontSize:InputFontSizeType|undefined
  public floatLabel:boolean|undefined
  public advisoryText:string|undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
