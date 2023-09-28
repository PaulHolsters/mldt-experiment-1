
import {SizeRenderModel} from "../design-dimensions/Size/SizeRenderModel";
import {VisibilityRenderModel} from "../design-dimensions/Visibility/VisibilityRenderModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigModel} from "../design-dimensions/Visibility/VisibilityConfigModel";
import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {SizeConfigModel} from "../design-dimensions/Size/SizeConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {OverflowConfigModel} from "../design-dimensions/Overflow/OverflowConfigModel";
import {OverflowRenderModel} from "../design-dimensions/Overflow/OverflowRenderModel";
import {ResponsiveSpacingConfigModel} from "../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {SpacingRenderModel} from "../design-dimensions/Spacing/SpacingRenderModel";
import {SpacingConfigModel} from "../design-dimensions/Spacing/SpacingConfigModel";
import {
  ResponsiveStructuralButtonConfigModel
} from "../design-dimensions/StructuralConfig/button/ResponsiveStructuralButtonConfigModel";
import {ButtonStructuralConfigModel} from "../design-dimensions/StructuralConfig/button/ButtonStructuralConfigModel";
import {ButtonStructuralRenderModel} from "../design-dimensions/StructuralConfig/button/ButtonStructuralRenderModel";
import {TableStructuralConfigModel} from "../design-dimensions/StructuralConfig/table/TableStructuralConfigModel";
import {ConfirmPopupStructuralConfigModel} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmPopupStructuralConfigModel";
import {MenubarStructuralConfigModel} from "../design-dimensions/StructuralConfig/menubar/MenubarStructuralConfigModel";
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
import {DialogStructuralConfigModel} from "../design-dimensions/StructuralConfig/dialog/DialogStructuralConfigModel";
import {ImageStructuralConfigModel} from "../design-dimensions/StructuralConfig/image/ImageStructuralConfigModel";
import {
  ResponsiveStructuralMenubarConfigModel
} from "../design-dimensions/StructuralConfig/menubar/ResponsiveStructuralMenubarConfigModel";
import {MenubarStructuralRenderModel} from "../design-dimensions/StructuralConfig/menubar/MenubarStructuralRenderModel";
import {ImageStructuralRenderModel} from "../design-dimensions/StructuralConfig/image/ImageStructuralRenderModel";
import {DialogStructuralRenderModel} from "../design-dimensions/StructuralConfig/dialog/DialogStructuralRenderModel";
import {ConfirmPopupStructuralRenderModel} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmPopupStructuralRenderModel";
import {TableStructuralRenderModel} from "../design-dimensions/StructuralConfig/table/TableStructuralRenderModel";
import {
  ResponsiveContainerChildLayoutConfigModel
} from "../design-dimensions/ComponentSpecificLayout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ChildLayoutConfigModel} from "../design-dimensions/ComponentSpecificLayout/Container/ChildLayoutConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {IndividualLayoutConfigModel} from "../design-dimensions/IndividualLayout/IndividualLayoutConfigModel";
import {TableLayoutConfigModel} from "../design-dimensions/ComponentSpecificLayout/Table/TableLayoutConfigModel";
import {
  ResponsiveTableLayoutConfigModel
} from "../design-dimensions/ComponentSpecificLayout/Table/ResponsiveTableLayoutConfigModel";
import {ChildLayoutRenderModel} from "../design-dimensions/ComponentSpecificLayout/Container/ChildLayoutRenderModel";
import {TableLayoutRenderModel} from "../design-dimensions/ComponentSpecificLayout/Table/TableLayoutRenderModel";
import {IndividualLayoutRenderModel} from "../design-dimensions/IndividualLayout/IndividualLayoutRenderModel";
import {ConfigModelType, ContentInjectConfigModelType, ContentInjectRenderModelType} from "./union-types";
import {
  DialogContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/dialog/DialogContentInjectionConfigModel";
import {
  MenubarContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/menubar/MenubarContentInjectionConfigModel";
import {
  TableContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/table/TableContentInjectionConfigModel";
import {
  TableContentInjectionRenderModel
} from "../design-dimensions/ContentInjection/table/TableContentInjectionRenderModel";
import {
  DialogContentInjectionRenderModel
} from "../design-dimensions/ContentInjection/dialog/DialogContentInjectionRenderModel";
import {
  MenubarContentInjectionRenderModel
} from "../design-dimensions/ContentInjection/menubar/MenubarContentInjectionRenderModel";
import {
  NumberInputDataInputConfigModel
} from "../design-dimensions/DataInput/NumberInput/NumberInputDataInputConfigModel";
import {
  NumberInputDataInputRenderModel
} from "../design-dimensions/DataInput/NumberInput/NumberInputDataInputRenderModel";
import {
  RadioButtonGroupDataInputConfigModel
} from "../design-dimensions/DataInput/RadioButtonGroup/RadioButtonGroupDataInputConfigModel";
import {
  RadioButtonGroupDataInputRenderModel
} from "../design-dimensions/DataInput/RadioButtonGroup/RadioButtonGroupDataInputRenderModel";
import {TextInputDataInputConfigModel} from "../design-dimensions/DataInput/TextInput/TextInputDataInputConfigModel";
import {TextInputDataInputRenderModel} from "../design-dimensions/DataInput/TextInput/TextInputDataInputRenderModel";

export type RenderModelType<T extends ConfigModelType> =
  T extends ChildLayoutConfigModel ?  ChildLayoutRenderModel :
  T extends TableLayoutConfigModel ? TableLayoutRenderModel :

  T extends DialogContentInjectionConfigModel ? DialogContentInjectionRenderModel :
  T extends MenubarContentInjectionConfigModel ? MenubarContentInjectionRenderModel :
  T extends TableContentInjectionConfigModel ? TableContentInjectionRenderModel :

  T extends NumberInputDataInputConfigModel ? NumberInputDataInputRenderModel :
  T extends RadioButtonGroupDataInputConfigModel ? RadioButtonGroupDataInputRenderModel :
  T extends TextInputDataInputConfigModel ? TextInputDataInputRenderModel

/*export type ConfigType<T> =
  T extends ResponsiveContainerChildLayoutConfigModel ? ChildLayoutConfigModel :
  T extends ResponsiveVisibilityConfigModel ? VisibilityConfigModel :
  T extends ResponsiveContentInjectionConfigModel<ContentInjectConfigModelType,ContentInjectRenderModelType> ?
    ContentInjectConfigModelType extends DialogContentInjectionConfigModel ? DialogContentInjectionConfigModel :
      ContentInjectConfigModelType extends MenubarContentInjectionConfigModel ? MenubarContentInjectionConfigModel :
    ContentInjectConfigModelType extends TableContentInjectionConfigModel ? TableContentInjectionConfigModel :
  T extends ResponsiveOverflowConfigModel ? OverflowConfigModel :
  T extends ResponsiveTableLayoutConfigModel ? TableLayoutConfigModel :
  T extends ResponsiveIndividualLayoutConfigModel ? IndividualLayoutConfigModel :
  T extends ResponsiveSpacingConfigModel ? SpacingConfigModel :

  T extends ResponsiveStructuralButtonConfigModel ? ButtonStructuralConfigModel:
    T extends ResponsiveStructuralDialogConfigModel ? DialogStructuralConfigModel:
      T extends ResponsiveStructuralImageConfigModel ? ImageStructuralConfigModel:
        T extends ResponsiveStructuralMenubarConfigModel ? MenubarStructuralConfigModel:
          T extends ResponsiveStructuralTableConfigModel ? TableStructuralConfigModel:
            T extends ResponsiveStructuralConfirmPopupConfigModel ? ConfirmPopupStructuralConfigModel:

                        T extends ResponsiveSizeConfigModel ? SizeConfigModel : never

export type RenderType<T> =
  T extends ResponsiveContainerChildLayoutConfigModel ? ChildLayoutRenderModel :
    T extends ResponsiveVisibilityConfigModel ? VisibilityRenderModel :

      T extends ResponsiveStructuralButtonConfigModel ? ButtonStructuralRenderModel :
        T extends ResponsiveStructuralDialogConfigModel ? DialogStructuralRenderModel :
          T extends ResponsiveStructuralImageConfigModel ? ImageStructuralRenderModel :
            T extends ResponsiveStructuralMenubarConfigModel ? MenubarStructuralRenderModel :
              T extends ResponsiveStructuralTableConfigModel ? TableStructuralRenderModel :
                T extends ResponsiveStructuralConfirmPopupConfigModel ? ConfirmPopupStructuralRenderModel :

                  T extends ResponsiveContentInjectionConfigModel<ContentInjectConfigModelType,ContentInjectRenderModelType> ?
                    ContentInjectRenderModelType extends DialogContentInjectionRenderModel ? DialogContentInjectionRenderModel :
                      ContentInjectRenderModelType extends MenubarContentInjectionRenderModel ? MenubarContentInjectionRenderModel :
                        ContentInjectRenderModelType extends TableContentInjectionRenderModel ? TableContentInjectionRenderModel : never :

                T extends ResponsiveTableLayoutConfigModel ? TableLayoutRenderModel :
                  T extends ResponsiveOverflowConfigModel ? OverflowRenderModel :
                    T extends ResponsiveIndividualLayoutConfigModel ? IndividualLayoutRenderModel :
                      T extends ResponsiveSpacingConfigModel ? SpacingRenderModel :
                        T extends ResponsiveSizeConfigModel ? SizeRenderModel : never*/
