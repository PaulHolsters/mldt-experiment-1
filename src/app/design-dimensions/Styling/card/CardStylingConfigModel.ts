import {BackgroundColorType} from "../../../enums/backgroundColorType.enum";
export class CardStylingConfigModel {
  public backgroundColor:BackgroundColorType=BackgroundColorType.Default
  constructor(){
  }
  setBackgroundColor(bg:BackgroundColorType) {
    this.backgroundColor = bg
    return this
  }
}
