import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";

export class DynamicDimensioningConfigModel {
  constructor(
    public followContent: boolean = false,
    public grow: number = 0,
    public shrink: number = 0,
    public stretch: boolean = false,
  ) {
  }
}
