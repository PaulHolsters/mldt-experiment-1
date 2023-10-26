import {VerticalRowLayoutConfigType} from "../../enums/VerticalRowLayoutConfigTypes.enum";
import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {MarginType} from "../../enums/marginType.enum";
import {PaddingType} from "../../enums/paddingType.enum";
import {DisplayType} from "../../enums/displayType.enum";

export class IndividualLayoutRenderModel {
  public selfAlign:VerticalRowLayoutConfigType|null=null
  public display:DisplayType|null=null
  constructor() {
  }
  public setProperty(propName: string, value: VerticalRowLayoutConfigType|HorizontalColumnLayoutConfigType | MarginType|PaddingType|undefined): void {
    // todo fix: no value needed wordt nu naar de frontend gestuurd omdat dit de default waarde is...
    if (Reflect.has(this, propName))
      Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type PositioningComponentPropsModel')
  }
}
