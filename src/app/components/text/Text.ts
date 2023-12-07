import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {ComponentModelType} from "../../types/union-types";
import {ComponentType} from "../../enums/componentTypes.enum";
import {
  ResponsiveStructuralTextConfigModel
} from "../../design-dimensions/StructuralConfig/Text/ResponsiveStructuralTextConfigModel";
export class Text implements ComponentI<
  undefined,
  ResponsiveStructuralTextConfigModel,
  undefined,
  undefined,
  undefined,
  undefined>{
  constructor(name:string) {
    this.name = name
  }
  name:string
  type=ComponentType.Text
  spacing = new ResponsiveSpacingConfigModel()
  setSpacing(spacing:ResponsiveSpacingConfigModel){
    this.spacing = spacing
    return this
  }
  visibility = new ResponsiveVisibilityConfigModel()
  setVisibility(visibility:ResponsiveVisibilityConfigModel){
    this.visibility = visibility
    return this
  }
  size = new ResponsiveSizeConfigModel()
  setSize(size:ResponsiveSizeConfigModel){
    this.size = size
    return this
  }
  overflow = new ResponsiveOverflowConfigModel()
  setOverflow(overflow:ResponsiveOverflowConfigModel){
    this.overflow = overflow
    return this
  }
  individualLayout = new ResponsiveIndividualLayoutConfigModel()
  setIndividualLayout(il:ResponsiveIndividualLayoutConfigModel){
    this.individualLayout=il
    return this
  }

  setStructural(str: ResponsiveStructuralTextConfigModel): ComponentModelType {
    this.structural = str
    return this
  }
  structural= new ResponsiveStructuralTextConfigModel()
  setStyling:undefined
  styling:undefined
  componentSpecificLayout: undefined
  contentInjection: undefined
  dataRepresentation: undefined
  setComponentSpecificLayout: undefined
  setContentInjection: undefined
  setDataRepresentation: undefined
  clientData = undefined
  setClientData = undefined
  dataInput = undefined
  setDataInput = undefined
  children=undefined
  setChildren=undefined
}
