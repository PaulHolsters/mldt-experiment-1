import {HorizontalColumnLayoutConfigType} from "../../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {VerticalColumnLayoutConfigType} from "../../../enums/VerticalColumnLayoutConfigTypes.enum";
import {ColumnPositioningConfigType} from "../../../enums/columnPositioningConfigTypes.enum";

export class ColumnLayoutConfigModel {
  // todo add conditions that force the set methods to be implemented based on the properties
  //        outside the constructor ?
  public horizontalLayoutOfChildren: HorizontalColumnLayoutConfigType=HorizontalColumnLayoutConfigType.Left
  public verticalLayoutOfChildren: VerticalColumnLayoutConfigType=VerticalColumnLayoutConfigType.Top
  public positionOfColumns:ColumnPositioningConfigType=ColumnPositioningConfigType.Left
  public wrap: boolean = true
  setHorizontalLayoutOfChildren(layout:HorizontalColumnLayoutConfigType){
    this.horizontalLayoutOfChildren = layout
    return this
  }
  setVerticalLayoutOfChildren(layout:VerticalColumnLayoutConfigType){
    this.verticalLayoutOfChildren = layout
    return this
  }
  setPositionOfColumns(positionOfColumns:ColumnPositioningConfigType){
    this.positionOfColumns = positionOfColumns
    return this
  }
  setWrap(columnWrap:boolean){
    this.wrap = columnWrap
    return this
  }
}
