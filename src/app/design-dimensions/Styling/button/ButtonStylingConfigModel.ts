import {ButtonMeaningType} from "../../../enums/buttonMeaningType.enum";
import {ButtonAppearanceType} from "../../../enums/buttonAppearanceType.enum";

export class ButtonStylingConfigModel {
  public meaning:ButtonMeaningType=ButtonMeaningType.Info
  public appearance:ButtonAppearanceType=ButtonAppearanceType.Standard
  public raised:boolean=false
  public rounded:boolean=false
  constructor(){
  }
  setMeaning(meaning:ButtonMeaningType) {
    this.meaning = meaning
    return this
  }
  setAppearance(appearance:ButtonAppearanceType) {
    this.appearance = appearance
    return this
  }
  setRaised(raised:boolean) {
    this.raised = raised
    return this
  }
  setRounded(rounded:boolean) {
    this.rounded = rounded
    return this
  }



}
