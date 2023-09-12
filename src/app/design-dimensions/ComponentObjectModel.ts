import {ComponentType} from "../enums/componentTypes.enum";
import {ResponsiveChildLayoutConfigModel} from "./ChildLayout/ResponsiveChildLayoutConfigModel";
import {ResponsivePositioningConfigModel} from "./Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveDimensioningConfigModel} from "./Dimensioning/ResponsiveDimensioningConfigModel";
import {ResponsiveTableConfigModel} from "./component-specific-config/table/ResponsiveTableConfigModel";
import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveOverflowConfigModel} from "./Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "./Styling/ResponsiveStylingConfigModel";
import {ComponentModel} from "./ComponentModel";
import {ClientDataConfigModel} from "./Data/ClientDataConfigModel";
import {ResponsiveContentInjectionConfigModel} from "./ContentInjection/ResponsiveContentInjectionConfigModel";
export interface ComponentObjectModel extends Object {
  name:string
  type:ComponentType
  childLayout?:ResponsiveChildLayoutConfigModel
  position?:ResponsivePositioningConfigModel
  dimensions?:ResponsiveDimensioningConfigModel
  attributes?:ResponsiveTableConfigModel
  visibility?:ResponsiveVisibilityConfigModel
  overflow?:ResponsiveOverflowConfigModel
  children?:(ComponentModel|ComponentObjectModel)[]
  styling?:ResponsiveStylingConfigModel,
  data?:ClientDataConfigModel|string[],
  contentInjection?:ResponsiveContentInjectionConfigModel
}
