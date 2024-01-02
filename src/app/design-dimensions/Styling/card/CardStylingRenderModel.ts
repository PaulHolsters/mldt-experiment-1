import {BackgroundColorType} from "../../../enums/backgroundColorType.enum";
import {BorderColorType} from "../../../enums/borderColorType.enum";
import {BorderWidthType} from "../../../enums/borderWidthType.enum";
export class CardStylingRenderModel {
  public backgroundColor:BackgroundColorType|null=null
  public borderColor:BorderColorType|null=null
  public borderWidth:BorderWidthType|null=null
  constructor() {
  }
  public setProperty(propName: string, value: any|undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }

}
