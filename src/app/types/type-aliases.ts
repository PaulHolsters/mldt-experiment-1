import {ResponsiveAttributesConfigModel} from "../models/Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveDimensioningConfigModel} from "../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {ResponsiveOverflowConfigModel} from "../models/Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "../models/Styling/ResponsiveStylingConfigModel";
import {ResponsivePositioningConfigModel} from "../models/Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveChildLayoutConfigModel} from "../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ResponsiveVisibilityConfigModel} from "../models/Visibility/ResponsiveVisibilityConfigModel";
import {DataRecordModel} from "../models/DataRecordModel";

export type ResponsiveConfigModel = ResponsiveAttributesConfigModel|ResponsiveDimensioningConfigModel
  |ResponsiveOverflowConfigModel|ResponsiveStylingConfigModel|
  ResponsivePositioningConfigModel|ResponsiveChildLayoutConfigModel|ResponsiveVisibilityConfigModel
export type RenderPropertyValueType = number|string|DataRecordModel|DataRecordModel[]|Date|boolean

