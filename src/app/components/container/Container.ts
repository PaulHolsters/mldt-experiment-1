import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {
  ResponsiveContainerChildLayoutConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ComponentModelType} from "../../types/union-types";
import {ComponentType} from "../../enums/componentTypes.enum";
export class Container implements ComponentI<undefined,undefined,undefined,ResponsiveContainerChildLayoutConfigModel,undefined,undefined>{
  // todo add conditional typing : prop required => set required too
  // todo zorg dat de set method onmiddellijk een bepaald scherm kan targetten
  name:string
  type=ComponentType.Container
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
  children: ComponentModelType[]=[]
  setChildren(children:ComponentModelType[]){
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
    this.name = name
  }
  clientData= undefined
  setClientData=undefined
  componentSpecificLayout = new ResponsiveContainerChildLayoutConfigModel()
  setComponentSpecificLayout(csl: ResponsiveContainerChildLayoutConfigModel): ComponentModelType {
    this.componentSpecificLayout = csl
    return this
  }
  contentInjection = undefined
  dataInput = undefined
  dataRepresentation = undefined;
  individualLayout = new  ResponsiveIndividualLayoutConfigModel()
  setIndividualLayout(il: ResponsiveIndividualLayoutConfigModel): ComponentModelType {
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
