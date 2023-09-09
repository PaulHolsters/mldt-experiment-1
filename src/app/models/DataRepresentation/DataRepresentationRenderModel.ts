import {RestrictionType} from "../../enums/restrictionType.enum";

export class DataRepresentationRenderModel {
constructor(
  // todo al deze props geven andere render props zoals keyFilter bij een textInput
  public only:RestrictionType[]|RestrictionType.NI=RestrictionType.NI,
  public customRestriction:RegExp|RestrictionType.NA=RestrictionType.NA,
  ) {
}
}
