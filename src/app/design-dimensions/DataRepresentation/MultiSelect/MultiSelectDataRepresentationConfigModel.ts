import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class MultiSelectDataRepresentationConfigModel {
  public optionLabel:string|NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE=NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE
  public optionValue:string|NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE=NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE
  public placeholder:string|NoValueType.DEFAULT_VALUE_DETERMINED_BY_ENGINE|NoValueType.NO_VALUE_NEEDED=NoValueType.DEFAULT_VALUE_DETERMINED_BY_ENGINE
  constructor() {
  }
  setOptionLabel(optionLabel:string|NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE) {
    this.optionLabel = optionLabel
    return this
  }
  setPlaceholder(ph:string|NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE) {
    this.placeholder = ph
    return this
  }
}
