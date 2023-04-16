import {OverflowValueConfigType} from "../../../enums/overflowValueConfigTypes.enum";
import {OverflowChildConfigPropsModel} from "../children/OverflowChildConfigPropsModel";
export class OverflowConfigPropsModel {
  constructor(public overflow: OverflowValueConfigType|OverflowValueConfigType.NA,
              public horizontalOverflow: OverflowValueConfigType|OverflowValueConfigType.NA,
              public verticalOverflow: OverflowValueConfigType|OverflowValueConfigType.NA,
              public childOverflowConfig: OverflowChildConfigPropsModel|OverflowValueConfigType.NC|OverflowValueConfigType.NA) {
  }
}
