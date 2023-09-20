import {ComponentType} from "../enums/componentTypes.enum";
import {ResponsiveContainerChildLayoutConfigModel} from "./Layout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ResponsiveLayoutOverrideConfigModel} from "./LayoutOverride/ResponsiveLayoutOverrideConfigModel";
import {ResponsiveSizeConfigModel} from "./Size/ResponsiveSizeConfigModel";
import {ResponsiveTableConfigModel} from "./component-specific-config/table/ResponsiveTableConfigModel";
import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveOverflowConfigModel} from "./Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "./Styling/ResponsiveStylingConfigModel";
import {ComponentModel} from "./ComponentModel";
import {ClientDataConfigModel} from "./Data/ClientDataConfigModel";
import {ResponsiveContentInjectionConfigModel} from "./ContentInjection/ResponsiveContentInjectionConfigModel";
export interface ComponentObjectModel extends Object {
  name:string
  type:ComponentType
  childLayout?:ResponsiveContainerChildLayoutConfigModel
  position?:ResponsiveLayoutOverrideConfigModel
  dimensions?:ResponsiveSizeConfigModel
  attributes?:ResponsiveTableConfigModel
  visibility?:ResponsiveVisibilityConfigModel
  overflow?:ResponsiveOverflowConfigModel
  children?:(ComponentModel|ComponentObjectModel)[]
  styling?:ResponsiveStylingConfigModel,
  data?:ClientDataConfigModel|string[],
  contentInjection?:ResponsiveContentInjectionConfigModel
}
