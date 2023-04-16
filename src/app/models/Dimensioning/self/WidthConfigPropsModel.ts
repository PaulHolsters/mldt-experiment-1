import {FixedDimensioningConfigModel} from "./FixedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "./DynamicDimensioningConfigModel";
import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";
import {FixedDimensionValueConfigType} from "../../../enums/FixedDimensionValueConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../../enums/DynamicDimensionValueConfigTypes.enum";
export class WidthConfigPropsModel {
  constructor(  public fixed:FixedDimensioningConfigModel|FixedDimensionValueConfigType,
                public dynamic:DynamicDimensioningConfigModel|DynamicDimensionValueConfigType
  ){
  }

}
