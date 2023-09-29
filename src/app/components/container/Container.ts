import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ComponentModel} from "../../design-dimensions/ComponentModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ScreenSize} from "../../enums/screenSizes.enum";
export class Container extends ComponentModel implements ComponentI{
  // todo add conditional typing : prop required => set required too
  // todo zorg dat de set method onmiddellijk een bepaald scherm kan targetten
  name:string
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
  layout: ResponsiveContainerChildLayoutConfigModel = new ResponsiveContainerChildLayoutConfigModel()
  setLayout(screensize:ScreenSize,childLayout:ChildLayoutConfigModel){
    switch (screensize){
      case ScreenSize.smartphone:
        this.layout.smartphone = childLayout
    }
    return this
  }
  children: ComponentModel[]=[]
  setChildren(children:ComponentModel[]){
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
  layoutOverride: ResponsiveLayoutOverrideConfigModel = new ResponsiveLayoutOverrideConfigModel()
  setLayoutOverride(lo:ResponsiveLayoutOverrideConfigModel){
    this.layoutOverride=lo
    return this
  }
  styling = undefined
  setStyling=undefined
  clientData: undefined = undefined
  setClientData:undefined = undefined
  dataRepresentation: undefined = undefined
  setDataRepresentation:undefined = undefined
  dataInput: undefined = undefined
  setDataInput:undefined = undefined
  contentInjection: undefined = undefined
  setContentInjection:undefined = undefined
  componentSpecificConfig: undefined = undefined
  setComponentSpecificConfig:undefined=undefined
  constructor(name:string) {
    super()
    this.name = name
  }
}
