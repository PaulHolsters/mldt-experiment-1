import {RowPositioningConfigType} from "../../../enums/rowPositioningConfigTypes.enum";
import {HorizontalRowLayoutConfigType} from "../../../enums/HorizontalRowLayoutConfigTypes.enum";
import {VerticalRowLayoutConfigType} from "../../../enums/VerticalRowLayoutConfigTypes.enum";
export class RowLayoutConfigModel {
  public horizontalLayoutOfChildren: HorizontalRowLayoutConfigType=HorizontalRowLayoutConfigType.Left
  public verticalLayoutOfChildren: VerticalRowLayoutConfigType=VerticalRowLayoutConfigType.Top
  public positionOfRows:RowPositioningConfigType=RowPositioningConfigType.Top
  public wrap: boolean = true
  setHorizontalLayoutOfChildren(layout:HorizontalRowLayoutConfigType){
    this.horizontalLayoutOfChildren = layout
    return this
  }
  setVerticalLayoutOfChildren(layout:VerticalRowLayoutConfigType){
    this.verticalLayoutOfChildren = layout
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
