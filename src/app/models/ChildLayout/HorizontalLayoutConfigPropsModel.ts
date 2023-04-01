import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {HorizontalPositioningConfigType} from "../../enums/horizontalPositioningConfigTypes.enum";
import {FixedDimensioningConfigModel} from "../Dimensioning/self/FixedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "../Dimensioning/self/DynamicDimensioningConfigModel";
import {CrossAxisHorizontalConfigType} from "../../enums/crossAxisHorizontalConfigTypes.enum";

export class HorizontalLayoutConfigPropsModel {
  constructor(
    public axis:AxisConfigType,
    public wrap:boolean|undefined,
    public scroll:boolean,
    public position:HorizontalPositioningConfigType|CrossAxisHorizontalConfigType,
    public dimension:FixedDimensioningConfigModel|DynamicDimensioningConfigModel,
    public lanes:HorizontalPositioningConfigType|undefined) {
    // todo add constraints

  }
}
