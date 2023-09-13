import {ChildLayoutRenderModel} from "../design-dimensions/ChildLayout/ChildLayoutRenderModel";
import {DimensioningRenderModel} from "../design-dimensions/Dimensioning/DimensioningRenderModel";
import {VisibilityRenderModel} from "../design-dimensions/Visibility/VisibilityRenderModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveTableConfigModel} from "../design-dimensions/component-specific-config/table/ResponsiveTableConfigModel";
import {VisibilityConfigModel} from "../design-dimensions/Visibility/VisibilityConfigModel";
import {ChildLayoutConfigModel} from "../design-dimensions/ChildLayout/ChildLayoutConfigModel";
import {ResponsiveChildLayoutConfigModel} from "../design-dimensions/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ResponsiveDimensioningConfigModel} from "../design-dimensions/Dimensioning/ResponsiveDimensioningConfigModel";
import {DimensioningConfigModel} from "../design-dimensions/Dimensioning/DimensioningConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ResponsiveDataInputConfigModel} from "../design-dimensions/DataInput/ResponsiveDataInputConfigModel";
import {
  ResponsiveDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsivePositioningConfigModel} from "../design-dimensions/Positioning/self/ResponsivePositioningConfigModel";
import {DataRepresentationConfigModel} from "../design-dimensions/DataRepresentation/DataRepresentationConfigModel";
import {DataInputConfigModel} from "../design-dimensions/DataInput/DataInputConfigModel";
import {ContentInjectionConfigModel} from "../design-dimensions/ContentInjection/ContentInjectionConfigModel";
import {OverflowConfigModel} from "../design-dimensions/Overflow/self/OverflowConfigModel";
import {PositioningConfigModel} from "../design-dimensions/Positioning/self/PositioningConfigModel";
import {ContentInjectionRenderModel} from "../design-dimensions/ContentInjection/ContentInjectionRenderModel";
import {OverflowRenderModel} from "../design-dimensions/Overflow/self/OverflowRenderModel";
import {DataRepresentationRenderModel} from "../design-dimensions/DataRepresentation/DataRepresentationRenderModel";
import {PositioningRenderModel} from "../design-dimensions/Positioning/self/PositioningRenderModel";
import {DataInputRenderModel} from "../design-dimensions/DataInput/DataInputRenderModel";
import {TableConfigModel} from "../design-dimensions/component-specific-config/table/TableConfigModel";
import {TableRenderModel} from "../design-dimensions/component-specific-config/table/TableRenderModel";
import {ImageConfigModel} from "../design-dimensions/component-specific-config/image/ImageConfigModel";
import {ResponsiveImageConfigModel} from "../design-dimensions/component-specific-config/image/ResponsiveImageConfigModel";
import {ImageRenderModel} from "../design-dimensions/component-specific-config/image/ImageRenderModel";
import {
  ResponsiveMenubarConfigModel
} from "../design-dimensions/component-specific-config/menubar/ResponsiveMenubarConfigModel";
import {MenubarRenderModel} from "../design-dimensions/component-specific-config/menubar/MenubarRenderModel";
import {MenubarConfigModel} from "../design-dimensions/component-specific-config/menubar/MenubarConfigModel";
import {ConfirmPopupRenderModel} from "../design-dimensions/component-specific-config/confirm-popup/ConfirmPopupRenderModel";
import {ResponsiveConfirmPopupConfigModel} from "../design-dimensions/component-specific-config/confirm-popup/ResponsiveConfirmPopupConfigModel";
import {ConfirmPopupConfigModel} from "../design-dimensions/component-specific-config/confirm-popup/ConfirmPopupConfigModel";
import {
  ResponsiveDialogConfigModel
} from "../design-dimensions/component-specific-config/dialog/ResponsiveDialogConfigModel";
import {DialogConfigModel} from "../design-dimensions/component-specific-config/dialog/DialogConfigModel";
import {DialogRenderModel} from "../design-dimensions/component-specific-config/dialog/DialogRenderModel";
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
  ComponentSpecificConfigModel
} from "../design-dimensions/component-specific-config/ComponentSpecificConfigModel";
import {
  ComponentSpecificRenderModel
} from "../design-dimensions/component-specific-config/ComponentSpecificRenderModel";
import {ZeroValueType} from "../enums/zeroValueTypes.enum";
import {
  ResponsiveMenubarContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/menubar/ResponsiveMenubarContentInjectionConfigModel";
import {
  MenubarContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/menubar/MenubarContentInjectionConfigModel";
import {
  MenubarContentInjectionRenderModel
} from "../design-dimensions/ContentInjection/menubar/MenubarContentInjectionRenderModel";
import {
  ResponsiveTableContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/table/ResponsiveTableContentInjectionConfigModel";
import {
  TableContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/table/TableContentInjectionConfigModel";
import {
  TableContentInjectionRenderModel
} from "../design-dimensions/ContentInjection/table/TableContentInjectionRenderModel";
import {
  ResponsiveDialogContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/dialog/ResponsiveDialogContentInjectionConfigModel";
import {
  DialogContentInjectionRenderModel
} from "../design-dimensions/ContentInjection/dialog/DialogContentInjectionRenderModel";
import {
  DialogContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/dialog/DialogContentInjectionConfigModel";

export type ResponsiveConfigType<T> =
  T extends ResponsiveChildLayoutConfigModel ? ResponsiveChildLayoutConfigModel :
    T extends ResponsiveVisibilityConfigModel ? ResponsiveVisibilityConfigModel :
      T extends ResponsiveTableConfigModel ? ResponsiveTableConfigModel :
        T extends ResponsiveImageConfigModel ? ResponsiveImageConfigModel :
          T extends ResponsiveMenubarConfigModel ? ResponsiveMenubarConfigModel :
            T extends ResponsiveConfirmPopupConfigModel ? ResponsiveConfirmPopupConfigModel :
              T extends ResponsiveDialogConfigModel ? ResponsiveDialogConfigModel :
                T extends ResponsiveIconConfigModel ? ResponsiveIconConfigModel :
                  T extends ResponsiveLabelConfigModel ? ResponsiveLabelConfigModel :
                    T extends ResponsiveComponentSpecificConfigModel ? ResponsiveComponentSpecificConfigModel :
                      T extends ResponsiveMenubarContentInjectionConfigModel ? ResponsiveMenubarContentInjectionConfigModel :
                        T extends ResponsiveTableContentInjectionConfigModel ? ResponsiveTableContentInjectionConfigModel :
                          T extends ResponsiveDialogContentInjectionConfigModel ? ResponsiveDialogContentInjectionConfigModel :

        T extends ResponsiveContentInjectionConfigModel ? ResponsiveContentInjectionConfigModel :
          T extends ResponsiveDataInputConfigModel ? ResponsiveDataInputConfigModel :
            T extends ResponsiveDataRepresentationConfigModel ? ResponsiveDataRepresentationConfigModel :
              T extends ResponsiveOverflowConfigModel ? ResponsiveOverflowConfigModel :
                T extends ResponsivePositioningConfigModel ? ResponsivePositioningConfigModel :
                  T extends ResponsiveDimensioningConfigModel ? ResponsiveDimensioningConfigModel : never

export type ConfigType<T> =
  T extends ResponsiveChildLayoutConfigModel ? ChildLayoutConfigModel :
    T extends ResponsiveVisibilityConfigModel ? VisibilityConfigModel :
      T extends ResponsiveTableConfigModel ? TableConfigModel :
        T extends ResponsiveImageConfigModel ? ImageConfigModel :
          T extends ResponsiveMenubarConfigModel ? MenubarConfigModel :
            T extends ResponsiveConfirmPopupConfigModel ? ConfirmPopupConfigModel :
              T extends ResponsiveDialogConfigModel ? DialogConfigModel :
                T extends ResponsiveIconConfigModel ? IconConfigModel :
                  T extends ResponsiveLabelConfigModel ? LabelConfigModel :
                    T extends ResponsiveComponentSpecificConfigModel ? ComponentSpecificConfigModel :
                      T extends ResponsiveMenubarContentInjectionConfigModel ? MenubarContentInjectionConfigModel :
                        T extends ResponsiveTableContentInjectionConfigModel ? TableContentInjectionConfigModel :
                          T extends ResponsiveDialogContentInjectionConfigModel ? DialogContentInjectionConfigModel :

        T extends ResponsiveContentInjectionConfigModel ? ContentInjectionConfigModel :
          T extends ResponsiveDataInputConfigModel ? DataInputConfigModel :
            T extends ResponsiveDataRepresentationConfigModel ? DataRepresentationConfigModel :
              T extends ResponsiveOverflowConfigModel ? OverflowConfigModel :
                T extends ResponsivePositioningConfigModel ? PositioningConfigModel :
                  T extends ResponsiveDimensioningConfigModel ? DimensioningConfigModel : never;

export type RenderType<T> =
  T extends ResponsiveChildLayoutConfigModel ? ChildLayoutRenderModel :
    T extends ResponsiveVisibilityConfigModel ? VisibilityRenderModel :
      T extends ResponsiveTableConfigModel ? TableRenderModel :
        T extends ResponsiveImageConfigModel ? ImageRenderModel :
          T extends ResponsiveMenubarConfigModel ? MenubarRenderModel :
            T extends ResponsiveConfirmPopupConfigModel ? ConfirmPopupRenderModel :
              T extends ResponsiveDialogConfigModel ? DialogRenderModel :
                T extends ResponsiveIconConfigModel ? IconRenderModel :
                  T extends ResponsiveLabelConfigModel ? LabelRenderModel :
                    T extends ResponsiveComponentSpecificConfigModel ? ComponentSpecificRenderModel :
                      T extends ResponsiveMenubarContentInjectionConfigModel ? MenubarContentInjectionRenderModel :
                        T extends ResponsiveTableContentInjectionConfigModel ? TableContentInjectionRenderModel :
                          T extends ResponsiveDialogContentInjectionConfigModel ? DialogContentInjectionRenderModel :

        T extends ResponsiveContentInjectionConfigModel ? ContentInjectionRenderModel :
          T extends ResponsiveDataInputConfigModel ? DataInputRenderModel :
            T extends ResponsiveDataRepresentationConfigModel ? DataRepresentationRenderModel :
              T extends ResponsiveOverflowConfigModel ? OverflowRenderModel :
                T extends ResponsivePositioningConfigModel ? PositioningRenderModel :
                  T extends ResponsiveDimensioningConfigModel ? DimensioningRenderModel : never
