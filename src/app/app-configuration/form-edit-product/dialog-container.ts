import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {childLayout} from "./childLayout";
import {ResponsiveDimensioningConfigModel} from "../../models/Size/ResponsiveSizeConfigModel";
import {DimensioningConfigModel} from "../../models/Size/ButtonSizeConfigModel";
import {HeightConfigModel} from "../../models/Size/HeightConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Size/NonCalculatedSizeConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigModel} from "../../models/Size/WidthConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveSpacingConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/SpacingConfigModel";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {AttributesConfigPropsModel} from "../../models/component-specific-config/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";
import {ClientDataConfigModel} from "../../models/Data/ClientDataConfigModel";

export const dialogContainer = new ComponentModel(
  'edit-product-container',
  ComponentType.Container,
  childLayout,
  undefined,
  new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(
    new HeightConfigModel(
      new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC
    ),
    new WidthConfigModel(new FixedDimensioningConfigModel(
      DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
    ), DynamicDimensionValueConfigType.NC)
  )),
  undefined,
  new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
  undefined,
  [
            new ComponentModel(
              'edit-product-text-input',
              ComponentType.TextInput,
              undefined,
              undefined,
              undefined,
              undefined,
              new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
              undefined,
              undefined,
              undefined,
              new ClientDataConfigModel('create_client_data',['product','name'])
              // todo datarepresentatie zoals input filtering is nog niet geïmplementeerd
            ),
    new ComponentModel(
      'edit-product-submit-btn',
      ComponentType.Button,
      undefined,
      undefined,
      undefined,
      new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA,
        'Product aanpassen')),
      new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
    )
  ]
)
