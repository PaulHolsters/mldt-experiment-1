import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";

export class DynamicDimensioningConfigModel {
  constructor(
    public grow: number|undefined,
    public shrink: number|undefined,
    public stretch:boolean|undefined
  ) {
  }
}
