import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {Container} from "../components/container/Container";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ResponsiveSpacingConfigModel} from "../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {
  ResponsiveStructuralButtonConfigModel
} from "../design-dimensions/StructuralConfig/button/ResponsiveStructuralButtonConfigModel";
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
import {
  ResponsiveStructuralMenubarConfigModel
} from "../design-dimensions/StructuralConfig/menubar/ResponsiveStructuralMenubarConfigModel";
import {
  ResponsiveContainerChildLayoutConfigModel
} from "../design-dimensions/ComponentSpecificLayout/Container/ResponsiveContainerChildLayoutConfigModel";
import {
  ResponsiveTableLayoutConfigModel
} from "../design-dimensions/ComponentSpecificLayout/Table/ResponsiveTableLayoutConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
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
import {ChildLayoutConfigModel} from "../design-dimensions/ComponentSpecificLayout/Container/ChildLayoutConfigModel";
import {TableLayoutConfigModel} from "../design-dimensions/ComponentSpecificLayout/Table/TableLayoutConfigModel";
import {
  NumberInputDataInputConfigModel
} from "../design-dimensions/DataInput/NumberInput/NumberInputDataInputConfigModel";
import {TextInputDataInputConfigModel} from "../design-dimensions/DataInput/TextInput/TextInputDataInputConfigModel";
import {
  RadioButtonGroupDataInputConfigModel
} from "../design-dimensions/DataInput/RadioButtonGroup/RadioButtonGroupDataInputConfigModel";
import {
  MultiSelectDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/MultiSelect/MultiSelectDataRepresentationConfigModel";
import {
  NumberInputDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/NumberInput/NumberInputDataRepresentationConfigModel";
import {
  RadioButtonGroupDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/RadioButtonGroup/RadioButtonGroupDataRepresentationConfigModel";
import {
  TableDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/Table/TableDataRepresentationConfigModel";
import {
  TextInputDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/TextInput/TextInputDataRepresentationConfigModel";
import {ButtonStructuralConfigModel} from "../design-dimensions/StructuralConfig/button/ButtonStructuralConfigModel";
import {
  ConfirmPopupStructuralConfigModel
} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmPopupStructuralConfigModel";
import {DialogStructuralConfigModel} from "../design-dimensions/StructuralConfig/dialog/DialogStructuralConfigModel";
import {ImageStructuralConfigModel} from "../design-dimensions/StructuralConfig/image/ImageStructuralConfigModel";
import {MenubarStructuralConfigModel} from "../design-dimensions/StructuralConfig/menubar/MenubarStructuralConfigModel";
import {TableStructuralConfigModel} from "../design-dimensions/StructuralConfig/table/TableStructuralConfigModel";
import {ButtonStylingConfigModel} from "../design-dimensions/Styling/button/ButtonStylingConfigModel";
import {IconStylingConfigModel} from "../design-dimensions/Styling/icon/IconStylingConfigModel";
import {TableStylingConfigModel} from "../design-dimensions/Styling/table/TableStylingConfigModel";
import {IndividualLayoutConfigModel} from "../design-dimensions/IndividualLayout/IndividualLayoutConfigModel";
import {OverflowConfigModel} from "../design-dimensions/Overflow/OverflowConfigModel";
import {SizeConfigModel} from "../design-dimensions/Size/SizeConfigModel";
import {SpacingConfigModel} from "../design-dimensions/Spacing/SpacingConfigModel";
import {VisibilityConfigModel} from "../design-dimensions/Visibility/VisibilityConfigModel";

export type ContentInjectionConfigModelType =
  DialogContentInjectionConfigModel |
  MenubarContentInjectionConfigModel|
  TableContentInjectionConfigModel|never
export type ComponentSpecificLayoutConfigModelType =
  ChildLayoutConfigModel |
  TableLayoutConfigModel | never
export type DataInputConfigModelType =
  NumberInputDataInputConfigModel|
  TextInputDataInputConfigModel|
  RadioButtonGroupDataInputConfigModel | never
export type DataRepresentationConfigModelType =
  MultiSelectDataRepresentationConfigModel|
  NumberInputDataRepresentationConfigModel|
  RadioButtonGroupDataRepresentationConfigModel|
  TableDataRepresentationConfigModel|
  TextInputDataRepresentationConfigModel|never
export type StructuralConfigModelType =
  ButtonStructuralConfigModel|
  ConfirmPopupStructuralConfigModel|
  DialogStructuralConfigModel|
  ImageStructuralConfigModel|
  MenubarStructuralConfigModel|
  TableStructuralConfigModel|never
export type StylingConfigModelType =
  ButtonStylingConfigModel|
  IconStylingConfigModel|
  TableStylingConfigModel|never
export type ConfigModelType =
  ContentInjectionConfigModelType|
  ComponentSpecificLayoutConfigModelType|
  DataInputConfigModelType|
  DataRepresentationConfigModelType|
  StructuralConfigModelType|
  StylingConfigModelType|
  IndividualLayoutConfigModel|
  OverflowConfigModel|
  SizeConfigModel|
  SpacingConfigModel|
  VisibilityConfigModel|never

/*export type ResponsiveConfigModelType<ContentInjectConfigModelType,ContentInjectRenderModelType> =
  ResponsiveSizeConfigModel |
  ResponsiveVisibilityConfigModel |

  ResponsiveStructuralButtonConfigModel|
  ResponsiveStructuralImageConfigModel|
  ResponsiveStructuralConfirmPopupConfigModel|
  ResponsiveStructuralDialogConfigModel|
  ResponsiveStructuralMenubarConfigModel|
  ResponsiveStructuralTableConfigModel|

  ResponsiveSpacingConfigModel|
  ResponsiveOverflowConfigModel |
  ResponsiveTableLayoutConfigModel|
  ResponsiveContainerChildLayoutConfigModel|
  ResponsiveIndividualLayoutConfigModel |

  ResponsiveContentInjectionConfigModel<ContentInjectConfigModelType,ContentInjectRenderModelType> |

  never*/

export type ComponentModelType = Container
export type ScreenSizeType = 'smartphone'|'portraitTablet'|'tablet'|'laptop'|'high resolution'
