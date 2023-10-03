import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ComponentModel} from "../../design-dimensions/ComponentModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ClientDataConfigModel} from "../../design-dimensions/ClientData/ClientDataConfigModel";

import {
  TableDataRepresentationConfigModel
} from "../../design-dimensions/DataRepresentation/Table/TableDataRepresentationConfigModel";
import {
  TableContentInjectionConfigModel
} from "../../design-dimensions/ContentInjection/table/TableContentInjectionConfigModel";
import {
  ResponsiveStructuralTableConfigModel
} from "../../design-dimensions/StructuralConfig/table/ResponsiveStructuralTableConfigModel";
import {
  ResponsiveDataRepresentationTableConfigModel
} from "../../design-dimensions/DataRepresentation/Table/ResponsiveDataRepresentationTableConfigModel";
import {
  ResponsiveContentInjectionTableConfigModel
} from "../../design-dimensions/ContentInjection/table/ResponsiveContentInjectionTableConfigModel";
import {
  ResponsiveStylingTableConfigModel
} from "../../design-dimensions/Styling/table/ResponsiveStylingTableConfigModel";
import {TableStylingConfigModel} from "../../design-dimensions/Styling/table/TableStylingConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {
  ResponsiveTableLayoutConfigModel
} from "../../design-dimensions/ComponentSpecificLayout/Table/ResponsiveTableLayoutConfigModel";
import {NoValueYet} from "../../types/type-aliases";
import {ComponentModelType} from "../../types/union-types";
export class Table extends ComponentModel implements ComponentI<
  ResponsiveContentInjectionTableConfigModel,
  ResponsiveStructuralTableConfigModel,
  ResponsiveStylingTableConfigModel,
  ResponsiveTableLayoutConfigModel,
  undefined,
  ResponsiveDataRepresentationTableConfigModel>{
  name:string
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
  clientData: ClientDataConfigModel|NoValueYet=undefined
  setClientData(cd:ClientDataConfigModel|NoValueYet){
    this.clientData=cd
    return this
  }
  dataRepresentation = new ResponsiveDataRepresentationTableConfigModel(
      new TableDataRepresentationConfigModel()
  )
  setDataRepresentation(dr:ResponsiveDataRepresentationTableConfigModel){
    this.dataRepresentation=dr
    return this
  }
  contentInjection= new ResponsiveContentInjectionTableConfigModel(
    new TableContentInjectionConfigModel()
  )
  setContentInjection(ci:ResponsiveContentInjectionTableConfigModel){
    this.contentInjection=ci
    return this
  }
  styling: ResponsiveStylingTableConfigModel=new ResponsiveStylingTableConfigModel(
    new TableStylingConfigModel())
  setStyling(st:ResponsiveStylingTableConfigModel){
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

  componentSpecificLayout=new ResponsiveTableLayoutConfigModel()
  setComponentSpecificLayout(csl: ResponsiveTableLayoutConfigModel): ComponentModelType {
    this.componentSpecificLayout = csl
    return this
  }
  setStructural(str: ResponsiveStructuralTableConfigModel): ComponentModelType {
    this.structural = str
    return this
  }
  structural= new  ResponsiveStructuralTableConfigModel()
}
