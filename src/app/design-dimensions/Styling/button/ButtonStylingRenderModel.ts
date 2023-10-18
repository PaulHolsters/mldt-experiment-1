import {ButtonMeaningType} from "../../../enums/buttonMeaningType.enum";
import {ButtonAppearanceType} from "../../../enums/buttonAppearanceType.enum";

export class ButtonStylingRenderModel {
  public meaning:ButtonMeaningType|null=null
  public appearance:ButtonAppearanceType|null=null
  public raised:boolean|null=null
  public rounded:boolean|null=null
  constructor() {
  }
  public setProperty(propName: string, value: any|undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }

}
