import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {SizeConfigModel} from "../../design-dimensions/Size/SizeConfigModel";

export const mainSize = new ResponsiveSizeConfigModel().setSmartphone()
/*
new DimensioningConfigModel(
  new HeightConfigModel(
    new FixedDimensioningConfigModel(
      DimensionValueConfigType.Calculated, '(100vh - 16px)'),
    DynamicDimensionValueConfigType.NC),
  WidthValueConfigType.NC
)*/
