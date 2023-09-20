import {ClientData} from "../services/data/client/ClientData";
import {ResponsiveContainerChildLayoutConfigModel} from "../design-dimensions/Layout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ComponentModel} from "../design-dimensions/ComponentModel";
import {ResponsiveLayoutOverrideConfigModel} from "../design-dimensions/LayoutOverride/ResponsiveLayoutOverrideConfigModel";
import {ResponsiveSizeConfigModel} from "../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ClientDataConfigModel} from "../design-dimensions/ClientData/ClientDataConfigModel";
import {
  ResponsiveDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {ResponsiveDataInputConfigModel} from "../design-dimensions/DataInput/ResponsiveDataInputConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ResponsiveTableLayoutConfigModel} from "../design-dimensions/Layout/Table/ResponsiveTableLayoutConfigModel";
import {
  ResponsiveComponentSpecificConfigModel
} from "../design-dimensions/component-specific-config/ResponsiveComponentSpecificConfigModel";
import {ResponsiveOverflowConfigModel} from "../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "../design-dimensions/Styling/ResponsiveStylingConfigModel";

export interface ComponentI {
  // todo ik denk dat je beter met ? werkt zodat er meerdere zaken gemakkelijk vabn de interface gebruik kunnen maken
  name: string
  layout: ResponsiveContainerChildLayoutConfigModel|ResponsiveTableLayoutConfigModel | undefined
  children: ComponentModel[] | undefined
  position: ResponsiveLayoutOverrideConfigModel
  size: ResponsiveSizeConfigModel
  componentSpecificConfig:ResponsiveComponentSpecificConfigModel|undefined
  visibility: ResponsiveVisibilityConfigModel
  overflow: ResponsiveOverflowConfigModel
  styling: ResponsiveStylingConfigModel
  clientData: ClientDataConfigModel | undefined
  dataRepresentation: ResponsiveDataRepresentationConfigModel | undefined
  dataInput: ResponsiveDataInputConfigModel | undefined
  contentInjection: ResponsiveContentInjectionConfigModel | undefined

  // todo voeg conditie toe dat als je dimension hebt je ook setDimension moet hebben = partial interface eerst voor maken
  setSize: (dimensions: ResponsiveSizeConfigModel) => ComponentModel
  //setOverflow: (overflow: ResponsiveOverflowConfigModel) => ComponentModel
  setPosition: (pos: ResponsiveLayoutOverrideConfigModel) => ComponentModel
  //setStyling: (styling: ResponsiveStylingConfigModel) => ComponentModel
  setVisibility: (visibility: ResponsiveVisibilityConfigModel) => ComponentModel
  setLayout: ((layout: ResponsiveContainerChildLayoutConfigModel) => ComponentModel)|
    ((layout: ResponsiveTableLayoutConfigModel) => ComponentModel)|undefined
  setChildren: ((children: ComponentModel[]) => ComponentModel)|undefined
  setClientData: ((clientData: ClientData) => ComponentModel)|undefined
  setDataRepresentation: ((dataRepresentation: ResponsiveDataRepresentationConfigModel) => ComponentModel)|undefined
  setDataInput: ((dataInput: ResponsiveDataInputConfigModel) => ComponentModel)|undefined
  setContentInjection: ((contentInjection: ResponsiveContentInjectionConfigModel) => ComponentModel)|undefined
  setComponentSpecificConfig: ((specifics: ResponsiveComponentSpecificConfigModel) => ComponentModel)|undefined
}
