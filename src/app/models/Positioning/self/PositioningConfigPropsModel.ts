import {
  CrossAxisHorizontalConfigType
} from "../../../enums/crossAxisHorizontalConfigTypes.enum";
import {CrossAxisVerticalConfigType} from "../../../enums/crossAxisVerticalConfigTypes.enum";
export class PositioningConfigPropsModel {
  constructor(public selfAlign?:CrossAxisVerticalConfigType|CrossAxisHorizontalConfigType) {
    // todo add relative position
    // todo why TS accept some random interface here???
  }
}
