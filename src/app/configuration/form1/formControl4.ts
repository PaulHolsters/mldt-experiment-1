import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {ComponentModel} from "../../models/ComponentModel";
import {ResponsiveChildLayoutConfigModel} from "../../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ChildLayoutConfigPropsModel} from "../../models/ChildLayout/ChildLayoutConfigPropsModel";
import {HorizontalLayoutConfigPropsModel} from "../../models/ChildLayout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "../../enums/axisConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../../enums/crossAxisHorizontalPositioningConfigTypes.enum";
import {WidthConfigPropsModel} from "../../models/Dimensioning/self/WidthConfigPropsModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "../../enums/crossAxisHorizontalLanesPositioningConfigTypes.enum";
import {VerticalLayoutConfigPropsModel} from "../../models/ChildLayout/VerticalLayoutConfigPropsModel";
import {MainAxisVerticalPositioningConfigType} from "../../enums/mainAxisVerticalPositioningConfigTypes.enum";
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {
  CrossAxisVerticalLanesPositioningConfigType
} from "../../enums/crossAxisVerticalLanesPositioningConfigTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../../models/Dimensioning/self/DimensioningConfigPropsModel";
import {HeightConfigPropsModel} from "../../models/Dimensioning/self/HeightConfigPropsModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {ConceptConfigModel} from "../../models/Data/ConceptConfigModel";
import {AttributeConfigModel} from "../../models/Data/AttributeConfigModel";
import {NoValueType} from "../../enums/no_value_type";
import {MultiSelectAttributeConfigModel} from "../../models/Data/MultiSelectAttributeConfigModel";
import {TextAttributeConfigModel} from "../../models/Data/TextAttributeConfigModel";
import {RestrictionType} from "../../enums/restrictionType.enum";
import {IconType} from "../../enums/iconType.enum";
import {IconPositionType} from "../../enums/iconPositionType.enum";
import {InputFontSizeType} from "../../enums/inputFontSizeType.enum";

export const formControl4 = {
  name: 'formcontrol4',
  type: ComponentType.FormControl,
  attributes: new ResponsiveAttributesConfigModel(
    {
      content: new ComponentModel(
        'fc4-container',
        ComponentType.Container,
        new ResponsiveChildLayoutConfigModel(
          new ChildLayoutConfigPropsModel(
            // todo zorg voor default layout bij een container voor simpele gevallen
            new HorizontalLayoutConfigPropsModel(
              AxisConfigType.Cross, true, false, CrossAxisHorizontalPositioningConfigType.Center,
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
          new HeightConfigPropsModel(
            new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC
          ),
          new WidthConfigPropsModel(new FixedDimensioningConfigModel(
            DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
          ), DynamicDimensionValueConfigType.NC)
        )),
        new ResponsiveAttributesConfigModel({
          dataLink: ['product', 'specifications']
        }),
        new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
        undefined,
        [{
          // dit is niet nodig als je kiest voor een float label natuurlijk dan moet hier enkel een input komen en
          // in dat geval heb je ook geen extra container nodig => jawel daar zit de data in
          name: 'fc4-label',
          type: ComponentType.Label,
          visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
        }, {
          name: 'fc4-multiselect', type: ComponentType.MultiSelect,
          visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel())
        }],
        undefined,
        new ConceptConfigModel('specification', [
          new AttributeConfigModel(
            'specifications',
            undefined,
            false,
            NoValueType.NA,
            undefined,
            undefined,
            undefined,
            // todo ervoor zorgen dat je voor optionLabel ook een datamanipulatie kan doen
            new MultiSelectAttributeConfigModel(NoValueType.DBI, NoValueType.DBI, undefined, 'name'),
            new ConceptConfigModel('specification', [
              new AttributeConfigModel(
                'name',
                undefined,
                false,
                false,
                new TextAttributeConfigModel(RestrictionType.Alphanumeric, RestrictionType.NA, IconType.Check, IconPositionType.Left,
                  InputFontSizeType.Large, NoValueType.NVY),
                undefined, undefined, undefined, undefined, 'Specificatie', 'Geef een adequate naam'
              )
            ]),
            'Product specificaties',
            'Selecteer alle eigenschappen van toepassing op het product'
          )]
        )
      ),
    }
  ),
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel())
  ,
  // todo zorg dat er constraints komen die errors geven bv als je height en width in je config omwisselt!
  dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
    new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 220
      , DimensionUnitConfigType.PX), DynamicDimensionValueConfigType.NC),
    new WidthConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100
      , DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC)
  ))
}
