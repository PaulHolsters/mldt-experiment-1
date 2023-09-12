import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {ComponentModel} from "../../models/ComponentModel";
import {ResponsiveChildLayoutConfigModel} from "../../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ChildLayoutConfigModel} from "../../models/ChildLayout/ChildLayoutConfigModel";
import {HorizontalLayoutConfigPropsModel} from "../../models/ChildLayout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/crossAxisColumnLayoutConfigTypes.enum";
import {WidthConfigModel} from "../../models/Dimensioning/WidthConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/NonCalculatedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "../../enums/columnPositioningConfigTypes.enum";
import {VerticalLayoutConfigPropsModel} from "../../models/ChildLayout/VerticalLayoutConfigPropsModel";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalLayoutConfigTypes.enum";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {CrossAxisVerticalLanesPositioningConfigType} from "../../enums/rowPositioningConfigTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/ResponsiveDimensioningConfigModel";
import {DimensioningConfigModel} from "../../models/Dimensioning/DimensioningConfigModel";
import {HeightConfigModel} from "../../models/Dimensioning/HeightConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/VisibilityConfigModel";
import {AttributesConfigPropsModel} from "../../models/component-specific-config/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";

export const formControl3 = {
  name: 'formcontrol3',
  type: ComponentType.FormControl,
  attributes: new ResponsiveAttributesConfigModel(
    new AttributesConfigPropsModel(
      NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA,NoValueType.NA,
      NoValueType.NA, NoValueType.NA, NoValueType.NA,
      new ComponentModel(
        'fc3-container',
        ComponentType.Container,
        new ResponsiveChildLayoutConfigModel(
          new ChildLayoutConfigModel(
            // todo zorg voor default layout bij een container voor simpele gevallen
            new HorizontalLayoutConfigPropsModel(
              AxisConfigType.Cross, true, false, CrossAxisHorizontalPositioningConfigType.Left,
              new WidthConfigModel(new FixedDimensioningConfigModel(
                DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
              ), DynamicDimensionValueConfigType.NC),
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
          NoValueType.NA, ['product', 'category'])),
        new ResponsiveVisibilityConfigModel(
          new VisibilityConfigModel()),
        undefined,
        [
          {
            // dit is niet nodig als je kiest voor een float label natuurlijk dan moet hier enkel een input komen en
            // in dat geval heb je ook geen extra container nodig => jawel daar zit de data in
            name: 'fc3-label',
            type: ComponentType.Label,
            visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
          },
          new ComponentModel(
            'radio-button-container',
            ComponentType.Container,
            new ResponsiveChildLayoutConfigModel(new ChildLayoutConfigModel(
              new HorizontalLayoutConfigPropsModel(
                AxisConfigType.Cross, true, false, CrossAxisHorizontalPositioningConfigType.Left,
                new WidthConfigModel(new FixedDimensioningConfigModel(
                  DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
                ), DynamicDimensionValueConfigType.NC),
                CrossAxisHorizontalLanesPositioningConfigType.Left),
              new VerticalLayoutConfigPropsModel(
                AxisConfigType.Main, undefined, false, MainAxisVerticalPositioningConfigType.Evenly,
                HeightValueConfigType.NC,
                CrossAxisVerticalLanesPositioningConfigType.NA)
            )),
            undefined,
            new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(
              new HeightConfigModel(
                new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC
              ),
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
              NoValueType.NA,['product', 'category'])),
            new ResponsiveVisibilityConfigModel(),
            undefined,
            [
              {
                name: 'fc3-radio-button-group', type: ComponentType.RadioButton,
                visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
                childLayout: new ResponsiveChildLayoutConfigModel(new ChildLayoutConfigModel(
                  new HorizontalLayoutConfigPropsModel(
                    AxisConfigType.Cross, true, false, CrossAxisHorizontalPositioningConfigType.Left,
                    new WidthConfigModel(new FixedDimensioningConfigModel(
                      DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
                    ), DynamicDimensionValueConfigType.NC),
                    CrossAxisHorizontalLanesPositioningConfigType.Left),
                  new VerticalLayoutConfigPropsModel(
                    AxisConfigType.Main, undefined, false, MainAxisVerticalPositioningConfigType.Evenly,
                    HeightValueConfigType.NC,
                    CrossAxisVerticalLanesPositioningConfigType.NA)
                ))
              }
            ],
            undefined,
            undefined
          ),
        ],
        undefined,
        undefined))
  ),
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
  dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(
    HeightValueConfigType.NC,
    new WidthConfigModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100
      , DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC)
  ))
}
