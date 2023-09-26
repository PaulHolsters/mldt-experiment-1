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

export type ResponsiveConfigModelType =
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
  ResponsiveLayoutOverrideConfigModel |
  ResponsiveContentInjectionConfigModel |
  ResponsiveStylingConfigModel |
  ResponsiveDataRepresentationConfigModel |
  ResponsiveDataInputConfigModel

export type ComponentModelType = Container
export type ScreenSizeType = 'smartphone'|'portraitTablet'|'tablet'|'laptop'|'high resolution'
