import {ResponsiveChildLayoutConfigModel} from "../../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ChildLayoutConfigModel} from "../../models/ChildLayout/ChildLayoutConfigModel";
import {HorizontalLayoutConfigPropsModel} from "../../models/ChildLayout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {WidthConfigModel} from "../../models/Dimensioning/WidthConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/NonCalculatedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "../../enums/columnPositioningConfigTypes.enum";
import {VerticalLayoutConfigPropsModel} from "../../models/ChildLayout/VerticalLayoutConfigPropsModel";
import {MainAxisVerticalPositioningConfigType} from "../../enums/VerticalColumnLayoutConfigTypes.enum";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {CrossAxisVerticalLanesPositioningConfigType} from "../../enums/rowPositioningConfigTypes.enum";

export const formLayout2 = new ResponsiveChildLayoutConfigModel(
  new ChildLayoutConfigModel(
    new HorizontalLayoutConfigPropsModel(
      AxisConfigType.Cross,
      undefined,
      false,
      CrossAxisHorizontalPositioningConfigType.Left,
      new WidthConfigModel(
        new FixedDimensioningConfigModel(
          DimensionValueConfigType.Hardcoded,
          100,
          DimensionUnitConfigType.Percentage
        ),
        DynamicDimensionValueConfigType.NA
      ),
      CrossAxisHorizontalLanesPositioningConfigType.Left
    ),
    new VerticalLayoutConfigPropsModel(
      AxisConfigType.Main,
      false,
      false,
      MainAxisVerticalPositioningConfigType.Top,
      HeightValueConfigType.NC,
      CrossAxisVerticalLanesPositioningConfigType.NA
    )
  )
)
