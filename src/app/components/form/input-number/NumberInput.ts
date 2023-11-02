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
import {
  ResponsiveDataInputNumberInputConfigModel
} from "../../../design-dimensions/DataInput/NumberInput/ResponsiveDataInputNumberInputConfigModel";
import {
  ResponsiveDataRepresentationNumberInputConfigModel
} from "../../../design-dimensions/DataRepresentation/NumberInput/ResponsiveDataRepresentationNumberInputConfigModel";
import {
  NumberInputDataRepresentationConfigModel
} from "../../../design-dimensions/DataRepresentation/NumberInput/NumberInputDataRepresentationConfigModel";
import {
  NumberInputDataInputConfigModel
} from "../../../design-dimensions/DataInput/NumberInput/NumberInputDataInputConfigModel";
export class NumberInput extends ComponentModel implements ComponentI<
  undefined,
  undefined,
  undefined,
  undefined,
  ResponsiveDataInputNumberInputConfigModel,
  ResponsiveDataRepresentationNumberInputConfigModel>{
  constructor(name:string) {
    super()
    this.name = name
  }
  name:string
  type=ComponentType.NumberInput
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
  dataRepresentation = new ResponsiveDataRepresentationNumberInputConfigModel(new NumberInputDataRepresentationConfigModel())
  setDataRepresentation(tidr:ResponsiveDataRepresentationNumberInputConfigModel){
    this.dataRepresentation = tidr
    return this
  }
  dataInput = new ResponsiveDataInputNumberInputConfigModel(new NumberInputDataInputConfigModel())
  setDataInput(tidi:ResponsiveDataInputNumberInputConfigModel){
    this.dataInput = tidi
    return this
  }
  children=undefined
  setChildren=undefined
}
// todo: in abstracte classe alle props
// todo: in concrete UI backend conformeren
// todo: controleer dat je de prijs kan vormgeven in de frontend met de bedoelde config
