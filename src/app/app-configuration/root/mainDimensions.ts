import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/ResponsiveDimensioningConfigModel";
import {DimensioningConfigModel} from "../../models/Dimensioning/DimensioningConfigModel";
import {HeightConfigModel} from "../../models/Dimensioning/HeightConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/NonCalculatedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthValueConfigType} from "../../enums/WidthValueConfigTypes.enum";

export const mainDimensions = new ResponsiveDimensioningConfigModel(
  new DimensioningConfigModel(
    new HeightConfigModel(
      new FixedDimensioningConfigModel(
        DimensionValueConfigType.Calculated, '(100vh - 16px)'),
      DynamicDimensionValueConfigType.NC),
    WidthValueConfigType.NC
  )
)
