import {ComponentModel} from "../../models/ComponentModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../../models/Dimensioning/self/DimensioningConfigPropsModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigPropsModel} from "../../models/Dimensioning/self/WidthConfigPropsModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {HeightConfigPropsModel} from "../../models/Dimensioning/self/HeightConfigPropsModel";
import {containerLayout} from "./containerLayout";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";

export const deleteContainer = new ComponentModel(
  'delete-container',
  ComponentType.Container,
  containerLayout,
  undefined,
  new ResponsiveDimensioningConfigModel(new DimensioningConfigPropsModel(
    new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage), DynamicDimensionValueConfigType.NC),
    new WidthConfigPropsModel(new FixedDimensioningConfigModel(
      DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
    ), DynamicDimensionValueConfigType.NC)
  )),
  new ResponsiveAttributesConfigModel(
    new AttributesConfigPropsModel(NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,
      NoValueType.NA,NoValueType.NA,false,NoValueType.NA,NoValueType.NA,NoValueType.NA,['product', 'id'])),
  new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
  undefined,
  [
    {
      name: 'id-text-field',
      type: ComponentType.TextInput,
      visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
    },
    {
      name: 'delete-btn',
      type: ComponentType.Button,
      attributes: new ResponsiveAttributesConfigModel(
        new AttributesConfigPropsModel(NoValueType.NA,NoValueType.NA,NoValueType.NA,NoValueType.NA,'Verwijder product',
          NoValueType.NA,NoValueType.NA,NoValueType.NA,false,NoValueType.NA)),
      visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel())
    }
  ],
  undefined,
 undefined
)
