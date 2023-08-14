import {PropertyName} from "../enums/PropertyNameTypes.enum";

export class ActionValueModel {
  // todo verander naam in RenderProperty
  constructor(
    public name:PropertyName,
    public value:any // todo werk weg!
  ) {
  }
}
