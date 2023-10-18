import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {MarginType} from "../../enums/marginType.enum";
import {PaddingType} from "../../enums/paddingType.enum";
import {ButtonSizeRenderModel} from "./button/ButtonSizeRenderModel";
import {IconSizeRenderModel} from "./icon/IconSizeRenderModel";

export class SizeRenderModel {
  public height: string |ParentConfigType.static| null=null
  public width: string |ParentConfigType.static| null=null
  public calcHeight: string |ParentConfigType.static| null=null
  public calcWidth: string |ParentConfigType.static| null=null
  public grow: number |ParentConfigType.static| null=null
  public shrink: number | ParentConfigType.static|null=null
  public componentSpecificSize:ButtonSizeRenderModel|IconSizeRenderModel|null=null
  constructor() {
  }
  public setProperty(propName: string, value: VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType | MarginType|PaddingType|undefined): void {
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }

}
