import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ComponentModel} from "../../design-dimensions/ComponentModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ComponentI} from "../../Interfaces/ComponentI";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {
  ResponsiveContentInjectionDialogConfigModel
} from "../../design-dimensions/ContentInjection/dialog/ResponsiveContentInjectionDialogConfigModel";
import {
  DialogContentInjectionConfigModel
} from "../../design-dimensions/ContentInjection/dialog/DialogContentInjectionConfigModel";
import {
  ResponsiveContentInjectionFormConfigModel
} from "../../design-dimensions/ContentInjection/form/ResponsiveContentInjectionFormConfigModel";
import {
  FormContentInjectionConfigModel
} from "../../design-dimensions/ContentInjection/form/FormContentInjectionConfigModel";

export class Form extends ComponentModel implements ComponentI<
  ResponsiveContentInjectionFormConfigModel,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined>{
  constructor(name:string) {
    super()
    this.name = name
  }
  name:string
  type=ComponentType.Form
  spacing = new ResponsiveSpacingConfigModel()
  setSpacing(spacing:ResponsiveSpacingConfigModel){
    this.spacing = spacing
    return this
  }
  contentInjection = new ResponsiveContentInjectionFormConfigModel(new FormContentInjectionConfigModel())
  setContentInjection(ci:ResponsiveContentInjectionFormConfigModel){
    this.contentInjection=ci
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
  setStructural=undefined
  structural= undefined
  setStyling=undefined
  styling = undefined
  componentSpecificLayout: undefined
  clientData = undefined
  setClientData = undefined
  setComponentSpecificLayout: undefined
  children=undefined
  setChildren=undefined
  dataInput: undefined;
  dataRepresentation: undefined;
  setDataInput: undefined;
  setDataRepresentation: undefined;
}
// todo: in abstracte classe alle props
// todo: in concrete UI backend conformeren
// todo: controleer dat je de prijs kan vormgeven in de frontend met de bedoelde config
