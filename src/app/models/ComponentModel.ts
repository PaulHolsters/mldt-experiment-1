import {ResponsiveAttributesConfigModel} from "./Attributes/ResponsiveAttributesConfigModel";
import {ResponsivePositioningConfigModel} from "./Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveDimensioningConfigModel} from "./Dimensioning/ResponsiveDimensioningConfigModel";
import {ComponentType} from "../enums/componentTypes.enum";
import {ResponsiveOverflowConfigModel} from "./Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "./Styling/ResponsiveStylingConfigModel";
export interface ComponentModel {
  name:string,
  type:ComponentType,
  position?:ResponsivePositioningConfigModel,
  dimensions?:ResponsiveDimensioningConfigModel,
  attributes?:ResponsiveAttributesConfigModel,
  visibility?:ResponsiveVisibilityConfigModel,
  overflow?:ResponsiveOverflowConfigModel,
  children?:(ComponentModel|string)[],
  styling?:ResponsiveStylingConfigModel,
}
// todo maak hier op termijn maar een class van
