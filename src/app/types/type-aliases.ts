import {ResponsiveAttributesConfigModel} from "../models/Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveDimensioningConfigModel} from "../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {ResponsiveOverflowConfigModel} from "../models/Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "../models/Styling/ResponsiveStylingConfigModel";
import {ResponsivePositioningConfigModel} from "../models/Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveChildLayoutConfigModel} from "../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ResponsiveVisibilityConfigModel} from "../models/Visibility/ResponsiveVisibilityConfigModel";

export type ResponsiveConfigModel = ResponsiveAttributesConfigModel|ResponsiveDimensioningConfigModel
  |ResponsiveOverflowConfigModel|ResponsiveStylingConfigModel|
  ResponsivePositioningConfigModel|ResponsiveChildLayoutConfigModel|ResponsiveVisibilityConfigModel
export type ConceptNameType = string
export type ComponentNameType = string
export type ActionIdType = string
export type TriggerIdType = string
export type EffectIdType = string



