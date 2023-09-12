import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {AttributesConfigPropsModel} from "../../models/component-specific-config/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/VisibilityConfigModel";
import {DimensioningConfigModel} from "../../models/Dimensioning/DimensioningConfigModel";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/ResponsiveDimensioningConfigModel";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {WidthConfigModel} from "../../models/Dimensioning/WidthConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/NonCalculatedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {ResponsiveStylingConfigModel} from "../../models/Styling/ResponsiveStylingConfigModel";
import {PaddingType} from "../../enums/paddingType.enum";
import {MarginType} from "../../enums/marginType.enum";
import {StylingConfigPropsModel} from "../../models/Styling/StylingConfigPropsModel";
import {BorderModel} from "../../models/BorderModel";
import {BorderWidthType} from "../../enums/borderWidthType.enum";

export const paginator =
  new ComponentModel(
    'paginator',
    ComponentType.Paginator,
    undefined,
    undefined,
    new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(HeightValueConfigType.NC, new WidthConfigModel(
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
    new ResponsiveVisibilityConfigModel(new VisibilityConfigModel(true,false)),
    undefined,
    undefined,
    new ResponsiveStylingConfigModel(new StylingConfigPropsModel(undefined,PaddingType.All_0,MarginType.All_0,NoValueType.NA,
      NoValueType.NA,NoValueType.NA,undefined,new BorderModel(undefined,undefined,undefined,BorderWidthType.No_width),)
    ))
