import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalPositioningConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "../../enums/crossAxisVerticalPositioningConfigTypes.enum";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {HeightConfigPropsModel} from "../Dimensioning/self/HeightConfigPropsModel";
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "../../enums/crossAxisHorizontalLanesPositioningConfigTypes.enum";
import {
  CrossAxisVerticalLanesPositioningConfigType
} from "../../enums/crossAxisVerticalLanesPositioningConfigTypes.enum";
export class VerticalLayoutConfigPropsModel {
  constructor(    public axis:AxisConfigType,
                  public wrap:boolean|undefined,
                  public scroll:boolean,
                  public position:MainAxisVerticalPositioningConfigType|CrossAxisVerticalPositioningConfigType,
                  public height:HeightConfigPropsModel|DimensionValueConfigType.NA|DimensionValueConfigType.NC,
                  public lanes:CrossAxisVerticalLanesPositioningConfigType) {
  }
}
