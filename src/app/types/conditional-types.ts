import {ChildLayoutRenderModel} from "../design-dimensions/Layout/Container/ChildLayoutRenderModel";
import {SizeRenderModel} from "../design-dimensions/Size/SizeRenderModel";
import {VisibilityRenderModel} from "../design-dimensions/Visibility/VisibilityRenderModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../design-dimensions/Visibility/VisibilityConfigModel";
import {ChildLayoutConfigModel} from "../design-dimensions/Layout/Container/ChildLayoutConfigModel";
import {
  ResponsiveContainerChildLayoutConfigModel
} from "../design-dimensions/Layout/Container/ResponsiveContainerChildLayoutConfigModel";
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
import {
  ResponsiveLayoutOverrideConfigModel
} from "../design-dimensions/LayoutOverride/ResponsiveLayoutOverrideConfigModel";
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
import {ResponsiveStylingConfigModel} from "../design-dimensions/Styling/ResponsiveStylingConfigModel";
import {StylingConfigModel} from "../design-dimensions/Styling/StylingConfigModel";
import {StylingRenderModel} from "../design-dimensions/Styling/StylingRenderModel";
import {ResponsiveSpacingConfigModel} from "../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {SpacingRenderModel} from "../design-dimensions/Spacing/SpacingRenderModel";
import {SpacingConfigModel} from "../design-dimensions/Spacing/SpacingConfigModel";
import {ResponsiveTableLayoutConfigModel} from "../design-dimensions/Layout/Table/ResponsiveTableLayoutConfigModel";
import {TableLayoutConfigModel} from "../design-dimensions/Layout/Table/TableLayoutConfigModel";
import {TableLayoutRenderModel} from "../design-dimensions/Layout/Table/TableLayoutRenderModel";
import {ResponsiveStructuralConfigModel} from "../design-dimensions/StructuralConfig/ResponsiveStructuralConfigModel";
import {ComponentStructuralConfigModelType, ComponentStructuralRenderModelType} from "./union-types";


/*export type StructuralConfigModelType<T> =
  T extends TableConfigModel ? TableConfigModel :
    T extends ImageConfigModel ? ImageConfigModel :
      T extends MenubarConfigModel ? MenubarConfigModel :
        T extends ConfirmPopupConfigModel ? ConfirmPopupConfigModel :
          T extends DialogConfigModel ? DialogConfigModel :
            T extends ButtonConfigModel ? ButtonConfigModel : never*/
/*
*
*
* */

export type ResponsiveConfigType<T> =
  T extends ResponsiveContainerChildLayoutConfigModel ? ResponsiveContainerChildLayoutConfigModel :
    T extends ResponsiveVisibilityConfigModel ? ResponsiveVisibilityConfigModel :
      T extends ResponsiveStructuralConfigModel ? ResponsiveStructuralConfigModel :
        T extends ResponsiveStylingConfigModel ? ResponsiveStylingConfigModel :
          T extends ResponsiveContentInjectionConfigModel ? ResponsiveContentInjectionConfigModel :
            T extends ResponsiveTableLayoutConfigModel ? ResponsiveTableLayoutConfigModel :
              T extends ResponsiveDataInputConfigModel ? ResponsiveDataInputConfigModel :
                T extends ResponsiveDataRepresentationConfigModel ? ResponsiveDataRepresentationConfigModel :
                  T extends ResponsiveOverflowConfigModel ? ResponsiveOverflowConfigModel :
                    T extends ResponsiveLayoutOverrideConfigModel ? ResponsiveLayoutOverrideConfigModel :
                      T extends ResponsiveSpacingConfigModel ? ResponsiveSpacingConfigModel :
                        T extends ResponsiveSizeConfigModel ? ResponsiveSizeConfigModel : never

export type ConfigType<T> =
  T extends ResponsiveContainerChildLayoutConfigModel ? ChildLayoutConfigModel :
    T extends ResponsiveVisibilityConfigModel ? VisibilityConfigModel :
      T extends ResponsiveStylingConfigModel ? StylingConfigModel :
        T extends ResponsiveContentInjectionConfigModel ? ContentInjectionConfigModel :
          T extends ResponsiveDataInputConfigModel ? DataInputConfigModel :
            T extends ResponsiveDataRepresentationConfigModel ? DataRepresentationConfigModel :
              T extends ResponsiveOverflowConfigModel ? OverflowConfigModel :
                T extends ResponsiveTableLayoutConfigModel ? TableLayoutConfigModel :
                  T extends ResponsiveLayoutOverrideConfigModel ? LayoutOverrideConfigModel :
                    T extends ResponsiveSpacingConfigModel ? SpacingConfigModel :
                      T extends ResponsiveStructuralConfigModel ? ComponentStructuralConfigModelType:
                        T extends ResponsiveSizeConfigModel ? SizeConfigModel : never;

export type RenderType<T> =
  T extends ResponsiveContainerChildLayoutConfigModel ? ChildLayoutRenderModel :
    T extends ResponsiveVisibilityConfigModel ? VisibilityRenderModel :
      T extends ResponsiveStructuralConfigModel ? ComponentStructuralRenderModelType :
        T extends ResponsiveStylingConfigModel ? StylingRenderModel :
          T extends ResponsiveContentInjectionConfigModel ? ContentInjectionRenderModel :
            T extends ResponsiveDataInputConfigModel ? DataInputRenderModel :
              T extends ResponsiveDataRepresentationConfigModel ? DataRepresentationRenderModel :
                T extends ResponsiveTableLayoutConfigModel ? TableLayoutRenderModel :
                  T extends ResponsiveOverflowConfigModel ? OverflowRenderModel :
                    T extends ResponsiveLayoutOverrideConfigModel ? LayoutOverrideRenderModel :
                      T extends ResponsiveSpacingConfigModel ? SpacingRenderModel :
                        T extends ResponsiveSizeConfigModel ? SizeRenderModel : never
