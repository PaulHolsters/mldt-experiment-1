import {ClientData} from "../services/data/client/ClientData";
import {ResponsiveChildLayoutConfigModel} from "../design-dimensions/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ComponentModel} from "../design-dimensions/ComponentModel";
import {ResponsivePositioningConfigModel} from "../design-dimensions/Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveDimensioningConfigModel} from "../design-dimensions/Dimensioning/ResponsiveDimensioningConfigModel";
import {ResponsiveTableConfigModel} from "../design-dimensions/component-specific-config/table/ResponsiveTableConfigModel";
import {ResponsiveVisibilityConfigModel} from "../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ClientDataConfigModel} from "../design-dimensions/ClientData/ClientDataConfigModel";
import {
  ResponsiveDataRepresentationConfigModel
} from "../design-dimensions/DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {ResponsiveDataInputConfigModel} from "../design-dimensions/DataInput/ResponsiveDataInputConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {
  ResponsiveMenubarConfigModel
} from "../design-dimensions/component-specific-config/menubar/ResponsiveMenubarConfigModel";
import {
  ResponsiveImageConfigModel
} from "../design-dimensions/component-specific-config/image/ResponsiveImageConfigModel";
import {ResponsiveConfirmPopupConfigModel} from "../design-dimensions/component-specific-config/confirm-popup/ResponsiveConfirmPopupConfigModel";
import {
  ResponsiveDialogConfigModel
} from "../design-dimensions/component-specific-config/dialog/ResponsiveDialogConfigModel";
import {ResponsiveLabelConfigModel} from "../design-dimensions/label-config/ResponsiveLabelConfigModel";
import {ResponsiveIconConfigModel} from "../design-dimensions/icon-config/ResponsiveIconConfigModel";

export interface ComponentI {
  // todo ik denk dat je beter met ? werkt zodat er meerdere zaken gemakkelijk vabn de interface gebruik kunnen maken
  name: string
  labelConfig:ResponsiveLabelConfigModel | undefined
  setLabelConfig:((labelConfig: ResponsiveLabelConfigModel) => ComponentModel)|undefined
  iconConfig:ResponsiveIconConfigModel | undefined
  setIconConfig:((iconConfig: ResponsiveIconConfigModel) => ComponentModel)|undefined
  childLayout: ResponsiveChildLayoutConfigModel | undefined
  children: ComponentModel[] | undefined
  position: ResponsivePositioningConfigModel
  dimensions: ResponsiveDimensioningConfigModel
  componentSpecificConfig:
    ResponsiveTableConfigModel |
    ResponsiveMenubarConfigModel|
    ResponsiveImageConfigModel|
    ResponsiveConfirmPopupConfigModel|
    ResponsiveDialogConfigModel |
    undefined
  visibility: ResponsiveVisibilityConfigModel
  //overflow: ResponsiveOverflowConfigModel
  //styling: ResponsiveStylingConfigModel
  clientData: ClientDataConfigModel | undefined
  dataRepresentation: ResponsiveDataRepresentationConfigModel | undefined
  dataInput: ResponsiveDataInputConfigModel | undefined
  contentInjection: ResponsiveContentInjectionConfigModel | undefined

  // todo voeg conditie toe dat als je dimension hebt je ook setDimension moet hebben = partial interface eerst voor maken
  setDimensions: (dimensions: ResponsiveDimensioningConfigModel) => ComponentModel
  //setOverflow: (overflow: ResponsiveOverflowConfigModel) => ComponentModel
  setPosition: (pos: ResponsivePositioningConfigModel) => ComponentModel
  //setStyling: (styling: ResponsiveStylingConfigModel) => ComponentModel
  setVisibility: (visibility: ResponsiveVisibilityConfigModel) => ComponentModel
  setChildLayout: ((childLayout: ResponsiveChildLayoutConfigModel) => ComponentModel)|undefined
  setChildren: ((children: ComponentModel[]) => ComponentModel)|undefined
  setClientData: ((clientData: ClientData) => ComponentModel)|undefined
  setDataRepresentation: ((dataRepresentation: ResponsiveDataRepresentationConfigModel) => ComponentModel)|undefined
  setDataInput: ((dataInput: ResponsiveDataInputConfigModel) => ComponentModel)|undefined
  setContentInjection: ((contentInjection: ResponsiveContentInjectionConfigModel) => ComponentModel)|undefined
  setComponentSpecificConfig: ((attributes: ResponsiveTableConfigModel) => ComponentModel)|undefined
}
