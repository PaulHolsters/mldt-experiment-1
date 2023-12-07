import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ClientDataConfigModel} from "../../design-dimensions/ClientData/ClientDataConfigModel";
import {
  TableContentInjectionConfigModel
} from "../../design-dimensions/ContentInjection/table/TableContentInjectionConfigModel";
import {
  ResponsiveStructuralTableConfigModel
} from "../../design-dimensions/StructuralConfig/table/ResponsiveStructuralTableConfigModel";
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
import {ComponentModelType} from "../../types/union-types";
import {ComponentType} from "../../enums/componentTypes.enum";
export class Table implements ComponentI<
  ResponsiveContentInjectionTableConfigModel,
  ResponsiveStructuralTableConfigModel,
  ResponsiveStylingTableConfigModel,
  ResponsiveTableLayoutConfigModel,
  undefined,
  undefined>{
  name:string
  type=ComponentType.Table
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
  clientData: ClientDataConfigModel|undefined
  setClientData(cd:ClientDataConfigModel|undefined){
    this.clientData=cd
    return this
  }
  dataRepresentation:undefined
  setDataRepresentation:undefined
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
