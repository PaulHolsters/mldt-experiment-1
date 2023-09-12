import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {VerticalColumnLayoutConfigType} from "../../enums/VerticalColumnLayoutConfigTypes.enum";
import {ColumnPositioningConfigType} from "../../enums/columnPositioningConfigTypes.enum";

export class ColumnLayoutConfigModel {
  public horizontalLayoutOfChildren: HorizontalColumnLayoutConfigType=HorizontalColumnLayoutConfigType.Left
  public verticalLayoutOfChildren: VerticalColumnLayoutConfigType=VerticalColumnLayoutConfigType.Top
  public positionOfColumns:ColumnPositioningConfigType=ColumnPositioningConfigType.Left
  public wrap: boolean = true
  setHorizontalLayoutOfChildren(layout:HorizontalColumnLayoutConfigType){

  }
  setVerticalLayoutOfChildren(layout:VerticalColumnLayoutConfigType){

  }
  setPositionOfColumns(positionOfColumns:ColumnPositioningConfigType){

  }
  setWrap(rowWrap:boolean){

  }
}
