import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {IconType} from "../../../enums/iconType.enum";
import {IconPositionType} from "../../../enums/iconPositionType.enum";
import {InputFontSizeType} from "../../../enums/inputFontSizeType.enum";
export class TextInputDataRepresentationRenderModel {
  public icon:IconType|ZeroValueType.NotConfigured|undefined=undefined
  public iconPosition:IconPositionType|ZeroValueType.NotConfigured|undefined=undefined
  public inputFontSize:InputFontSizeType|undefined=undefined
  public floatLabel:boolean|undefined=undefined
  public advisoryText:string|ZeroValueType.NotConfigured|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableRenderModel')
  }

}
