import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";

export class DynamicDimensioningConfigModel {
  constructor(
    public grow: number = 0,
    public shrink: number = 0,
  ) {
  }
}
