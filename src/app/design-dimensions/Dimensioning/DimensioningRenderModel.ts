import {ParentConfigType} from "../../enums/ParentConfigTypes.enum";

export class DimensioningRenderModel {
  public height: string |ParentConfigType.static| undefined = undefined
  public width: string |ParentConfigType.static| undefined = undefined
  public calcHeight: string |ParentConfigType.static| undefined = undefined
  public calcWidth: string |ParentConfigType.static| undefined = undefined
  public grow: number |ParentConfigType.static| undefined = undefined
  public shrink: number | ParentConfigType.static|undefined = undefined

  constructor() {
  }

}
