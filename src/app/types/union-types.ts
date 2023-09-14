import {ResponsiveDimensioningConfigModel} from "../design-dimensions/Dimensioning/ResponsiveDimensioningConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveChildLayoutConfigModel} from "../design-dimensions/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ContainerModel} from "../components/container/ContainerModel";
import {ResponsiveTableConfigModel} from "../design-dimensions/component-specific-config/table/ResponsiveTableConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsivePositioningConfigModel} from "../design-dimensions/Positioning/ResponsivePositioningConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ResponsiveStylingConfigModel} from "../design-dimensions/Styling/ResponsiveStylingConfigModel";
import {
  ResponsiveDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {ResponsiveDataInputConfigModel} from "../design-dimensions/DataInput/ResponsiveDataInputConfigModel";
import {ResponsiveIconConfigModel} from "../design-dimensions/icon-config/ResponsiveIconConfigModel";
import {ResponsiveLabelConfigModel} from "../design-dimensions/label-config/ResponsiveLabelConfigModel";
import {
  ResponsiveComponentSpecificConfigModel
} from "../design-dimensions/component-specific-config/ResponsiveComponentSpecificConfigModel";

export type ResponsiveConfigModelType =
  ResponsiveDimensioningConfigModel |
  ResponsiveVisibilityConfigModel |
  ResponsiveChildLayoutConfigModel |
  ResponsiveIconConfigModel |
  ResponsiveLabelConfigModel |
  ResponsiveComponentSpecificConfigModel|

  ResponsiveOverflowConfigModel |
  ResponsivePositioningConfigModel |
  ResponsiveContentInjectionConfigModel |
  ResponsiveStylingConfigModel |
  ResponsiveDataRepresentationConfigModel |
  ResponsiveDataInputConfigModel

export type ComponentModelType = ContainerModel
