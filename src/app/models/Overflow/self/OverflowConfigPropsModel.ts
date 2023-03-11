import {OverflowValueConfigType} from "../../../enums/overflowValueConfigTypes.enum";
import {OverflowChildConfigPropsModel} from "../children/OverflowChildConfigPropsModel";
export class OverflowConfigPropsModel {
  constructor(public overflow?: OverflowValueConfigType,
              public horizontalOverflow?: OverflowValueConfigType,
              public verticalOverflow?: OverflowValueConfigType,
              public childOverflowConfig?: OverflowChildConfigPropsModel) {
    if (overflow && (verticalOverflow || horizontalOverflow)) {
      throw new Error('Or you configure the overflow property or you use vertical/horizontal overflow property, but not both')
    }
  }
}
