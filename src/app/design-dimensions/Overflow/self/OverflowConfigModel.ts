import {OverflowValueConfigType} from "../../../enums/overflowValueConfigTypes.enum";
import {OverflowChildConfigPropsModel} from "../children/OverflowChildConfigPropsModel";
export class OverflowConfigModel {
  constructor(public overflow: OverflowValueConfigType,
              public horizontalOverflow: OverflowValueConfigType) {
  }
}
