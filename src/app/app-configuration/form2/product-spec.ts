import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
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

export const productSpec = {
  name: 'fc-product-spec',
  type: ComponentType.FormControl,
  attributes: new ResponsiveAttributesConfigModel(
    {
      content: new ComponentModel(
        'fc1-p-s-container',
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
          new HeightConfigModel(
            new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC
          ),
          new WidthConfigModel(new FixedDimensioningConfigModel(
            DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
          ), DynamicDimensionValueConfigType.NC)
        )),
        new ResponsiveAttributesConfigModel({
          dataLink: ['specification', 'name']
        }),
        new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
        undefined,
        [{
          // dit is niet nodig als je kiest voor een float label natuurlijk dan moet hier enkel een input komen en
          // in dat geval heb je ook geen extra container nodig => jawel daar zit de data in
          name: 'fc1-p-s-label',
          type: ComponentType.Label,
          visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
        }, {
          name: 'fc1-input-p-s', type: ComponentType.InputText,
          visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel())
        }],
        undefined,
        undefined),

    }
  ),
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel())
  ,
  // todo zorg dat er constraints komen die errors geven bv als je height en width in je config omwisselt!
  dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(
    new HeightConfigModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,220
      ,DimensionUnitConfigType.PX),DynamicDimensionValueConfigType.NC),
    new WidthConfigModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,100
      ,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC)
  ))
}
