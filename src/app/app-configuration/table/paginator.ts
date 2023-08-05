import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {DimensioningConfigPropsModel} from "../../models/Dimensioning/self/DimensioningConfigPropsModel";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {WidthConfigPropsModel} from "../../models/Dimensioning/self/WidthConfigPropsModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {ResponsivePositioningConfigModel} from "../../models/Positioning/self/ResponsivePositioningConfigModel";
import {PositioningConfigPropsModel} from "../../models/Positioning/self/PositioningConfigPropsModel";
import {DisplayType} from "../../enums/displayType.enum";
import {ResponsiveStylingConfigModel} from "../../models/Styling/ResponsiveStylingConfigModel";
import {PaddingType} from "../../enums/paddingType.enum";
import {MarginType} from "../../enums/marginType.enum";
import {StylingConfigPropsModel} from "../../models/Styling/StylingConfigPropsModel";

export const paginator =
  new ComponentModel(
    'paginator',
    ComponentType.Paginator,
    undefined,
    new ResponsivePositioningConfigModel(new PositioningConfigPropsModel(DisplayType.Block)),
    new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(HeightValueConfigType.NC, new WidthConfigPropsModel(
      new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,100,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC
    ))),
    new ResponsiveAttributesConfigModel(
      new AttributesConfigPropsModel(
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        false,
        10,
        [5,15,100],
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        true,
        false,
        true,
        undefined,
        100
      )
    ),
    new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(true,false)),
    undefined,
    undefined,
    new ResponsiveStylingConfigModel(new StylingConfigPropsModel(undefined,PaddingType.All_0,MarginType.All_0)
    ))
