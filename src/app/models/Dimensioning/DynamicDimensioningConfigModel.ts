import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
export class DynamicDimensioningConfigModel {
  constructor(
    public followContent:DimensionValueConfigType.FollowContent|undefined = undefined,
    public grow: number = 0,
              public shrink: number = 0,
              public stretch: boolean = false,
    public stretchChildren: boolean = false,
  ) {
  }
}
