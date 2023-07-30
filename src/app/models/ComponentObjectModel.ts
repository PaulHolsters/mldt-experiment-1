import {ComponentType} from "../enums/componentTypes.enum";
import {ResponsiveChildLayoutConfigModel} from "./ChildLayout/ResponsiveChildLayoutConfigModel";
import {ResponsivePositioningConfigModel} from "./Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveDimensioningConfigModel} from "./Dimensioning/self/ResponsiveDimensioningConfigModel";
import {ResponsiveAttributesConfigModel} from "./Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveOverflowConfigModel} from "./Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "./Styling/ResponsiveStylingConfigModel";
import {ComponentModel} from "./ComponentModel";
import {ConceptConfigModel} from "./Data/ConceptConfigModel";
export interface ComponentObjectModel extends Object {
  name:string
  type:ComponentType
  childLayout?:ResponsiveChildLayoutConfigModel
  position?:ResponsivePositioningConfigModel
  dimensions?:ResponsiveDimensioningConfigModel
  attributes?:ResponsiveAttributesConfigModel
  visibility?:ResponsiveVisibilityConfigModel
  overflow?:ResponsiveOverflowConfigModel
  children?:(ComponentModel|ComponentObjectModel|string)[]
  styling?:ResponsiveStylingConfigModel,
  data?:ConceptConfigModel|string[]
}
