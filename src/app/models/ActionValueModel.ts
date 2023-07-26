import {PropertyName} from "../enums/PropertyNameTypes.enum";

export class ActionValueModel {
  constructor(
    public name:PropertyName,
    public value:any
  ) {
  }
}
