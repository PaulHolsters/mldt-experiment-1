import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ClientDataConfigModel} from "../design-dimensions/ClientData/ClientDataConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {
  ComponentModelType,
  ResponsiveComponentSpecificLayoutConfigModelType,
  ResponsiveContentInjectionConfigModelType,
  ResponsiveDataInputConfigModelType,
  ResponsiveDataRepresentationConfigModelType, ResponsiveStructuralConfigModelType,
  ResponsiveStylingConfigModelType
} from "../types/union-types";
import {NoValueType} from "../enums/NoValueTypes.enum";
import {ComponentType} from "../enums/componentTypes.enum";

export interface ComponentI<
  ContentInjection extends ResponsiveContentInjectionConfigModelType|undefined,
  Structural extends ResponsiveStructuralConfigModelType|undefined,
  Styling extends ResponsiveStylingConfigModelType|undefined,
  ComponentSpecificLayout extends ResponsiveComponentSpecificLayoutConfigModelType|undefined,
  DataInput extends ResponsiveDataInputConfigModelType|undefined,
  DataRepresentation extends ResponsiveDataRepresentationConfigModelType|undefined
> {
  name: string
  type:ComponentType
  size: ResponsiveSizeConfigModel
  setSize: (size: ResponsiveSizeConfigModel) => ComponentModelType
  spacing:ResponsiveSpacingConfigModel
  setSpacing: (spacing:ResponsiveSpacingConfigModel) => ComponentModelType
  visibility: ResponsiveVisibilityConfigModel
  setVisibility: (visibility: ResponsiveVisibilityConfigModel) => ComponentModelType
  overflow: ResponsiveOverflowConfigModel
  setOverflow: (overflow: ResponsiveOverflowConfigModel) => ComponentModelType
  individualLayout: ResponsiveIndividualLayoutConfigModel
  setIndividualLayout: (il: ResponsiveIndividualLayoutConfigModel) => ComponentModelType
  styling:  Styling
  setStyling: Styling extends undefined ? Styling: ((contentInjection: Styling) => ComponentModelType)
  clientData: ClientDataConfigModel|undefined
  setClientData: ((clientData: ClientDataConfigModel|undefined) => ComponentModelType)|undefined
  dataRepresentation: DataRepresentation
  setDataRepresentation: DataRepresentation extends undefined ? DataRepresentation: ((contentInjection: DataRepresentation) => ComponentModelType)
  dataInput: DataInput
  setDataInput: DataInput extends undefined ? DataInput: ((contentInjection: DataInput) => ComponentModelType)
  contentInjection: ContentInjection
  setContentInjection: ContentInjection extends undefined ? ContentInjection: ((contentInjection: ContentInjection) => ComponentModelType)
  componentSpecificLayout: ComponentSpecificLayout
  setComponentSpecificLayout: ComponentSpecificLayout extends undefined ? ComponentSpecificLayout: ((contentInjection: ComponentSpecificLayout) => ComponentModelType)
  children: ComponentModelType[] | undefined
  setChildren: ((children: ComponentModelType[]) => ComponentModelType)|undefined
  structural:Structural
  setStructural:Structural extends undefined ? Structural: ((contentInjection: Structural) => ComponentModelType)
}
