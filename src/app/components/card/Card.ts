import {ComponentI} from "../../Interfaces/ComponentI";
import {ResponsiveVisibilityConfigModel} from "../../design-dimensions/Visibility/ResponsiveVisibilityConfigModel";
import {ResponsiveSizeConfigModel} from "../../design-dimensions/Size/ResponsiveSizeConfigModel";
import {ResponsiveOverflowConfigModel} from "../../design-dimensions/Overflow/ResponsiveOverflowConfigModel";
import {ResponsiveSpacingConfigModel} from "../../design-dimensions/Spacing/ResponsiveSpacingConfigModel";
import {ClientDataConfigModel} from "../../design-dimensions/ClientData/ClientDataConfigModel";
import {
  ResponsiveIndividualLayoutConfigModel
} from "../../design-dimensions/IndividualLayout/ResponsiveIndividualLayoutConfigModel";
import {ComponentType} from "../../enums/componentTypes.enum";
import {
  ResponsiveContentInjectionCardConfigModel
} from "../../design-dimensions/ContentInjection/card/ResponsiveContentInjectionCardConfigModel";
import {
  CardContentInjectionConfigModel
} from "../../design-dimensions/ContentInjection/card/CardContentInjectionConfigModel";
import {ComponentModelType} from "../../types/union-types";
import {
  ResponsiveStructuralCardConfigModel
} from "../../design-dimensions/StructuralConfig/card/ResponsiveStructuralCardConfigModel";
import {ResponsiveStylingCardConfigModel} from "../../design-dimensions/Styling/card/ResponsiveStylingCardConfigModel";
export class Card implements ComponentI<
  ResponsiveContentInjectionCardConfigModel,
  ResponsiveStructuralCardConfigModel,
  ResponsiveStylingCardConfigModel,
  undefined,
  undefined,
  undefined>{
  name:string
  type=ComponentType.Card
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
  contentInjection= new ResponsiveContentInjectionCardConfigModel(
    new CardContentInjectionConfigModel()
  )
  setContentInjection(ci:ResponsiveContentInjectionCardConfigModel){
    this.contentInjection=ci
    return this
  }
  styling=new ResponsiveStylingCardConfigModel()
  setStyling(st:ResponsiveStylingCardConfigModel){
    this.styling = st
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
  componentSpecificLayout=undefined
  setComponentSpecificLayout=undefined
  setStructural(str: ResponsiveStructuralCardConfigModel): ComponentModelType {
    this.structural = str
    return this
  }
  structural= new ResponsiveStructuralCardConfigModel()
}
