import {IconType} from "../../../enums/iconType.enum";
import {IconPositionType} from "../../../enums/iconPositionType.enum";
import {InputFontSizeType} from "../../../enums/inputFontSizeType.enum";
import {isNoValueType} from "../../../types/union-types";
export class TextInputDataRepresentationRenderModel {
  public icon:IconType|null=null
  public iconPosition:IconPositionType|null=null
  public inputFontSize:InputFontSizeType|null=null
  public floatLabel:boolean|null=null
  public advisoryText:string|null=null
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) {
      if(!isNoValueType(value)){
        Reflect.set(this, propName, value)
      }
    }
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
