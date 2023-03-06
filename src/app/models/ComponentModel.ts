import {ResponsiveAttributesStateModel} from "./ResponsiveAttributesStateModel";
import {ResponsiveLayoutStateModel} from "./ResponsiveLayoutStateModel";
import {ResponsiveVisibilityStateModel} from "./ResponsiveVisibilityStateModel";

export interface ComponentModel {
  name:string,
  type:string,
  layoutState:ResponsiveLayoutStateModel,
  attributesState?:ResponsiveAttributesStateModel,
  visibilityState?:ResponsiveVisibilityStateModel
}
