import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {MarginType} from "../../enums/marginType.enum";
import {PaddingType} from "../../enums/paddingType.enum";
import {DisplayType} from "../../enums/displayType.enum";
import {NotConfigured} from "../../types/type-aliases";

export class IndividualLayoutRenderModel {
  public selfAlign:VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType|NotConfigured=undefined
  public displayType:DisplayType|NotConfigured=undefined
  constructor() {
  }
  public setProperty(propName: string, value: VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType | MarginType|PaddingType|undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }
}
