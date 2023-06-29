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
import {HeightValueConfigType} from "../../enums/HeightValueConfigTypes.enum";
import {WidthValueConfigType} from "../../enums/WidthValueConfigTypes.enum";
export const form = {
  // todo waarom is dit 100%?
  name: 'my first form',
  type: ComponentType.Form,
  attributes: new ResponsiveAttributesConfigModel(
    {
      content: formContainer
    }
  ),
  overflow: new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.NA, OverflowValueConfigType.Auto)),
  visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
  // todo hier moet een soort auto height of fit content height komen => de header doet maar raar
  dimensions: new ResponsiveDimensioningConfigModel(
    new DimensioningConfigPropsModel(
      HeightValueConfigType.NC,
      WidthValueConfigType.Parent
    ))
}
