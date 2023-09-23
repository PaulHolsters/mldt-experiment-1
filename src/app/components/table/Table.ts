import {ComponentI} from "../../Interfaces/ComponentI";
import {
  ResponsiveLayoutOverrideConfigModel
} from "../../design-dimensions/LayoutOverride/ResponsiveLayoutOverrideConfigModel";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ComponentModel} from "../../design-dimensions/ComponentModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ClientDataConfigModel} from "../../design-dimensions/ClientData/ClientDataConfigModel";
import {ZeroValueType} from "../../enums/zeroValueTypes.enum";

export class Table extends ComponentModel implements ComponentI{
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
  clientData: ClientDataConfigModel|ZeroValueType.NoValueYet=ZeroValueType.NoValueYet
  setClientData(cd:ClientDataConfigModel|ZeroValueType.NoValueYet){
    this.clientData=cd
    return this
  }
  dataRepresentation: undefined = undefined
  setDataRepresentation:undefined = undefined
  dataInput: undefined = undefined
  setDataInput:undefined = undefined



  styling = undefined
  setStyling=undefined
  children=undefined
  setChildren=undefined
  layout=undefined
  setLayout=undefined

  contentInjection: undefined = undefined
  setContentInjection:undefined = undefined
  componentSpecificConfig: undefined = undefined
  setComponentSpecificConfig:undefined=undefined
  constructor(name:string) {
    super()
    this.name = name
  }
}
