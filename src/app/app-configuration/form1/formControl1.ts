import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {ComponentModel} from "../../models/ComponentModel";
import {ResponsiveChildLayoutConfigModel} from "../../models/Layout/ResponsiveContainerChildLayoutConfigModel";
import {ChildLayoutConfigModel} from "../../models/Layout/TableLayoutConfigModel";
import {HorizontalLayoutConfigPropsModel} from "../../models/Layout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {WidthConfigModel} from "../../models/Size/WidthConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Size/NonCalculatedSizeConfigModel";
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
import {ResponsiveDimensioningConfigModel} from "../../models/Size/ResponsiveSizeConfigModel";
import {DimensioningConfigModel} from "../../models/Size/ButtonSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/VisibilityConfigModel";
import {AttributesConfigPropsModel} from "../../models/component-specific-config/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";

export const formControl1 = {
  name: 'formcontrol1',
  type: ComponentType.FormControl,
  attributes: new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA,NoValueType.NA,
      NoValueType.NA, NoValueType.NA, NoValueType.NA,new ComponentModel(
      'fc1-container',
      ComponentType.Container,
      new ResponsiveChildLayoutConfigModel(
        new ChildLayoutConfigModel(
          // todo zorg voor default layout bij een container voor simpele gevallen
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
      new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(
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
        NoValueType.NA,
        false,
        NoValueType.NA,
        NoValueType.NA,
        ['product', 'name']
        )),
      new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
      undefined,
      [{
        // dit is niet nodig als je kiest voor een float label natuurlijk dan moet hier enkel een input komen en
        // in dat geval heb je ook geen extra container nodig => jawel daar zit de data in
        name: 'fc1-label',
        type: ComponentType.Label,
        visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
      }, {
        name: 'fc1-input', type: ComponentType.TextInput,
        visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel())
      }],
      undefined,
      undefined) )
    ),
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel())
  ,
  // todo zorg dat er constraints komen die errors geven bv als je height en width in je config omwisselt!
  dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(
    HeightValueConfigType.NC,
    new WidthConfigModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,100
      ,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC)
  ))
}
