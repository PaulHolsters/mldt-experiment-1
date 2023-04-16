import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";
import {GrowValueConfigType} from "../../../enums/GrowValueConfigTypes.enum";
import {ShrinkValueConfigType} from "../../../enums/ShrinkValueConfigTypes.enum";
import {StretchValueConfigType} from "../../../enums/StrecthValueConfigTypes.enum";

export class DynamicDimensioningConfigModel {
  constructor(
    public grow: number|GrowValueConfigType,
    public shrink: number|ShrinkValueConfigType,
    public stretch:boolean|StretchValueConfigType
  ) {
  }
}
