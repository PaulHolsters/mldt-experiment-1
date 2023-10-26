import {
  ResponsiveDataInputTextInputConfigModel
} from "../../../design-dimensions/DataInput/TextInput/ResponsiveDataInputTextInputConfigModel";
import {
  ResponsiveDataRepresentationTextInputConfigModel
} from "../../../design-dimensions/DataRepresentation/TextInput/ResponsiveDataRepresentationTextInputConfigModel";
import {ComponentType} from "../../../enums/componentTypes.enum";
import {ResponsiveVisibilityConfigModel} from "../../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveSpacingConfigModel} from "../../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ComponentModel} from "../../../design-dimensions/ComponentModel";
import {ResponsiveOverflowConfigModel} from "../../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ComponentI} from "../../../Interfaces/ComponentI";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {ResponsiveSizeConfigModel} from "../../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {
  TextInputDataRepresentationConfigModel
} from "../../../design-dimensions/DataRepresentation/TextInput/TextInputDataRepresentationConfigModel";
import {
  TextInputDataInputConfigModel
} from "../../../design-dimensions/DataInput/TextInput/TextInputDataInputConfigModel";
export class TextInput extends ComponentModel implements ComponentI<
  undefined,
  undefined,
  undefined,
  undefined,
  ResponsiveDataInputTextInputConfigModel,
  ResponsiveDataRepresentationTextInputConfigModel>{
  constructor(name:string) {
    super()
    this.name = name
  }
  name:string
  type=ComponentType.TextInput
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
  setStructural=undefined
  structural= undefined
  setStyling=undefined
  styling = undefined
  componentSpecificLayout: undefined
  contentInjection: undefined
  clientData = undefined
  setClientData = undefined
  setComponentSpecificLayout: undefined
  setContentInjection: undefined
  dataRepresentation = new ResponsiveDataRepresentationTextInputConfigModel(new TextInputDataRepresentationConfigModel())
  setDataRepresentation(tidr:ResponsiveDataRepresentationTextInputConfigModel){
    this.dataRepresentation = tidr
    return this
  }
  dataInput = new ResponsiveDataInputTextInputConfigModel(new TextInputDataInputConfigModel())
  setDataInput(tidi:ResponsiveDataInputTextInputConfigModel){
    this.dataInput = tidi
    return this
  }
  children=undefined
  setChildren=undefined
}
