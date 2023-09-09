import {ComponentModel} from "../ComponentModel";
import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsivePositioningConfigModel} from "../Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveAttributesConfigModel} from "../Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveVisibilityConfigModel} from "../Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveStylingConfigModel} from "../Styling/ResponsiveStylingConfigModel";
import {ResponsiveOverflowConfigModel} from "../Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveChildLayoutConfigModel} from "../ChildLayout/ResponsiveChildLayoutConfigModel";
import {ResponsiveDimensioningConfigModel} from "../Dimensioning/self/ResponsiveDimensioningConfigModel";
export class ContainerModel extends ComponentModel implements ComponentI{
  public name:string
  public attributes: ResponsiveAttributesConfigModel | undefined = undefined
  public childLayout: ResponsiveChildLayoutConfigModel = new ResponsiveChildLayoutConfigModel()
  public children: ComponentModel[]=[]
  public clientData: undefined = undefined
  public contentInjection: undefined = undefined
  public dataInput: undefined = undefined
  public dataRepresentation: undefined = undefined
  public dimensions: ResponsiveDimensioningConfigModel = new ResponsiveDimensioningConfigModel()
  public overflow: ResponsiveOverflowConfigModel = new ResponsiveOverflowConfigModel()
  public position: ResponsivePositioningConfigModel = new ResponsivePositioningConfigModel()
  public styling: ResponsiveStylingConfigModel = new ResponsiveStylingConfigModel()
  public visibility: ResponsiveVisibilityConfigModel = new ResponsiveVisibilityConfigModel()
  public setClientData:undefined = undefined
  public setDataRepresentation:undefined = undefined
  public setDataInput:undefined = undefined
  public setContentInjection:undefined = undefined
  constructor(name:string) {
    super()
    this.name = name
  }
  setAttributes(attributes:ResponsiveAttributesConfigModel){
    this.attributes = attributes
    return this
  }
  setChildLayout(childLayout:ResponsiveChildLayoutConfigModel){
    this.childLayout = childLayout
    return this
  }
  setChildren(children:ComponentModel[]){
    this.children = children
    return this
  }
  setDimensions(dim:ResponsiveDimensioningConfigModel){
    this.dimensions = dim
    return this
  }
  setOverflow(overflow:ResponsiveOverflowConfigModel){
    this.overflow = overflow
    return this
  }
  setPosition(pos:ResponsivePositioningConfigModel){
    this.position = pos
    return this
  }
  setStyling(styling:ResponsiveStylingConfigModel){
    this.styling = styling
    return this
  }
  setVisibility(visibility:ResponsiveVisibilityConfigModel){
    this.visibility = visibility
    return this
  }
}
