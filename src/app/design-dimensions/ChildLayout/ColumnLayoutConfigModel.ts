import {HorizontalColumnLayoutConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {VerticalColumnLayoutConfigType} from "../../enums/VerticalColumnLayoutConfigTypes.enum";
import {ColumnPositioningConfigType} from "../../enums/columnPositioningConfigTypes.enum";
import {DynamicDimensioningConfigModel} from "../Dimensioning/DynamicDimensioningConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";
import {DimensioningConfigModel} from "../Dimensioning/DimensioningConfigModel";

export class ColumnLayoutConfigModel {
  public horizontalLayoutOfChildren: HorizontalColumnLayoutConfigType=HorizontalColumnLayoutConfigType.Left
  public verticalLayoutOfChildren: VerticalColumnLayoutConfigType=VerticalColumnLayoutConfigType.Top
  public dimensionsOfChildren:DimensioningConfigModel
    = new DimensioningConfigModel(ZeroValueType.NotConfigured,ZeroValueType.NotConfigured,new DynamicDimensioningConfigModel())
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
  setDimensionsOfChildren(dimensions:DimensioningConfigModel){
    this.dimensionsOfChildren = dimensions
    return this
  }
  setWrap(columnWrap:boolean){
    this.wrap = columnWrap
    return this
  }
}
