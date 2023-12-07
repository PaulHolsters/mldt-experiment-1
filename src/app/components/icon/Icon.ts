import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ClientDataConfigModel} from "../../design-dimensions/ClientData/ClientDataConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {
  ResponsiveStructuralIconConfigModel
} from "../../design-dimensions/StructuralConfig/icon/ResponsiveStructuralIconConfigModel";
import {IconType} from "../../enums/iconType.enum";
import {IconStructuralConfigModel} from "../../design-dimensions/StructuralConfig/icon/IconStructuralConfigModel";
import {ComponentModelType} from "../../types/union-types";
import {ComponentType} from "../../enums/componentTypes.enum";
export class Icon implements ComponentI<
  undefined,
  ResponsiveStructuralIconConfigModel,
  undefined,
  undefined,
  undefined,
  undefined>{
  name:string
  type = ComponentType.Icon
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
  clientData: ClientDataConfigModel|undefined
  setClientData(cd:ClientDataConfigModel|undefined){
    this.clientData=cd
    return this
  }
  dataInput = undefined
  setDataInput = undefined

  children=undefined
  setChildren=undefined
  layout=undefined
  setLayout=undefined
  constructor(name:string,icon:IconType) {
    this.name = name
    this.structural = new ResponsiveStructuralIconConfigModel(new IconStructuralConfigModel(icon))
  }
  setStructural(str: ResponsiveStructuralIconConfigModel): ComponentModelType {
    this.structural = str
    return this
  }
  structural: ResponsiveStructuralIconConfigModel
  componentSpecificLayout= undefined
  contentInjection= undefined
  dataRepresentation= undefined
  setComponentSpecificLayout= undefined
  setContentInjection= undefined
  setDataRepresentation= undefined
  setStyling= undefined
  styling= undefined
}
