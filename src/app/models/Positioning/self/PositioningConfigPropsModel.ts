import {CrossAxisRowPositioningConfigType} from "../../../enums/crossAxisRowPositioningConfigTypes.enum";
import {CrossAxisColumnPositioningConfigType} from "../../../enums/crossAxisColumnPositioningConfigTypes.enum";
import {PositioningChildrenConfigPropsModel} from "../children/PositioningChildrenConfigPropsModel";
export class PositioningConfigPropsModel {
  constructor(public childPositioning?:PositioningChildrenConfigPropsModel, public selfAlign?:CrossAxisRowPositioningConfigType|CrossAxisColumnPositioningConfigType) {
    // todo add relative position
    // todo why TS accept some random interface here???
  }
}
