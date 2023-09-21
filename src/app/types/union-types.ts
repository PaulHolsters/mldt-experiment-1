import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveContainerChildLayoutConfigModel} from "../design-dimensions/Layout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ContainerModel} from "../components/container/ContainerModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveLayoutOverrideConfigModel} from "../design-dimensions/LayoutOverride/ResponsiveLayoutOverrideConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ResponsiveStylingConfigModel} from "../design-dimensions/Styling/ResponsiveStylingConfigModel";
import {
  ResponsiveDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {ResponsiveDataInputConfigModel} from "../design-dimensions/DataInput/ResponsiveDataInputConfigModel";
import {
  ResponsiveComponentSpecificConfigModel
} from "../design-dimensions/component-specific-config/ResponsiveComponentSpecificConfigModel";
import {ResponsiveSpacingConfigModel} from "../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ResponsiveTableLayoutConfigModel} from "../design-dimensions/Layout/Table/ResponsiveTableLayoutConfigModel";

export type ResponsiveConfigModelType =
  ResponsiveSizeConfigModel |
  ResponsiveVisibilityConfigModel |
  ResponsiveComponentSpecificConfigModel|
  ResponsiveSpacingConfigModel|
  ResponsiveOverflowConfigModel |
  ResponsiveTableLayoutConfigModel|
  ResponsiveContainerChildLayoutConfigModel|
  ResponsiveLayoutOverrideConfigModel |
  ResponsiveContentInjectionConfigModel |
  ResponsiveStylingConfigModel |
  ResponsiveDataRepresentationConfigModel |
  ResponsiveDataInputConfigModel

export type ComponentModelType = ContainerModel
export type ScreenSizeType = 'smartphone'|'portraitTablet'|'tablet'|'laptop'|'high resolution'
