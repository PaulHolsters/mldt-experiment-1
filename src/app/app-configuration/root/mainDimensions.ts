import {ResponsiveDimensioningConfigModel} from "../../models/Size/ResponsiveSizeConfigModel";
import {DimensioningConfigModel} from "../../models/Size/IconStylingConfigModel";
import {HeightConfigModel} from "../../models/Size/HeightConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Size/NonCalculatedSizeConfigModel";
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
