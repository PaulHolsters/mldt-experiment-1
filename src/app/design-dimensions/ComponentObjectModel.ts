import {ComponentType} from "../enums/componentTypes.enum";
import {ResponsiveSizeConfigModel} from "./Size/ResponsiveSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveOverflowConfigModel} from "./Overflow/ResponsiveOverflowConfigModel";
import {ComponentModel} from "./ComponentModel";
import {ClientDataConfigModel} from "./ClientData/ClientDataConfigModel";
import {
  ResponsiveContainerChildLayoutConfigModel
} from "./ComponentSpecificLayout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ResponsiveIndividualLayoutConfigModel} from "./IndividualLayout/ResponsiveIndividualLayoutConfigModel";

export interface ComponentObjectModel extends Object {
  name:string
  type:ComponentType
  childLayout?:ResponsiveContainerChildLayoutConfigModel
  position?:ResponsiveIndividualLayoutConfigModel
  dimensions?:ResponsiveSizeConfigModel
  visibility?:ResponsiveVisibilityConfigModel
  overflow?:ResponsiveOverflowConfigModel
  children?:(ComponentModel|ComponentObjectModel)[]
  data?:ClientDataConfigModel|string[],
}
