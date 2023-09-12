import {ComponentDimensionValueConfigType} from "../../enums/componentDimensionValueConfigTypes.enum";

export class DimensioningRenderModel{
  public height: string | undefined | ComponentDimensionValueConfigType.Parent=undefined
  public width: string | undefined | ComponentDimensionValueConfigType.Parent=undefined
  public calcHeight: string | undefined | ComponentDimensionValueConfigType.Parent=undefined
  public calcWidth: string | undefined| ComponentDimensionValueConfigType.Parent=undefined
  public grow: number | undefined | ComponentDimensionValueConfigType.Parent=undefined // main axis
  public shrink: number | undefined | ComponentDimensionValueConfigType.Parent=undefined // main axis
  constructor() {}

}
