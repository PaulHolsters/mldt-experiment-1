import {ButtonSizeType} from "../../../enums/buttonSizeType.enum";

export class ButtonSizeRenderModel {
  public size:ButtonSizeType|null=null

  constructor() {
  }
  public setProperty(propName: string, value: any|undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }

}
