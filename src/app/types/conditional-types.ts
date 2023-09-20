import {ChildLayoutRenderModel} from "../design-dimensions/Layout/Container/ChildLayoutRenderModel";
import {SizeRenderModel} from "../design-dimensions/Size/SizeRenderModel";
import {VisibilityRenderModel} from "../design-dimensions/Visibility/VisibilityRenderModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../design-dimensions/Visibility/VisibilityConfigModel";
import {ChildLayoutConfigModel} from "../design-dimensions/Layout/Container/ChildLayoutConfigModel";
import {ResponsiveContainerChildLayoutConfigModel} from "../design-dimensions/Layout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {SizeConfigModel} from "../design-dimensions/Size/SizeConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ResponsiveDataInputConfigModel} from "../design-dimensions/DataInput/ResponsiveDataInputConfigModel";
import {
  ResponsiveDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveLayoutOverrideConfigModel} from "../design-dimensions/LayoutOverride/ResponsiveLayoutOverrideConfigModel";
import {DataRepresentationConfigModel} from "../design-dimensions/DataRepresentation/DataRepresentationConfigModel";
import {DataInputConfigModel} from "../design-dimensions/DataInput/DataInputConfigModel";
import {ContentInjectionConfigModel} from "../design-dimensions/ContentInjection/ContentInjectionConfigModel";
import {OverflowConfigModel} from "../design-dimensions/Overflow/OverflowConfigModel";
import {LayoutOverrideConfigModel} from "../design-dimensions/LayoutOverride/LayoutOverrideConfigModel";
import {ContentInjectionRenderModel} from "../design-dimensions/ContentInjection/ContentInjectionRenderModel";
import {OverflowRenderModel} from "../design-dimensions/Overflow/OverflowRenderModel";
import {DataRepresentationRenderModel} from "../design-dimensions/DataRepresentation/DataRepresentationRenderModel";
import {LayoutOverrideRenderModel} from "../design-dimensions/LayoutOverride/LayoutOverrideRenderModel";
import {DataInputRenderModel} from "../design-dimensions/DataInput/DataInputRenderModel";
import {ResponsiveIconConfigModel} from "../design-dimensions/icon-config/ResponsiveIconConfigModel";
import {IconConfigModel} from "../design-dimensions/icon-config/IconConfigModel";
import {IconRenderModel} from "../design-dimensions/icon-config/IconRenderModel";
import {ResponsiveLabelConfigModel} from "../design-dimensions/label-config/ResponsiveLabelConfigModel";
import {LabelConfigModel} from "../design-dimensions/label-config/LabelConfigModel";
import {LabelRenderModel} from "../design-dimensions/label-config/LabelRenderModel";
import {
  ResponsiveComponentSpecificConfigModel
} from "../design-dimensions/component-specific-config/ResponsiveComponentSpecificConfigModel";
import {
  ComponentSpecificRenderModel
} from "../design-dimensions/component-specific-config/ComponentSpecificRenderModel";

export type ResponsiveConfigType<T> =
  T extends ResponsiveContainerChildLayoutConfigModel ? ResponsiveContainerChildLayoutConfigModel :
    T extends ResponsiveVisibilityConfigModel ? ResponsiveVisibilityConfigModel :
                T extends ResponsiveIconConfigModel ? ResponsiveIconConfigModel :
                  T extends ResponsiveLabelConfigModel ? ResponsiveLabelConfigModel :
                    T extends ResponsiveComponentSpecificConfigModel ? ResponsiveComponentSpecificConfigModel :

        T extends ResponsiveContentInjectionConfigModel ? ResponsiveContentInjectionConfigModel :
          T extends ResponsiveDataInputConfigModel ? ResponsiveDataInputConfigModel :
            T extends ResponsiveDataRepresentationConfigModel ? ResponsiveDataRepresentationConfigModel :
              T extends ResponsiveOverflowConfigModel ? ResponsiveOverflowConfigModel :
                T extends ResponsiveLayoutOverrideConfigModel ? ResponsiveLayoutOverrideConfigModel :
                  T extends ResponsiveSizeConfigModel ? ResponsiveSizeConfigModel : never

export type ConfigType<T> =
  T extends ResponsiveContainerChildLayoutConfigModel ? ChildLayoutConfigModel :
    T extends ResponsiveVisibilityConfigModel ? VisibilityConfigModel :
                T extends ResponsiveIconConfigModel ? IconConfigModel :
                  T extends ResponsiveLabelConfigModel ? LabelConfigModel :

        T extends ResponsiveContentInjectionConfigModel ? ContentInjectionConfigModel :
          T extends ResponsiveDataInputConfigModel ? DataInputConfigModel :
            T extends ResponsiveDataRepresentationConfigModel ? DataRepresentationConfigModel :
              T extends ResponsiveOverflowConfigModel ? OverflowConfigModel :
                T extends ResponsiveLayoutOverrideConfigModel ? LayoutOverrideConfigModel :
                  T extends ResponsiveSizeConfigModel ? SizeConfigModel : never;

export type RenderType<T> =
  T extends ResponsiveContainerChildLayoutConfigModel ? ChildLayoutRenderModel :
    T extends ResponsiveVisibilityConfigModel ? VisibilityRenderModel :
                T extends ResponsiveIconConfigModel ? IconRenderModel :
                  T extends ResponsiveLabelConfigModel ? LabelRenderModel :
                    T extends ResponsiveComponentSpecificConfigModel ? ComponentSpecificRenderModel :

        T extends ResponsiveContentInjectionConfigModel ? ContentInjectionRenderModel :
          T extends ResponsiveDataInputConfigModel ? DataInputRenderModel :
            T extends ResponsiveDataRepresentationConfigModel ? DataRepresentationRenderModel :
              T extends ResponsiveOverflowConfigModel ? OverflowRenderModel :
                T extends ResponsiveLayoutOverrideConfigModel ? LayoutOverrideRenderModel :
                  T extends ResponsiveSizeConfigModel ? SizeRenderModel : never
