import {RowPositioningConfigType} from "../../enums/rowPositioningConfigTypes.enum";
import {
  HorizontalRowLayoutConfigType
} from "../../enums/HorizontalRowLayoutConfigTypes.enum";
import {
  VerticalRowLayoutConfigType
} from "../../enums/VerticalRowLayoutConfigTypes.enum";

export class RowLayoutConfigModel {
  public horizontalLayoutOfChildren: HorizontalRowLayoutConfigType=HorizontalRowLayoutConfigType.Left
  public verticalLayoutOfChildren: VerticalRowLayoutConfigType=VerticalRowLayoutConfigType.Top
  public positionOfRows:RowPositioningConfigType=RowPositioningConfigType.Top
  public wrap: boolean = true
  setHorizontalLayoutOfChildren(layout:HorizontalRowLayoutConfigType){

  }
  setVerticalLayoutOfChildren(layout:VerticalRowLayoutConfigType){

  }
  setPositionOfRows(positionOfRows:RowPositioningConfigType){

  }
  setWrap(rowWrap:boolean){

  }
}
