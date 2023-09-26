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
import {
  ResponsiveStructuralButtonConfigModel
} from "../design-dimensions/StructuralConfig/button/ResponsiveStructuralButtonConfigModel";
import {ButtonConfigModel} from "../design-dimensions/StructuralConfig/button/ButtonConfigModel";
import {ButtonRenderModel} from "../design-dimensions/StructuralConfig/button/ButtonRenderModel";
import {TableConfigModel} from "../design-dimensions/StructuralConfig/table/TableConfigModel";
import {ConfirmPopupConfigModel} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmPopupConfigModel";
import {MenubarConfigModel} from "../design-dimensions/StructuralConfig/menubar/MenubarConfigModel";
import {
  ResponsiveStructuralImageConfigModel
} from "../design-dimensions/StructuralConfig/image/ResponsiveStructuralImageConfigModel";
import {
  ResponsiveStructuralConfirmPopupConfigModel
} from "../design-dimensions/StructuralConfig/confirm-popup/ResponsiveStructuralConfirmPopupConfigModel";
import {
  ResponsiveStructuralDialogConfigModel
} from "../design-dimensions/StructuralConfig/dialog/ResponsiveStructuralDialogConfigModel";
import {
  ResponsiveStructuralTableConfigModel
} from "../design-dimensions/StructuralConfig/table/ResponsiveStructuralTableConfigModel";
import {DialogConfigModel} from "../design-dimensions/StructuralConfig/dialog/DialogConfigModel";
import {ImageConfigModel} from "../design-dimensions/StructuralConfig/image/ImageConfigModel";
import {
  ResponsiveStructuralMenubarConfigModel
} from "../design-dimensions/StructuralConfig/menubar/ResponsiveStructuralMenubarConfigModel";
import {MenubarRenderModel} from "../design-dimensions/StructuralConfig/menubar/MenubarRenderModel";
import {ImageRenderModel} from "../design-dimensions/StructuralConfig/image/ImageRenderModel";
import {DialogRenderModel} from "../design-dimensions/StructuralConfig/dialog/DialogRenderModel";
import {ConfirmPopupRenderModel} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmPopupRenderModel";
import {TableRenderModel} from "../design-dimensions/StructuralConfig/table/TableRenderModel";

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
                      T extends ResponsiveStructuralButtonConfigModel ? ButtonConfigModel:
                        T extends ResponsiveStructuralDialogConfigModel ? DialogConfigModel:
                          T extends ResponsiveStructuralImageConfigModel ? ImageConfigModel:
                            T extends ResponsiveStructuralMenubarConfigModel ? MenubarConfigModel:
                              T extends ResponsiveStructuralTableConfigModel ? TableConfigModel:
                                T extends ResponsiveStructuralConfirmPopupConfigModel ? ConfirmPopupConfigModel:
                        T extends ResponsiveSizeConfigModel ? SizeConfigModel : never;

export type RenderType<T> =
  T extends ResponsiveContainerChildLayoutConfigModel ? ChildLayoutRenderModel :
    T extends ResponsiveVisibilityConfigModel ? VisibilityRenderModel :
      T extends ResponsiveStructuralButtonConfigModel ? ButtonRenderModel :
        T extends ResponsiveStructuralDialogConfigModel ? DialogRenderModel :
          T extends ResponsiveStructuralImageConfigModel ? ImageRenderModel :
            T extends ResponsiveStructuralMenubarConfigModel ? MenubarRenderModel :
              T extends ResponsiveStructuralTableConfigModel ? TableRenderModel :
                T extends ResponsiveStructuralConfirmPopupConfigModel ? ConfirmPopupRenderModel :
        T extends ResponsiveStylingConfigModel ? StylingRenderModel :
          T extends ResponsiveContentInjectionConfigModel ? ContentInjectionRenderModel :
            T extends ResponsiveDataInputConfigModel ? DataInputRenderModel :
              T extends ResponsiveDataRepresentationConfigModel ? DataRepresentationRenderModel :
                T extends ResponsiveTableLayoutConfigModel ? TableLayoutRenderModel :
                  T extends ResponsiveOverflowConfigModel ? OverflowRenderModel :
                    T extends ResponsiveLayoutOverrideConfigModel ? LayoutOverrideRenderModel :
                      T extends ResponsiveSpacingConfigModel ? SpacingRenderModel :
                        T extends ResponsiveSizeConfigModel ? SizeRenderModel : never
