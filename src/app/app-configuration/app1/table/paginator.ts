import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {AttributesConfigPropsModel} from "../../models/component-specific-config/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveSpacingConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/SpacingConfigModel";
import {DimensioningConfigModel} from "../../models/Size/IconStylingConfigModel";
import {ResponsiveDimensioningConfigModel} from "../../models/Size/ResponsiveSizeConfigModel";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {WidthConfigModel} from "../../models/Size/WidthConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Size/NonCalculatedSizeConfigModel";
import {DimensionValueConfigType} from "../../../enums/sizeValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../../enums/sizeUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../../enums/DynamicDimensionValueConfigTypes.enum";
import {ResponsiveStylingConfigModel} from "../../models/Styling/ResponsiveStylingConfigModel";
import {PaddingType} from "../../../enums/paddingType.enum";
import {MarginType} from "../../../enums/marginType.enum";
import {StylingConfigPropsModel} from "../../models/Styling/StylingConfigPropsModel";
import {BorderModel} from "../../models/BorderModel";
import {BorderWidthType} from "../../../enums/borderWidthType.enum";

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
