import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
export class OverflowConfigPropsModel {
  constructor(public overflow?: OverflowValueConfigType,
              public horizontalOverflow?: OverflowValueConfigType,
              public verticalOverflow?: OverflowValueConfigType) {
    // todo
    if (overflow && (verticalOverflow || horizontalOverflow)) {
      throw new Error('Or you configure the overflow property or you use vertical/horizontal overflow property, but not both')
    }
  }
}
