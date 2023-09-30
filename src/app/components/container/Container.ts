import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ComponentModel} from "../../design-dimensions/ComponentModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {
  ResponsiveContainerChildLayoutConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ResponsiveContainerChildLayoutConfigModel";
export class Container extends ComponentModel implements ComponentI<undefined,undefined,undefined,ResponsiveContainerChildLayoutConfigModel,undefined,undefined>{
  // todo add conditional typing : prop required => set required too
  // todo zorg dat de set method onmiddellijk een bepaald scherm kan targetten
  name:string
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
  children: ComponentModel[]=[]
  setChildren(children:ComponentModel[]){
    this.children = children
    return this
  }
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
  clientData= undefined
  setClientData=undefined
  componentSpecificLayout = new ResponsiveContainerChildLayoutConfigModel()
  setComponentSpecificLayout(csl: ResponsiveContainerChildLayoutConfigModel): ComponentModel {
    this.componentSpecificLayout = csl
    return this
  }
  contentInjection = undefined
  dataInput = undefined
  dataRepresentation = undefined;
  individualLayout = new  ResponsiveIndividualLayoutConfigModel()
  setIndividualLayout(il: ResponsiveIndividualLayoutConfigModel): ComponentModel {
    this.individualLayout = il
    return this
  }
  setContentInjection = undefined
  setDataInput = undefined
  setDataRepresentation = undefined
  setStructural = undefined
  setStyling = undefined
  structural = undefined
  styling = undefined
}
