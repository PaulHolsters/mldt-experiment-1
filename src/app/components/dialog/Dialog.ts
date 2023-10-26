import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ComponentModel} from "../../design-dimensions/ComponentModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {
  ResponsiveContentInjectionDialogConfigModel
} from "../../design-dimensions/ContentInjection/dialog/ResponsiveContentInjectionDialogConfigModel";
import {
  DialogContentInjectionConfigModel
} from "../../design-dimensions/ContentInjection/dialog/DialogContentInjectionConfigModel";
import {
  ResponsiveStructuralDialogConfigModel
} from "../../design-dimensions/StructuralConfig/dialog/ResponsiveStructuralDialogConfigModel";
import {DialogStructuralConfigModel} from "../../design-dimensions/StructuralConfig/dialog/DialogStructuralConfigModel";
export class Dialog extends ComponentModel implements ComponentI<
  ResponsiveContentInjectionDialogConfigModel,
  ResponsiveStructuralDialogConfigModel,
  undefined,
  undefined,
  undefined,
  undefined>{
  constructor(name:string) {
    super()
    this.name = name
  }
  name:string
  type=ComponentType.Button
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
  structural= new ResponsiveStructuralDialogConfigModel(new DialogStructuralConfigModel())
  setStructural(s:ResponsiveStructuralDialogConfigModel){
    this.structural = s
    return this
  }
  setStyling = undefined
  styling = undefined
  componentSpecificLayout: undefined
  contentInjection = new ResponsiveContentInjectionDialogConfigModel(new DialogContentInjectionConfigModel())
  setContentInjection(ci:ResponsiveContentInjectionDialogConfigModel){
    this.contentInjection=ci
    return this
  }
  dataRepresentation: undefined
  setComponentSpecificLayout: undefined

  setDataRepresentation: undefined
  clientData = undefined
  setClientData = undefined
  dataInput = undefined
  setDataInput = undefined
  children=undefined
  setChildren=undefined
}
