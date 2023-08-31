import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {childLayout} from "./childLayout";
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
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {ClientDataConfigModel} from "../../models/Data/ClientDataConfigModel";

export const dialogContainer = new ComponentModel(
  'edit-product-container',
  ComponentType.Container,
  childLayout,
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
              'edit-product-text-input',
              ComponentType.TextInput,
              undefined,
              undefined,
              undefined,
              undefined,
              new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
              undefined,
              undefined,
              undefined,
              new ClientDataConfigModel('create_client_data',['product','name'])
            ),
    new ComponentModel(
      'edit-product-submit-btn',
      ComponentType.Button,
      undefined,
      undefined,
      undefined,
      new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA,
        'Product aanpassen')),
      new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
    )
  ]
)
