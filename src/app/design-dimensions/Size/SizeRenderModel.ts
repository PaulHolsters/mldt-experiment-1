import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {MarginType} from "../../enums/marginType.enum";
import {PaddingType} from "../../enums/paddingType.enum";
import {ButtonSizeRenderModel} from "./button/ButtonSizeRenderModel";

export class SizeRenderModel {
  public height: string |ParentConfigType.static| undefined = undefined
  public width: string |ParentConfigType.static| undefined = undefined
  public calcHeight: string |ParentConfigType.static| undefined = undefined
  public calcWidth: string |ParentConfigType.static| undefined = undefined
  public grow: number |ParentConfigType.static| undefined = undefined
  public shrink: number | ParentConfigType.static|undefined = undefined
  public componentSpecificSize:ButtonSizeRenderModel|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType | MarginType|PaddingType|undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }

}
