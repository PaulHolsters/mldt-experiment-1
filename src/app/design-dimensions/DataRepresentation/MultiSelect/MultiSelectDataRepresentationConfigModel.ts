import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class MultiSelectDataRepresentationConfigModel {
  public optionLabel:string|NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE=NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE
  public optionValue:string='id'
  public placeholder:string|NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE=NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE // Select a WAARDE optionLabel
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
