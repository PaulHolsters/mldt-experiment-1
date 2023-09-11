import {GrowValueConfigType} from "../../enums/GrowValueConfigTypes.enum";
import {ShrinkValueConfigType} from "../../enums/ShrinkValueConfigTypes.enum";

export class DynamicDimensioningConfigModel {
  constructor(
    public grow: number|GrowValueConfigType,
    public shrink: number|ShrinkValueConfigType
  ) {
  }
}
