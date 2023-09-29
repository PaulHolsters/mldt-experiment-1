import {ComponentModel} from "../design-dimensions/ComponentModel";
import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ClientDataConfigModel} from "../design-dimensions/ClientData/ClientDataConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ScreenSize} from "../enums/screenSizes.enum";
import {ZeroValueType} from "../enums/zeroValueTypes.enum";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {
  ResponsiveContainerChildLayoutConfigModel
} from "../design-dimensions/ComponentSpecificLayout/Container/ResponsiveContainerChildLayoutConfigModel";
import {
  ResponsiveTableLayoutConfigModel
} from "../design-dimensions/ComponentSpecificLayout/Table/ResponsiveTableLayoutConfigModel";
import {ChildLayoutConfigModel} from "../design-dimensions/ComponentSpecificLayout/Container/ChildLayoutConfigModel";
import {TableLayoutConfigModel} from "../design-dimensions/ComponentSpecificLayout/Table/TableLayoutConfigModel";
import {
  ResponsiveContentInjectionConfigModelType,
  ResponsiveDataInputConfigModelType,
  ResponsiveDataRepresentationConfigModelType, ResponsiveStructuralConfigModelType,
  ResponsiveStylingConfigModelType
} from "../types/union-types";
import {ResponsiveContentInjectConfigModelTypeSingle} from "../types/conditional-types";
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
  ResponsiveContentInjectionDialogConfigModel
} from "../design-dimensions/ContentInjection/dialog/ResponsiveContentInjectionDialogConfigModel";
import {
  ResponsiveContentInjectionMenubarConfigModel
} from "../design-dimensions/ContentInjection/menubar/ResponsiveContentInjectionMenubarConfigModel";
import {
  ResponsiveContentInjectionTableConfigModel
} from "../design-dimensions/ContentInjection/table/ResponsiveContentInjectionTableConfigModel";

export interface ComponentI {
  name: string
  size: ResponsiveSizeConfigModel
  setSize: (size: ResponsiveSizeConfigModel) => ComponentModel
  spacing:ResponsiveSpacingConfigModel
  setSpacing: (spacing:ResponsiveSpacingConfigModel) => ComponentModel
  visibility: ResponsiveVisibilityConfigModel
  setVisibility: (visibility: ResponsiveVisibilityConfigModel) => ComponentModel
  overflow: ResponsiveOverflowConfigModel
  setOverflow: (overflow: ResponsiveOverflowConfigModel) => ComponentModel
  individualLayout: ResponsiveIndividualLayoutConfigModel
  setIndividualLayout: (il: ResponsiveIndividualLayoutConfigModel) => ComponentModel
  styling: any | undefined
  setStyling: ((styling: any) => ComponentModel)|undefined
  clientData: ClientDataConfigModel|ZeroValueType.NoValueYet | undefined
  setClientData: ((clientData: ClientDataConfigModel|ZeroValueType.NoValueYet) => ComponentModel)|undefined
  // todo dit is lastig want wordt niet geaccpeteerd in bv Table component:
  /*
  * Het probleem is dat je heir zegt dat je drie modellen moet toelaten maar in de Table component laat je er maar één van de drie toe
  * */
  dataRepresentation: any | undefined
  setDataRepresentation: ((dataRepresentation: any) => ComponentModel)|undefined
  dataInput: any | undefined
  setDataInput: ((dataInput: any) => ComponentModel)|undefined
  contentInjection: any | undefined
  setContentInjection: ((contentInjection: any) => ComponentModel)|undefined
  layout: ResponsiveContainerChildLayoutConfigModel|ResponsiveTableLayoutConfigModel | undefined
  setLayout: ((screen:ScreenSize,layout: ChildLayoutConfigModel) => ComponentModel)|
    ((screen:ScreenSize,layout: TableLayoutConfigModel) => ComponentModel)|undefined
  children: ComponentModel[] | undefined
  setChildren: ((children: ComponentModel[]) => ComponentModel)|undefined
  componentSpecificConfig:any|undefined
  setComponentSpecificConfig: ((specifics: any) => ComponentModel)|undefined
}
