import {BackgroundColorType} from "../../../enums/backgroundColorType.enum";
export class CardStylingConfigModel {
  public backgroundColor:BackgroundColorType=BackgroundColorType.Primary
  constructor(){
  }
  setBackgroundColor(bg:BackgroundColorType) {
    this.backgroundColor = bg
    return this
  }
}
