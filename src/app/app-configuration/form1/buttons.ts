import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {ComponentModel} from "../../models/ComponentModel";
import {ResponsiveChildLayoutConfigModel} from "../../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ChildLayoutConfigModel} from "../../models/ChildLayout/ChildLayoutConfigModel";
import {HorizontalLayoutConfigPropsModel} from "../../models/ChildLayout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/crossAxisHorizontalLayoutConfigTypes.enum";
import {WidthConfigPropsModel} from "../../models/Dimensioning/self/WidthConfigPropsModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "../../enums/columnPositioningConfigTypes.enum";
import {VerticalLayoutConfigPropsModel} from "../../models/ChildLayout/VerticalLayoutConfigPropsModel";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalLayoutConfigTypes.enum";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {
  CrossAxisVerticalLanesPositioningConfigType
} from "../../enums/rowPositioningConfigTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../../models/Dimensioning/self/DimensioningConfigPropsModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";

export const buttons= new ComponentModel(
  'buttons',
  ComponentType.Container,
  new ResponsiveChildLayoutConfigModel(
    new ChildLayoutConfigModel(
      new HorizontalLayoutConfigPropsModel(
        AxisConfigType.Cross, true, false, CrossAxisHorizontalPositioningConfigType.Center,
        new WidthConfigPropsModel(new FixedDimensioningConfigModel(
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
  new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
    HeightValueConfigType.NC,
    new WidthConfigPropsModel(new FixedDimensioningConfigModel(
      DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
    ), DynamicDimensionValueConfigType.NC)
  )),
  undefined,
  new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
  undefined,
  [    {
    name:'filter-btn',
    type:ComponentType.Button,
    attributes: new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(NoValueType.NA,  NoValueType.NA, NoValueType.NA, NoValueType.NA,
      'Filter op kolom')),
    visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel())
  }],
  undefined,
  undefined)
