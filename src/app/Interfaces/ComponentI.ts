import {ResponsiveChildLayoutConfigModel} from "../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ResponsiveAttributesConfigModel} from "../models/Attributes/ResponsiveAttributesConfigModel";
import {
  ResponsiveDataRepresentationConfigModel
} from "../models/DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {ResponsiveStylingConfigModel} from "../models/Styling/ResponsiveStylingConfigModel";
import {ResponsiveDataInputConfigModel} from "../models/DataInput/ResponsiveDataInputConfigModel";
import {ResponsiveContentInjectionConfigModel} from "../models/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ResponsivePositioningConfigModel} from "../models/Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveVisibilityConfigModel} from "../models/Visibility/ResponsiveVisibilityConfigModel";
import {ClientDataConfigModel} from "../models/ClientData/ClientDataConfigModel";
import {ResponsiveOverflowConfigModel} from "../models/Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveDimensioningConfigModel} from "../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {ComponentModel} from "../models/ComponentModel";
import {ClientData} from "../services/data/client/ClientData";

export interface ComponentI {
  name: string
  childLayout: ResponsiveChildLayoutConfigModel | undefined
  children: ComponentModel[] | undefined
  position: ResponsivePositioningConfigModel
  dimensions: ResponsiveDimensioningConfigModel
  attributes: ResponsiveAttributesConfigModel | undefined
  visibility: ResponsiveVisibilityConfigModel
  overflow: ResponsiveOverflowConfigModel
  styling: ResponsiveStylingConfigModel
  clientData: ClientDataConfigModel | undefined
  dataRepresentation: ResponsiveDataRepresentationConfigModel | undefined
  dataInput: ResponsiveDataInputConfigModel | undefined
  contentInjection: ResponsiveContentInjectionConfigModel | undefined
  setDimensions: (dimensions: ResponsiveDimensioningConfigModel) => ComponentModel
  setOverflow: (overflow: ResponsiveOverflowConfigModel) => ComponentModel
  setPosition: (pos: ResponsivePositioningConfigModel) => ComponentModel
  setStyling: (styling: ResponsiveStylingConfigModel) => ComponentModel
  setVisibility: (visibility: ResponsiveVisibilityConfigModel) => ComponentModel
  setChildLayout: ((childLayout: ResponsiveChildLayoutConfigModel) => ComponentModel)|undefined
  setChildren: ((children: ComponentModel[]) => ComponentModel)|undefined
  setClientData: ((clientData: ClientData) => ComponentModel)|undefined
  setDataRepresentation: ((dataRepresentation: ResponsiveDataRepresentationConfigModel) => ComponentModel)|undefined
  setDataInput: ((dataInput: ResponsiveDataInputConfigModel) => ComponentModel)|undefined
  setContentInjection: ((contentInjection: ResponsiveContentInjectionConfigModel) => ComponentModel)|undefined
  setAttributes: ((attributes: ResponsiveAttributesConfigModel) => ComponentModel)|undefined
}
