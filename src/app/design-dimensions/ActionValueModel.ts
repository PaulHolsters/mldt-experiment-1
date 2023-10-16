import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {ActionValueType} from "../types/union-types";

export class ActionValueModel {
  // todo verander naam in RenderProperty
  constructor(
    public name:PropertyName,
    public value:ActionValueType // todo werk weg!
  ) {
  }
}
