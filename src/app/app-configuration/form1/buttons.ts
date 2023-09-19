import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {ComponentModel} from "../../models/ComponentModel";
import {ResponsiveChildLayoutConfigModel} from "../../models/Layout/ResponsiveContainerChildLayoutConfigModel";
import {ChildLayoutConfigModel} from "../../models/Layout/TableLayoutConfigModel";
import {HorizontalLayoutConfigPropsModel} from "../../models/Layout/HorizontalLayoutConfigPropsModel";
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
import {VerticalLayoutConfigPropsModel} from "../../models/Layout/VerticalLayoutConfigPropsModel";
import {MainAxisVerticalPositioningConfigType} from "../../enums/VerticalColumnLayoutConfigTypes.enum";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {
  CrossAxisVerticalLanesPositioningConfigType
} from "../../enums/rowPositioningConfigTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/ResponsiveDimensioningConfigModel";
import {DimensioningConfigModel} from "../../models/Dimensioning/DimensioningConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/VisibilityConfigModel";
import {AttributesConfigPropsModel} from "../../models/component-specific-config/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";

export const buttons= new ComponentModel(
  'buttons',
  ComponentType.Container,
  new ResponsiveChildLayoutConfigModel(
    new ChildLayoutConfigModel(
      new HorizontalLayoutConfigPropsModel(
        AxisConfigType.Cross, true, false, CrossAxisHorizontalPositioningConfigType.Center,
        new WidthConfigModel(new FixedDimensioningConfigModel(
          DimensionValueConfigType.Hardcoded,100,DimensionUnitConfigType.Percentage
        ),DynamicDimensionValueConfigType.NC),
        CrossAxisHorizontalLanesPositioningConfigType.Center),
      new VerticalLayoutConfigPropsModel(
        AxisConfigType.Main, undefined, false, MainAxisVerticalPositioningConfigType.Evenly,
        HeightValueConfigType.NC,
        CrossAxisVerticalLanesPositioningConfigType.NA)
    )
  ),
  undefined,
  new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(
    HeightValueConfigType.NC,
    new WidthConfigModel(new FixedDimensioningConfigModel(
      DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
    ), DynamicDimensionValueConfigType.NC)
  )),
  undefined,
  new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
  undefined,
  [    {
    name:'filter-btn',
    type:ComponentType.Button,
    attributes: new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(NoValueType.NA,  NoValueType.NA, NoValueType.NA, NoValueType.NA,
      'Filter op kolom')),
    visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel())
  }],
  undefined,
  undefined)
