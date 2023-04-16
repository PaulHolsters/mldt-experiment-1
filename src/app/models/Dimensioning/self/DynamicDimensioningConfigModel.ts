import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";

export class DynamicDimensioningConfigModel {
  constructor(
    public grow: number|DimensionValueConfigType.NA|DimensionValueConfigType.NC|DimensionValueConfigType.Parent,
    public shrink: number|DimensionValueConfigType.NA|DimensionValueConfigType.NC|DimensionValueConfigType.Parent,
    public stretch:boolean|DimensionValueConfigType.NA
  ) {
  }
}
