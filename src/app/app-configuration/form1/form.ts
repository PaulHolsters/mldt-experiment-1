import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../../models/Visibility/VisibilityConfigModel";
import {formContainer} from "./formContainer";
import {ResponsiveOverflowConfigModel} from "../../models/Overflow/self/ResponsiveOverflowConfigModel";
import {OverflowConfigPropsModel} from "../../models/Overflow/self/OverflowConfigPropsModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/ResponsiveDimensioningConfigModel";
import {DimensioningConfigModel} from "../../models/Dimensioning/DimensioningConfigModel";
import {HeightConfigModel} from "../../models/Dimensioning/HeightConfigModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/NonCalculatedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigModel} from "../../models/Dimensioning/WidthConfigModel";
import {AttributesConfigPropsModel} from "../../models/Attributes/AttributesConfigPropsModel";
import {NoValueType} from "../../enums/no_value_type";

export const form = {
  name: 'my first form',
  type: ComponentType.Form,
  attributes: new ResponsiveAttributesConfigModel(new AttributesConfigPropsModel(NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA, NoValueType.NA,NoValueType.NA,
    NoValueType.NA, NoValueType.NA, NoValueType.NA,formContainer )
  ),
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigModel()),
  // todo verhinderen dat gebruikers een kleine hoogte kunnen meegeven terwijl auto niet opstaat omdat de multiselect dan niet werkt
  overflow:new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.Auto,OverflowValueConfigType.NC)),
  dimensions: new ResponsiveDimensioningConfigModel(
    new DimensioningConfigModel(
      new HeightConfigModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,20,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC),
      new WidthConfigModel(new FixedDimensioningConfigModel(
        DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
      ), DynamicDimensionValueConfigType.NC)
    ))
}
