import {ResponsiveAttributesConfigModel} from "./Attributes/ResponsiveAttributesConfigModel";
import {ResponsivePositioningConfigModel} from "./Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveChildPositioningConfigModel} from "./Positioning/children/ResponsiveChildPositioningConfigModel";
import {ResponsiveVisibilityConfigModel} from "./Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveDimensioningConfigModel} from "./Dimensioning/ResponsiveDimensioningConfigModel";
import {ResponsiveChildDimensioningConfigModel} from "./Dimensioning/children/ResponsiveChildDimensioningConfigModel";
import {ComponentType} from "../enums/componentTypes.enum";
export interface ComponentModel {
  name:string,
  type:ComponentType,
  positioningState:ResponsivePositioningConfigModel,
  dimensioningState:ResponsiveDimensioningConfigModel,
  childPositioningState:ResponsiveChildPositioningConfigModel,
  childDimensioningState:ResponsiveChildDimensioningConfigModel,
  attributesState?:ResponsiveAttributesConfigModel,
  visibilityState?:ResponsiveVisibilityConfigModel
}
