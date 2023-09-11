import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {WidthConfigModel} from "../../models/Dimensioning/WidthConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/NonCalculatedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/ResponsiveDimensioningConfigModel";
import {DimensioningConfigModel} from "../../models/Dimensioning/DimensioningConfigModel";
import {HeightConfigModel} from "../../models/Dimensioning/HeightConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/VisibilityConfigModel";
import {formContainer2} from "./formContainer2";
import {ResponsiveOverflowConfigModel} from "../../models/Overflow/self/ResponsiveOverflowConfigModel";
import {OverflowConfigPropsModel} from "../../models/Overflow/self/OverflowConfigPropsModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
export const form2 = {
  name: 'my 2e form',
  type: ComponentType.Form,
  attributes: new ResponsiveAttributesConfigModel(
    {
      content: formContainer2
    }
  ),
  overflow: new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.NA, OverflowValueConfigType.Auto)),
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
  dimensions: new ResponsiveDimensioningConfigModel(new DimensioningConfigModel(
    new HeightConfigModel(
      new FixedDimensioningConfigModel(DimensionValueConfigType.Calculated, '90vh - 150px'),
      DynamicDimensionValueConfigType.NC
    ),
    new WidthConfigModel(new FixedDimensioningConfigModel(
      DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
    ), DynamicDimensionValueConfigType.NC)
  ))
}
