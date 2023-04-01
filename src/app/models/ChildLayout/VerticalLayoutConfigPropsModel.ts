import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {HorizontalPositioningConfigType} from "../../enums/horizontalPositioningConfigTypes.enum";
import {CrossAxisHorizontalConfigType} from "../../enums/crossAxisHorizontalConfigTypes.enum";
import {FixedDimensioningConfigModel} from "../Dimensioning/self/FixedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "../Dimensioning/self/DynamicDimensioningConfigModel";
import {VerticalPositioningConfigType} from "../../enums/verticalPositioningConfigTypes.enum";
import {CrossAxisVerticalConfigType} from "../../enums/crossAxisVerticalConfigTypes.enum";

export class VerticalLayoutConfigPropsModel {
  constructor(    public axis:AxisConfigType,
                  public wrap:boolean|undefined,
                  public scroll:boolean,
                  public position:VerticalPositioningConfigType|CrossAxisVerticalConfigType,
                  public dimension:FixedDimensioningConfigModel|DynamicDimensioningConfigModel,
                  public lanes:VerticalPositioningConfigType|undefined ) {
  }
}
