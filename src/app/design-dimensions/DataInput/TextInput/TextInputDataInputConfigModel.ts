import {RestrictionType} from "../../../enums/restrictionType.enum";
export class TextInputDataInputConfigModel {
  constructor(public restrictions:RestrictionType[]|RegExp) {
  }
}
