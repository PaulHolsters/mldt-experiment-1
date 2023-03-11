import {OverflowValueConfigType} from "../../../enums/overflowValueConfigTypes.enum";
export class OverflowChildConfigPropsModel {
  constructor(public overflow?: OverflowValueConfigType,
              public horizontalOverflow?: OverflowValueConfigType,
              public verticalOverflow?: OverflowValueConfigType) {
    if (overflow && (verticalOverflow || horizontalOverflow)) {
      throw new Error('Or you configure the overflow property or you use vertical/horizontal overflow property, but not both')
    }
    if(!overflow && ! horizontalOverflow && !verticalOverflow) throw new Error('At least one of three needs to be set: overflow, horizontalOverflow or verticalOverflow')
  }
}
