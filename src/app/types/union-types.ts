import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveContainerChildLayoutConfigModel} from "../design-dimensions/Layout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ContainerModel} from "../components/container/ContainerModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
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
  ResponsiveSizeConfigModel |
  ResponsiveVisibilityConfigModel |
  ResponsiveContainerChildLayoutConfigModel |
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
