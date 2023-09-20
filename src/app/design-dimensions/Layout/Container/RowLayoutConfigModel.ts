import {RowPositioningConfigType} from "../../../enums/rowPositioningConfigTypes.enum";
import {HorizontalRowLayoutConfigType} from "../../../enums/HorizontalRowLayoutConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../../enums/VerticalRowLayoutConfigTypes.enum";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {SizeConfigModel} from "../../Size/SizeConfigModel";
import {DynamicSizeConfigModel} from "../../Size/DynamicSizeConfigModel";

export class RowLayoutConfigModel {
  public horizontalLayoutOfChildren: HorizontalRowLayoutConfigType=HorizontalRowLayoutConfigType.Left
  public verticalLayoutOfChildren: VerticalRowLayoutConfigType=VerticalRowLayoutConfigType.Top
  public dimensionsOfChildren:SizeConfigModel
    = new SizeConfigModel(ZeroValueType.NotConfigured,ZeroValueType.NotConfigured,new DynamicSizeConfigModel())
  public positionOfRows:RowPositioningConfigType=RowPositioningConfigType.Top
  public wrap: boolean = true
  // todo add setter for dimensions
  setHorizontalLayoutOfChildren(layout:HorizontalRowLayoutConfigType){
    this.horizontalLayoutOfChildren = layout
    return this
  }
  setVerticalLayoutOfChildren(layout:VerticalRowLayoutConfigType){
    this.verticalLayoutOfChildren = layout
    return this
  }
  setDimensionsOfChildren(dimensions:SizeConfigModel){
    this.dimensionsOfChildren = dimensions
    return this
  }
  setPositionOfRows(positionOfRows:RowPositioningConfigType){
    this.positionOfRows = positionOfRows
    return this
  }
  setWrap(rowWrap:boolean){
    this.wrap = rowWrap
    return this
  }
}
