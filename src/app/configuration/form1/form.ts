import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveAttributesConfigModel} from "../../models/Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {formContainer} from "./formContainer";
import {ResponsiveOverflowConfigModel} from "../../models/Overflow/self/ResponsiveOverflowConfigModel";
import {OverflowConfigPropsModel} from "../../models/Overflow/self/OverflowConfigPropsModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
import {ResponsiveDimensioningConfigModel} from "../../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningConfigPropsModel} from "../../models/Dimensioning/self/DimensioningConfigPropsModel";
import {WidthValueConfigType} from "../../enums/WidthValueConfigTypes.enum";
import {HeightConfigPropsModel} from "../../models/Dimensioning/self/HeightConfigPropsModel";
import {FixedDimensioningConfigModel} from "../../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../../enums/dimensionUnitConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../../enums/DynamicDimensionValueConfigTypes.enum";
import {WidthConfigPropsModel} from "../../models/Dimensioning/self/WidthConfigPropsModel";

export const form = {
  // todo waarom is dit 100%?
  name: 'my first form',
  type: ComponentType.Form,
  attributes: new ResponsiveAttributesConfigModel(
    {
      content: formContainer
    }
  ),
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
  // todo hier moet een soort auto height of fit content height komen => de header doet maar raar
  // overflow:new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.Auto,OverflowValueConfigType.NC)),
  dimensions: new ResponsiveDimensioningConfigModel(
    new DimensioningConfigPropsModel(
      new HeightConfigPropsModel(new FixedDimensioningConfigModel(DimensionValueConfigType.Hardcoded,50,DimensionUnitConfigType.Percentage),DynamicDimensionValueConfigType.NC),
      new WidthConfigPropsModel(new FixedDimensioningConfigModel(
        DimensionValueConfigType.Hardcoded, 100, DimensionUnitConfigType.Percentage
      ), DynamicDimensionValueConfigType.NC)
    ))
}
