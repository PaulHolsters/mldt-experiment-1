import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {layout} from "./layout";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../../models/Dimensioning/self/DimensioningConfigPropsModel";
import {HeightConfigPropsModel} from "../../models/Dimensioning/self/HeightConfigPropsModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigPropsModel} from "../../models/Dimensioning/self/WidthConfigPropsModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {dataModel} from "./dataModel";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {
  ResponsiveContentInjectionConfigModel
} from "../../models/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ContentInjectionConfigPropsModel} from "../../models/ContentInjection/ContentInjectionConfigPropsModel";

export const formContainer = new ComponentModel(
  'form container - product edit',
  ComponentType.Container,
  layout,
  undefined,
  new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
    new HeightConfigPropsModel(
      new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC
    ),
    new WidthConfigPropsModel(new FixedDimensioningConfigModel(
      DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
    ), DynamicDimensionValueConfigType.NC)
  )),
  undefined,
  new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
  undefined,
  [
    new ComponentModel(
      'edit naam product - formcontrol',
      ComponentType.FormControl,
      undefined,
      undefined,
      undefined,
      undefined,
      new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
      undefined,
      undefined,
      undefined,
      undefined,
      new ResponsiveContentInjectionConfigModel(new ContentInjectionConfigPropsModel(
        NoValueType.NA,
        NoValueType.NA,
        new ComponentModel(
          'edit naam product cfc',
          ComponentType.Container,
          undefined,
          undefined,
          undefined,
          new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA,
            NoValueType.NA, NoValueType.NA, NoValueType.NA, false, NoValueType.NA, NoValueType.NA, ['product', 'name'])),
          new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
          undefined,
          [
            new ComponentModel(
              'ti - edit product',
              ComponentType.TextInput,
              undefined,
              undefined,
              undefined,
              undefined,
              new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
            )
          ]
        )
        ))
    ),
    new ComponentModel(
      'submit edited product btn',
      ComponentType.Button,
      undefined,
      undefined,
      undefined,
      new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA,
        'Product aanpassen')),
      new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
    )
  ],
  undefined,
  dataModel
)
