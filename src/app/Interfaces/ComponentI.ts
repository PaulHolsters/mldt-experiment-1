import {ComponentModel} from "../design-dimensions/ComponentModel";
import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ClientDataConfigModel} from "../design-dimensions/ClientData/ClientDataConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ZeroValueType} from "../enums/zeroValueTypes.enum";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {
  ResponsiveComponentSpecificLayoutConfigModelType,
  ResponsiveContentInjectionConfigModelType,
  ResponsiveDataInputConfigModelType,
  ResponsiveDataRepresentationConfigModelType, ResponsiveStructuralConfigModelType,
  ResponsiveStylingConfigModelType
} from "../types/union-types";

export interface ComponentI<
  ContentInjection extends ResponsiveContentInjectionConfigModelType|undefined,
  Structural extends ResponsiveStructuralConfigModelType|undefined,
  Styling extends ResponsiveStylingConfigModelType|undefined,
  ComponentSpecificLayout extends ResponsiveComponentSpecificLayoutConfigModelType|undefined,
  DataInput extends ResponsiveDataInputConfigModelType|undefined,
  DataRepresentation extends ResponsiveDataRepresentationConfigModelType|undefined
> {
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
  styling:  Styling
  setStyling: Styling extends undefined ? Styling: ((contentInjection: Styling) => ComponentModel)
  clientData: ClientDataConfigModel|ZeroValueType.NoValueYet | undefined
  setClientData: ((clientData: ClientDataConfigModel|ZeroValueType.NoValueYet) => ComponentModel)|undefined
  dataRepresentation: DataRepresentation
  setDataRepresentation: DataRepresentation extends undefined ? DataRepresentation: ((contentInjection: DataRepresentation) => ComponentModel)
  dataInput: DataInput
  setDataInput: DataInput extends undefined ? DataInput: ((contentInjection: DataInput) => ComponentModel)
  contentInjection: ContentInjection
  setContentInjection: ContentInjection extends undefined ? ContentInjection: ((contentInjection: ContentInjection) => ComponentModel)
  componentSpecificLayout: ComponentSpecificLayout
  setComponentSpecificLayout: ComponentSpecificLayout extends undefined ? ComponentSpecificLayout: ((contentInjection: ComponentSpecificLayout) => ComponentModel)
  children: ComponentModel[] | undefined
  setChildren: ((children: ComponentModel[]) => ComponentModel)|undefined
  structural:Structural
  setStructural:Structural extends undefined ? Structural: ((contentInjection: Structural) => ComponentModel)
}
