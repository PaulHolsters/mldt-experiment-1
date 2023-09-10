import {
  CrossAxisHorizontalPositioningConfigType
} from "../../../enums/crossAxisHorizontalLayoutConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "../../../enums/crossAxisVerticalLayoutConfigTypes.enum";
import {DisplayType} from "../../../enums/displayType.enum";
export class PositioningConfigPropsModel {
  constructor(
    public display?:DisplayType,
    public selfAlign?:CrossAxisVerticalPositioningConfigType|CrossAxisHorizontalPositioningConfigType) {
    // todo add relative position
    // todo why TS accept some random interface here???
  }
}
