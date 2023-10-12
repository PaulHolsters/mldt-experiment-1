import {NoValueType} from "../../../enums/NoValueTypes.enum";


export class RadioButtonGroupDataInputConfigModel {
  public disabled: boolean = false
  setDisabled(disabled: boolean ) {
    this.disabled = disabled
    return this
  }
  constructor(public radioValues:{label:string,value:string}[]|NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE=NoValueType.SERVER_DATA_RELATED_DEFAULT_VALUE) {
  }
}
