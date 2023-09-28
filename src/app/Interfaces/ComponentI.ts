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

export interface ComponentI {
  // todo ik denk dat je beter met ? werkt zodat er meerdere zaken gemakkelijk van de interface gebruik kunnen maken
  // todo voeg conditie toe dat als je dimension hebt je ook setDimension moet hebben = partial interface eerst voor maken
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
  setIndividualLayout: (pos: ResponsiveIndividualLayoutConfigModel) => ComponentModel
  styling: ResponsiveStylingConfigModel | undefined
  setStyling: ((styling: ResponsiveStylingConfigModel) => ComponentModel)|undefined
  clientData: ClientDataConfigModel|ZeroValueType.NoValueYet | undefined
  setClientData: ((clientData: ClientDataConfigModel|ZeroValueType.NoValueYet) => ComponentModel)|undefined
  dataRepresentation: ResponsiveDataRepresentationConfigModel | undefined
  setDataRepresentation: ((dataRepresentation: ResponsiveDataRepresentationConfigModel) => ComponentModel)|undefined
  dataInput: ResponsiveDataInputConfigModel | undefined
  setDataInput: ((dataInput: ResponsiveDataInputConfigModel) => ComponentModel)|undefined
  contentInjection: ResponsiveContentInjectionConfigModel | undefined
  setContentInjection: ((contentInjection: ResponsiveContentInjectionConfigModel) => ComponentModel)|undefined
  layout: ResponsiveContainerChildLayoutConfigModel|ResponsiveTableLayoutConfigModel | undefined
  setLayout: ((screen:ScreenSize,layout: ChildLayoutConfigModel) => ComponentModel)|
    ((screen:ScreenSize,layout: TableLayoutConfigModel) => ComponentModel)|undefined
  children: ComponentModel[] | undefined
  // todo op termijn moeten de children ook responsive worden
  setChildren: ((children: ComponentModel[]) => ComponentModel)|undefined
  componentSpecificConfig:ResponsiveStructuralConfigModel|undefined
  setComponentSpecificConfig: ((specifics: ResponsiveStructuralConfigModel) => ComponentModel)|undefined
}
