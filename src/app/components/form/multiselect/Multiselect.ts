import {ComponentModel} from "../../../design-dimensions/ComponentModel";
import {ComponentI} from "../../../Interfaces/ComponentI";
import {ResponsiveSpacingConfigModel} from "../../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ComponentModelType} from "../../../types/union-types";
import {ResponsiveSizeConfigModel} from "../../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {
  ResponsiveDataRepresentationMultiSelectConfigModel
} from "../../../design-dimensions/DataRepresentation/MultiSelect/ResponsiveDataRepresentationMultiSelectConfigModel";
import {ClientDataConfigModel} from "../../../design-dimensions/ClientData/ClientDataConfigModel";
import {ComponentType} from "../../../enums/componentTypes.enum";

export class Multiselect extends ComponentModel
  implements ComponentI<undefined,undefined,undefined,undefined,
    undefined,ResponsiveDataRepresentationMultiSelectConfigModel>{
  // todo add conditional typing : prop required => set required too
  // todo zorg dat de set method onmiddellijk een bepaald scherm kan targetten
  name:string
  type = ComponentType.MultiSelect
  spacing:ResponsiveSpacingConfigModel = new ResponsiveSpacingConfigModel()
  setSpacing(spacing:ResponsiveSpacingConfigModel){
    this.spacing = spacing
    return this
  }
  visibility: ResponsiveVisibilityConfigModel = new ResponsiveVisibilityConfigModel()
  setVisibility(visibility:ResponsiveVisibilityConfigModel){
    this.visibility = visibility
    return this
  }
  children = undefined
  setChildren = undefined
  size: ResponsiveSizeConfigModel= new ResponsiveSizeConfigModel()
  setSize(size:ResponsiveSizeConfigModel){
    this.size = size
    return this
  }
  overflow: ResponsiveOverflowConfigModel = new ResponsiveOverflowConfigModel()
  setOverflow(overflow:ResponsiveOverflowConfigModel){
    this.overflow = overflow
    return this
  }
  constructor(name:string) {
    super()
    this.name = name
  }
  clientData: ClientDataConfigModel|undefined
  setClientData(cd:ClientDataConfigModel|undefined){
    this.clientData=cd
    return this
  }
  componentSpecificLayout=undefined
  setComponentSpecificLayout=undefined
  contentInjection = undefined
  dataInput = undefined
  setDataInput=undefined
  dataRepresentation = new ResponsiveDataRepresentationMultiSelectConfigModel()
  setDataRepresentation(dr:ResponsiveDataRepresentationMultiSelectConfigModel){
    this.dataRepresentation = dr
    return this
  }
  individualLayout = new  ResponsiveIndividualLayoutConfigModel()
  setIndividualLayout(il: ResponsiveIndividualLayoutConfigModel): ComponentModelType {
    this.individualLayout = il
    return this
  }
  setContentInjection = undefined
  setStructural = undefined
  setStyling = undefined
  structural = undefined
  styling = undefined
}
