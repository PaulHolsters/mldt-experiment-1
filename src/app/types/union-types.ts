import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveContainerChildLayoutConfigModel} from "../design-dimensions/Layout/Container/ResponsiveContainerChildLayoutConfigModel";
import {Container} from "../components/container/Container";
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
import {ResponsiveSpacingConfigModel} from "../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ResponsiveTableLayoutConfigModel} from "../design-dimensions/Layout/Table/ResponsiveTableLayoutConfigModel";
import {TableConfigModel} from "../design-dimensions/StructuralConfig/table/TableConfigModel";
import {ConfirmPopupConfigModel} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmPopupConfigModel";
import {MenubarConfigModel} from "../design-dimensions/StructuralConfig/menubar/MenubarConfigModel";
import {DialogConfigModel} from "../design-dimensions/StructuralConfig/dialog/DialogConfigModel";
import {ResponsiveStructuralConfigModel} from "../design-dimensions/StructuralConfig/ResponsiveStructuralConfigModel";
import {ImageConfigModel} from "../design-dimensions/StructuralConfig/image/ImageConfigModel";
import {ButtonConfigModel} from "../design-dimensions/StructuralConfig/button/ButtonConfigModel";
import {MenubarRenderModel} from "../design-dimensions/StructuralConfig/menubar/MenubarRenderModel";
import {ImageRenderModel} from "../design-dimensions/StructuralConfig/image/ImageRenderModel";
import {DialogRenderModel} from "../design-dimensions/StructuralConfig/dialog/DialogRenderModel";
import {ButtonRenderModel} from "../design-dimensions/StructuralConfig/button/ButtonRenderModel";
import {ConfirmPopupRenderModel} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmPopupRenderModel";
import {TableRenderModel} from "../design-dimensions/StructuralConfig/table/TableRenderModel";

export type ResponsiveConfigModelType =
  ResponsiveSizeConfigModel |
  ResponsiveVisibilityConfigModel |
  ResponsiveStructuralConfigModel|
  ResponsiveSpacingConfigModel|
  ResponsiveOverflowConfigModel |
  ResponsiveTableLayoutConfigModel|
  ResponsiveContainerChildLayoutConfigModel|
  ResponsiveLayoutOverrideConfigModel |
  ResponsiveContentInjectionConfigModel |
  ResponsiveStylingConfigModel |
  ResponsiveDataRepresentationConfigModel |
  ResponsiveDataInputConfigModel

export type ComponentStructuralConfigModelType =
  TableConfigModel|
  ImageConfigModel|
  MenubarConfigModel|
  ConfirmPopupConfigModel|
  DialogConfigModel|
  ButtonConfigModel

export type ComponentStructuralRenderModelType =
  TableRenderModel|
  ImageRenderModel|
  MenubarRenderModel|
  ConfirmPopupRenderModel|
  DialogRenderModel|
  ButtonRenderModel

export type ComponentModelType = Container
export type ScreenSizeType = 'smartphone'|'portraitTablet'|'tablet'|'laptop'|'high resolution'
