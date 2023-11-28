import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ComponentModel} from "../../design-dimensions/ComponentModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ClientDataConfigModel} from "../../design-dimensions/ClientData/ClientDataConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {
  ResponsiveContentInjectionMenubarConfigModel
} from "../../design-dimensions/ContentInjection/menubar/ResponsiveContentInjectionMenubarConfigModel";
import {
  ResponsiveStructuralMenubarConfigModel
} from "../../design-dimensions/StructuralConfig/menubar/ResponsiveStructuralMenubarConfigModel";
import {
  MenubarContentInjectionConfigModel
} from "../../design-dimensions/ContentInjection/menubar/MenubarContentInjectionConfigModel";
export class Menubar extends ComponentModel implements ComponentI<
  ResponsiveContentInjectionMenubarConfigModel,
  ResponsiveStructuralMenubarConfigModel,
  undefined,
  undefined,
  undefined,
  undefined>{
  name:string
  type=ComponentType.Menubar
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
  dataRepresentation:undefined
  setDataRepresentation:undefined
  contentInjection= new ResponsiveContentInjectionMenubarConfigModel(
    new MenubarContentInjectionConfigModel()
  )
  setContentInjection(ci:ResponsiveContentInjectionMenubarConfigModel){
    this.contentInjection=ci
    return this
  }
  styling=undefined
  setStyling=undefined
  dataInput = undefined
  setDataInput = undefined
  children=undefined
  setChildren=undefined
  layout=undefined
  setLayout=undefined
  constructor(name:string) {
    super()
    this.name = name
  }

  componentSpecificLayout=undefined
  setComponentSpecificLayout=undefined
  setStructural(str: ResponsiveStructuralMenubarConfigModel) {
    this.structural = str
    return this
  }
  structural= new  ResponsiveStructuralMenubarConfigModel()
}
