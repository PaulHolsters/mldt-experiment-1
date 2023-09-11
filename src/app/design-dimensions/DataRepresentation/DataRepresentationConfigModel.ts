import {RestrictionType} from "../../enums/restrictionType.enum";

export class DataRepresentationConfigModel {
constructor(
  public only:RestrictionType[]|RestrictionType.NI=RestrictionType.NI,
  public customRestriction:RegExp|RestrictionType.NA=RestrictionType.NA,
  ) {
}
}
