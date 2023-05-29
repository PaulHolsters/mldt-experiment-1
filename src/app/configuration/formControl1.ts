import {ComponentType} from "../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../models/Attributes/ResponsiveAttributesConfigModel";
import {ComponentModel} from "../models/ComponentModel";
import {ResponsiveChildLayoutConfigModel} from "../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ChildLayoutConfigPropsModel} from "../models/ChildLayout/ChildLayoutConfigPropsModel";
import {HorizontalLayoutConfigPropsModel} from "../models/ChildLayout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "../enums/axisConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../enums/crossAxisHorizontalPositioningConfigTypes.enum";
import {WidthConfigPropsModel} from "../models/Dimensioning/self/WidthConfigPropsModel";
import {FixedDimensioningConfigModel} from "../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../enums/DynamicDimensionValueConfigTypes.enum";
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "../enums/crossAxisHorizontalLanesPositioningConfigTypes.enum";
import {VerticalLayoutConfigPropsModel} from "../models/ChildLayout/VerticalLayoutConfigPropsModel";
import {MainAxisVerticalPositioningConfigType} from "../enums/mainAxisVerticalPositioningConfigTypes.enum";
import {HeightValueConfigType} from "../enums/HeightValueConfigTypes.enum";
import {CrossAxisVerticalLanesPositioningConfigType} from "../enums/crossAxisVerticalLanesPositioningConfigTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../models/Dimensioning/self/DimensioningConfigPropsModel";
import {HeightConfigPropsModel} from "../models/Dimensioning/self/HeightConfigPropsModel";
import {ResponsiveVisibilityConfigModel} from "../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../models/Visibility/VisibilityConfigPropsModel";

export const formControl1 = {
  name: 'formcontrol1',
  type: ComponentType.FormControl,
  attributes: new ResponsiveAttributesConfigModel(
    {
      content: new ComponentModel(
        'fc1-container',
        ComponentType.Container,
        new ResponsiveChildLayoutConfigModel(
          new ChildLayoutConfigPropsModel(
            // todo zorg voor default layout bij een container voor simpele gevallen
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
          new HeightConfigPropsModel(
            new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC
          ),
          new WidthConfigPropsModel(new FixedDimensioningConfigModel(
            DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
          ), DynamicDimensionValueConfigType.NC)
        )), new ResponsiveAttributesConfigModel({
          dataLink: ['product', 'name']
        }),
        new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()), undefined,
        [{
          // dit is niet nodig als je kiest voor een float label natuurlijk dan moet hier enkel een input komen en
          // in dat geval heb je ook geen extra container nodig => jawel daar zit de data in
          name: 'fc1-label',
          type: ComponentType.Label,
          visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
        }, {
          name: 'fc1-input', type: ComponentType.InputText,
          visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel())
        }], undefined, undefined),

    }
  ),
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel())
  ,
  // todo zorg dat er constraints komen die errors geven bv als je ehight en width in je config omwisselt!
  dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
    new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,220
      ,DimensionUnitConfigType.PX),DynamicDimensionValueConfigType.NC),
    new WidthConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,100
      ,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC)
  ))
}
