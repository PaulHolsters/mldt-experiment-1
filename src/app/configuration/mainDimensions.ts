import {ResponsiveDimensioningConfigModel} from "../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../models/Dimensioning/self/DimensioningConfigPropsModel";
import {HeightConfigPropsModel} from "../models/Dimensioning/self/HeightConfigPropsModel";
import {FixedDimensioningConfigModel} from "../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../enums/dimensionValueConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthValueConfigType} from "../enums/WidthValueConfigTypes.enum";

export const mainDimensions = new ResponsiveDimensioningConfigModel(
  new DimensioningConfigPropsModel(
    new HeightConfigPropsModel(
      new FixedDimensioningConfigModel(
        DimensionValueConfigType.Calculated, '(100vh - 16px)'),
      DynamicDimensionValueConfigType.NC),
    WidthValueConfigType.NC
  )
)
