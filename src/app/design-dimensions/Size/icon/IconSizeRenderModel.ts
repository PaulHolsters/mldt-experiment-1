import {NonCalculatedSizeConfigModel} from "../NonCalculatedSizeConfigModel";
import {CalculatedSizeConfigModel} from "../CalculatedSizeConfigModel";
import {ParentConfigType} from "../../../enums/ParentConfigTypes.enum";

export class IconSizeRenderModel {
  public size:
    NonCalculatedSizeConfigModel |
    CalculatedSizeConfigModel |
    ParentConfigType.static|undefined
  constructor() {
  }
  public setProperty(propName: string, value: any|undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }

}
