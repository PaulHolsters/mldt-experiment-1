import {FixedDimensioningConfigModel} from "./FixedDimensioningConfigModel";
import {DynamicDimensioningConfigModel} from "./DynamicDimensioningConfigModel";
import {DimensionValueConfigType} from "../../../enums/dimensionValueConfigTypes.enum";
export class HeightConfigPropsModel {
  constructor(  public fixed:FixedDimensioningConfigModel|DimensionValueConfigType,
                public dynamic:DynamicDimensioningConfigModel|DimensionValueConfigType
  ){

  }

}
