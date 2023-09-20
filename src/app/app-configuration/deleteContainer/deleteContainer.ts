import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Size/ResponsiveSizeConfigModel";
import {DimensioningConfigModel} from "../../models/Size/ButtonSizeConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Size/NonCalculatedSizeConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigModel} from "../../models/Size/WidthConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveSpacingConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/SpacingConfigModel";
import {HeightConfigModel} from "../../models/Size/HeightConfigModel";
import {containerLayout} from "./containerLayout";
import {ResponsiveAttributesConfigModel} from "../../models/component-specific-config/ResponsiveTableConfigModel";
import {AttributesConfigPropsModel} from "../../models/component-specific-config/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";

export const deleteContainer = new ComponentModel(
  'delete-container',
  ComponentType.Container,
  containerLayout,
  undefined,
  new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(
    new HeightConfigModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC),
    new WidthConfigModel(new FixedDimensioningConfigModel(
      DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
    ), DynamicDimensionValueConfigType.NC)
  )),
  new ResponsiveAttributesConfigModel(
    new AttributesConfigPropsModel(NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
      NoValueType.NA,NoValueType.NA,false,NoValueType.NA,NoValueType.NA,NoValueType.NA,['product', 'id'])),
  new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
  undefined,
  [
    {
      name: 'id-text-field',
      type: ComponentType.TextInput,
      visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
    },
    {
      name: 'delete-btn',
      type: ComponentType.Button,
      attributes: new ResponsiveAttributesConfigModel(
        new AttributesConfigPropsModel(NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,'Verwijder product',
          NoValueType.NA,NoValueType.NA,NoValueType.NA,false,NoValueType.NA)),
      visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel())
    }
  ],
  undefined,
 undefined
)
