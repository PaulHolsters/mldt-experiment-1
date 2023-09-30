import {ResponsiveChildLayoutConfigModel} from "../../models/Layout/ResponsiveContainerChildLayoutConfigModel";
import {ChildLayoutConfigModel} from "../../models/Layout/TableLayoutConfigModel";
import {HorizontalLayoutConfigPropsModel} from "../../models/Layout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {WidthConfigModel} from "../../models/Size/WidthConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Size/NonCalculatedSizeConfigModel";
import {DimensionValueConfigType} from "../../enums/sizeValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/sizeUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "../../enums/columnPositioningConfigTypes.enum";
import {VerticalLayoutConfigPropsModel} from "../../models/Layout/VerticalLayoutConfigPropsModel";
import {MainAxisVerticalPositioningConfigType} from "../../enums/VerticalColumnLayoutConfigTypes.enum";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {CrossAxisVerticalLanesPositioningConfigType} from "../../enums/rowPositioningConfigTypes.enum";

export const formLayout = new ResponsiveChildLayoutConfigModel(
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
      // todo fix bug dit is automatisch 100% hoog terwijl dat niet mag eerder auto!
      HeightValueConfigType.NC,
      CrossAxisVerticalLanesPositioningConfigType.NA
    )
  )
)
