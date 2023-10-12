import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {MarginType} from "../../enums/marginType.enum";
import {PaddingType} from "../../enums/paddingType.enum";
import {ButtonSizeRenderModel} from "./button/ButtonSizeRenderModel";
import {IconSizeRenderModel} from "./icon/IconSizeRenderModel";

export class SizeRenderModel {
  public height: string |ParentConfigType.static| undefined
  public width: string |ParentConfigType.static| undefined
  public calcHeight: string |ParentConfigType.static| undefined
  public calcWidth: string |ParentConfigType.static| undefined
  public grow: number |ParentConfigType.static| undefined
  public shrink: number | ParentConfigType.static|undefined
  public componentSpecificSize:ButtonSizeRenderModel|IconSizeRenderModel|undefined
  constructor() {
  }
  public setProperty(propName: string, value: VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType | MarginType|PaddingType|undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }

}
