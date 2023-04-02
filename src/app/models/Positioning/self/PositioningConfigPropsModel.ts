import {
  CrossAxisHorizontalPositioningConfigType
} from "../../../enums/crossAxisHorizontalPositioningConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "../../../enums/crossAxisVerticalPositioningConfigTypes.enum";
export class PositioningConfigPropsModel {
  constructor(public selfAlign?:CrossAxisVerticalPositioningConfigType|CrossAxisHorizontalPositioningConfigType) {
    // todo add relative position
    // todo why TS accept some random interface here???
  }
}
