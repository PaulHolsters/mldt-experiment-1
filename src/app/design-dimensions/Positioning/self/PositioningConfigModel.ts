import {
  CrossAxisHorizontalPositioningConfigType
} from "../../../enums/HorizontalColumnLayoutConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "../../../enums/VerticalRowLayoutConfigTypes.enum";
import {DisplayType} from "../../../enums/displayType.enum";
export class PositioningConfigModel {
  constructor(
    public display?:DisplayType,
    public selfAlign?:CrossAxisVerticalPositioningConfigType|CrossAxisHorizontalPositioningConfigType) {
    // todo add relative position
    // todo why TS accept some random interface here???
  }
}
