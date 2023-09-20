import {ComponentI} from "../../Interfaces/ComponentI";
import {
  ResponsiveLayoutOverrideConfigModel
} from "../../design-dimensions/LayoutOverride/ResponsiveLayoutOverrideConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ComponentModel} from "../../design-dimensions/ComponentModel";
import {ResponsiveContainerChildLayoutConfigModel} from "../../design-dimensions/Layout/Container/ResponsiveContainerChildLayoutConfigModel";
import {
  ResponsiveSizeConfigModel
} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";

export class ContainerModel extends ComponentModel implements ComponentI{
  public name:string
  public componentSpecificConfig: undefined = undefined
  public setComponentSpecificConfig:undefined=undefined
  public labelConfig: undefined = undefined
  public setLabelConfig:undefined=undefined
  public iconConfig: undefined = undefined
  public setIconConfig:undefined=undefined
  public layout: ResponsiveContainerChildLayoutConfigModel = new ResponsiveContainerChildLayoutConfigModel()
  public children: ComponentModel[]=[]
  public clientData: undefined = undefined
  public contentInjection: undefined = undefined
  public dataInput: undefined = undefined
  public dataRepresentation: undefined = undefined
  public size: ResponsiveSizeConfigModel= new ResponsiveSizeConfigModel()
  public overflow: ResponsiveOverflowConfigModel = new ResponsiveOverflowConfigModel()
  public position: ResponsiveLayoutOverrideConfigModel = new ResponsiveLayoutOverrideConfigModel()
  //public styling: ResponsiveStylingConfigModel = new ResponsiveStylingConfigModel()
  public visibility: ResponsiveVisibilityConfigModel = new ResponsiveVisibilityConfigModel()
  public setClientData:undefined = undefined
  public setDataRepresentation:undefined = undefined
  public setDataInput:undefined = undefined
  public setContentInjection:undefined = undefined
  constructor(name:string) {
    super()
    this.name = name
  }
  setLayout(childLayout:ResponsiveContainerChildLayoutConfigModel){
    this.layout = childLayout
    return this
  }
  setChildren(children:ComponentModel[]){
    this.children = children
    return this
  }
  setSize(size:ResponsiveSizeConfigModel){
    this.size = size
    return this
  }
  setOverflow(overflow:ResponsiveOverflowConfigModel){
    this.overflow = overflow
    return this
  }
  setPosition(pos:ResponsiveLayoutOverrideConfigModel){
    this.position = pos
    return this
  }
/*  setStyling(styling:ResponsiveStylingConfigModel){
    this.styling = styling
    return this
  }*/
  setVisibility(visibility:ResponsiveVisibilityConfigModel){
    this.visibility = visibility
    return this
  }
}
