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
import {CrossAxisVerticalLanesPositioningConfigType} from "../../enums/rowPositioningConfigTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../../models/Dimensioning/self/DimensioningConfigPropsModel";
import {HeightConfigPropsModel} from "../../models/Dimensioning/self/HeightConfigPropsModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
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
              new WidthConfigPropsModel(new FixedDimensioningConfigModel(
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
        new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
          HeightValueConfigType.NC,
          new WidthConfigPropsModel(new FixedDimensioningConfigModel(
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
          new VisibilityConfigPropsModel()),
        undefined,
        [
          {
            // dit is niet nodig als je kiest voor een float label natuurlijk dan moet hier enkel een input komen en
            // in dat geval heb je ook geen extra container nodig => jawel daar zit de data in
            name: 'fc3-label',
            type: ComponentType.Label,
            visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
          },
          new ComponentModel(
            'radio-button-container',
            ComponentType.Container,
            new ResponsiveChildLayoutConfigModel(new ChildLayoutConfigModel(
              new HorizontalLayoutConfigPropsModel(
                AxisConfigType.Cross, true, false, CrossAxisHorizontalPositioningConfigType.Left,
                new WidthConfigPropsModel(new FixedDimensioningConfigModel(
                  DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
                ), DynamicDimensionValueConfigType.NC),
                CrossAxisHorizontalLanesPositioningConfigType.Left),
              new VerticalLayoutConfigPropsModel(
                AxisConfigType.Main, undefined, false, MainAxisVerticalPositioningConfigType.Evenly,
                HeightValueConfigType.NC,
                CrossAxisVerticalLanesPositioningConfigType.NA)
            )),
            undefined,
            new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
              new HeightConfigPropsModel(
                new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC
              ),
              new WidthConfigPropsModel(new FixedDimensioningConfigModel(
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
                visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
                childLayout: new ResponsiveChildLayoutConfigModel(new ChildLayoutConfigModel(
                  new HorizontalLayoutConfigPropsModel(
                    AxisConfigType.Cross, true, false, CrossAxisHorizontalPositioningConfigType.Left,
                    new WidthConfigPropsModel(new FixedDimensioningConfigModel(
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
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
  dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
    HeightValueConfigType.NC,
    new WidthConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100
      , DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC)
  ))
}
