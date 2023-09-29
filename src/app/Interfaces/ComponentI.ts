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
  styling: ResponsiveStylingConfigModelType | undefined
  setStyling: ((styling: ResponsiveStylingConfigModelType) => ComponentModel)|undefined
  clientData: ClientDataConfigModel|ZeroValueType.NoValueYet | undefined
  setClientData: ((clientData: ClientDataConfigModel|ZeroValueType.NoValueYet) => ComponentModel)|undefined
  dataRepresentation: ResponsiveDataRepresentationConfigModelType | undefined
  setDataRepresentation: ((dataRepresentation: ResponsiveDataRepresentationConfigModelType) => ComponentModel)|undefined
  dataInput: ResponsiveDataInputConfigModelType | undefined
  setDataInput: ((dataInput: ResponsiveDataInputConfigModelType) => ComponentModel)|undefined
  contentInjection: ResponsiveContentInjectionConfigModelType | undefined
  setContentInjection: ((contentInjection: ResponsiveContentInjectionConfigModelType) => ComponentModel)|undefined
  layout: ResponsiveContainerChildLayoutConfigModel|ResponsiveTableLayoutConfigModel | undefined
  setLayout: ((screen:ScreenSize,layout: ChildLayoutConfigModel) => ComponentModel)|
    ((screen:ScreenSize,layout: TableLayoutConfigModel) => ComponentModel)|undefined
  children: ComponentModel[] | undefined
  setChildren: ((children: ComponentModel[]) => ComponentModel)|undefined
  componentSpecificConfig:ResponsiveStructuralConfigModelType|undefined
  setComponentSpecificConfig: ((specifics: ResponsiveStructuralConfigModelType) => ComponentModel)|undefined
}
