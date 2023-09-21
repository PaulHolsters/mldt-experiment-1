import {ComponentI} from "../../Interfaces/ComponentI";
import {
  ResponsiveLayoutOverrideConfigModel
} from "../../design-dimensions/LayoutOverride/ResponsiveLayoutOverrideConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ComponentModel} from "../../design-dimensions/ComponentModel";
import {
  ResponsiveContainerChildLayoutConfigModel
} from "../../design-dimensions/Layout/Container/ResponsiveContainerChildLayoutConfigModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ScreenSize} from "../../enums/screenSizes.enum";
import {SizeConfigModel} from "../../design-dimensions/Size/SizeConfigModel";
import {ChildLayoutConfigModel} from "../../design-dimensions/Layout/Container/ChildLayoutConfigModel";

export class ContainerModel extends ComponentModel implements ComponentI{
  // todo add conditional typing : prop required => set required too
  // todo zorg dat de set method onmiddellijk een bepaald scherm kan targetten
  public name:string
  public spacing:ResponsiveSpacingConfigModel = new ResponsiveSpacingConfigModel()
  public setSpacing(spacing:ResponsiveSpacingConfigModel){
    this.spacing = spacing
    return this
  }
  public visibility: ResponsiveVisibilityConfigModel = new ResponsiveVisibilityConfigModel()
  public setVisibility(visibility:ResponsiveVisibilityConfigModel){
    this.visibility = visibility
    return this
  }
  public layout: ResponsiveContainerChildLayoutConfigModel = new ResponsiveContainerChildLayoutConfigModel()
  setLayout(screensize:ScreenSize,childLayout:ChildLayoutConfigModel){
    switch (screensize){
      case ScreenSize.smartphone:
        this.layout.smartphone = childLayout
    }
    return this
  }
  public children: ComponentModel[]=[]
  setChildren(children:ComponentModel[]){
    this.children = children
    return this
  }
  public size: ResponsiveSizeConfigModel= new ResponsiveSizeConfigModel()
  setSize(screensize:ScreenSize,size:SizeConfigModel){
    switch (screensize){
      case ScreenSize.smartphone:
        this.size.smartphone = size
    }
    return this
  }
  public overflow: ResponsiveOverflowConfigModel = new ResponsiveOverflowConfigModel()
  setOverflow(overflow:ResponsiveOverflowConfigModel){
    this.overflow = overflow
    return this
  }
  public layoutOverride: ResponsiveLayoutOverrideConfigModel = new ResponsiveLayoutOverrideConfigModel()
  public setLayoutOverride(lo:ResponsiveLayoutOverrideConfigModel){
    this.layoutOverride=lo
    return this
  }
  public styling = undefined
  public setStyling=undefined
  public clientData: undefined = undefined
  public setClientData:undefined = undefined
  public dataRepresentation: undefined = undefined
  public setDataRepresentation:undefined = undefined
  public dataInput: undefined = undefined
  public setDataInput:undefined = undefined
  public contentInjection: undefined = undefined
  public setContentInjection:undefined = undefined
  public componentSpecificConfig: undefined = undefined
  public setComponentSpecificConfig:undefined=undefined
  constructor(name:string) {
    super()
    this.name = name
  }
}
