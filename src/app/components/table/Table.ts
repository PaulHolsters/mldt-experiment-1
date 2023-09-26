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
import {DataRepresentationConfigModel} from "../../design-dimensions/DataRepresentation/DataRepresentationConfigModel";
import {
  TableDataRepresentationConfigModel
} from "../../design-dimensions/DataRepresentation/Table/TableDataRepresentationConfigModel";
import {
  ResponsiveDataRepresentationConfigModel
} from "../../design-dimensions/DataRepresentation/ResponsiveDataRepresentationConfigModel";
import {
  ResponsiveContentInjectionConfigModel
} from "../../design-dimensions/ContentInjection/ResponsiveContentInjectionConfigModel";
import {ContentInjectionConfigModel} from "../../design-dimensions/ContentInjection/ContentInjectionConfigModel";
import {
  TableContentInjectionConfigModel
} from "../../design-dimensions/ContentInjection/table/TableContentInjectionConfigModel";
import {ResponsiveStylingConfigModel} from "../../design-dimensions/Styling/ResponsiveStylingConfigModel";
import {StylingConfigModel} from "../../design-dimensions/Styling/StylingConfigModel";
import {TableConfigModel} from "../../design-dimensions/StructuralConfig/table/TableConfigModel";
import {
  ResponsiveStructuralTableConfigModel
} from "../../design-dimensions/StructuralConfig/table/ResponsiveStructuralTableConfigModel";

export class Table<S extends TableConfigModel> extends ComponentModel implements ComponentI{
  // todo add conditional typing : prop required => set required too
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
  dataRepresentation: ResponsiveDataRepresentationConfigModel=new ResponsiveDataRepresentationConfigModel(
      new DataRepresentationConfigModel(
        new TableDataRepresentationConfigModel()
      )
  )
  setDataRepresentation(dr:ResponsiveDataRepresentationConfigModel){
    this.dataRepresentation=dr
    return this
  }
  contentInjection: ResponsiveContentInjectionConfigModel=new ResponsiveContentInjectionConfigModel(
    new ContentInjectionConfigModel(
      new TableContentInjectionConfigModel()
    )
  )
  setContentInjection(ci:ResponsiveContentInjectionConfigModel){
    this.contentInjection=ci
    return this
  }
  componentSpecificConfig: ResponsiveStructuralTableConfigModel=new ResponsiveStructuralTableConfigModel(
    new TableConfigModel()
  )
  setComponentSpecificConfig(cs:ResponsiveStructuralTableConfigModel){
    this.componentSpecificConfig=cs
    return this
  }
  styling: ResponsiveStylingConfigModel=new ResponsiveStylingConfigModel(
    new StylingConfigModel(
      new TableConfigModel()
    )
  )
  setStyling(st:ResponsiveStylingConfigModel){
    this.styling=st
    return this
  }

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
}
