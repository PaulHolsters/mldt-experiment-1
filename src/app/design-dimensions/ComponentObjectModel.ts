import {ComponentType} from "../enums/componentTypes.enum";
import {ResponsiveContainerChildLayoutConfigModel} from "./Layout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ResponsiveLayoutOverrideConfigModel} from "./LayoutOverride/ResponsiveLayoutOverrideConfigModel";
import {ResponsiveSizeConfigModel} from "./Size/ResponsiveSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveOverflowConfigModel} from "./Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "./Styling/ResponsiveStylingConfigModel";
import {ComponentModel} from "./ComponentModel";
import {ResponsiveContentInjectionConfigModel} from "./ContentInjection/ResponsiveContentInjectionConfigModel";
import {ClientDataConfigModel} from "./ClientData/ClientDataConfigModel";
export interface ComponentObjectModel extends Object {
  name:string
  type:ComponentType
  childLayout?:ResponsiveContainerChildLayoutConfigModel
  position?:ResponsiveLayoutOverrideConfigModel
  dimensions?:ResponsiveSizeConfigModel
  visibility?:ResponsiveVisibilityConfigModel
  overflow?:ResponsiveOverflowConfigModel
  children?:(ComponentModel|ComponentObjectModel)[]
  styling?:ResponsiveStylingConfigModel,
  data?:ClientDataConfigModel|string[],
  contentInjection?:ResponsiveContentInjectionConfigModel
}
