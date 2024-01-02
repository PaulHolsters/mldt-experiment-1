import {BackgroundColorType} from "../../../enums/backgroundColorType.enum";
import {BorderColorType} from "../../../enums/borderColorType.enum";
import {BorderWidthType} from "../../../enums/borderWidthType.enum";

export class CardStylingConfigModel {
  public backgroundColor:BackgroundColorType=BackgroundColorType.Default
  public borderColor:BorderColorType=BorderColorType.Default
  public borderWidth:BorderWidthType=BorderWidthType.No_width
  constructor(){
  }
  setBackgroundColor(bg:BackgroundColorType) {
    this.backgroundColor = bg
    return this
  }
  setBorderColor(bo:BorderColorType) {
    this.borderColor = bo
    return this
  }
  setBorderWidth(bw:BorderWidthType) {
    this.borderWidth = bw
    return this
  }
}
