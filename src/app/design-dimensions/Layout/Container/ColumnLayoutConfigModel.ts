import {HorizontalColumnLayoutConfigType} from "../../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {VerticalColumnLayoutConfigType} from "../../../enums/VerticalColumnLayoutConfigTypes.enum";
import {ColumnPositioningConfigType} from "../../../enums/columnPositioningConfigTypes.enum";
import {SizeConfigModel} from "../../Size/SizeConfigModel";

export class ColumnLayoutConfigModel {
  public horizontalLayoutOfChildren: HorizontalColumnLayoutConfigType=HorizontalColumnLayoutConfigType.Left
  public verticalLayoutOfChildren: VerticalColumnLayoutConfigType=VerticalColumnLayoutConfigType.Top
  public sizeOfChildren:SizeConfigModel= new SizeConfigModel()
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
  setSizeOfChildren(size:SizeConfigModel){
    this.sizeOfChildren = size
    return this
  }
  setWrap(columnWrap:boolean){
    this.wrap = columnWrap
    return this
  }
}
