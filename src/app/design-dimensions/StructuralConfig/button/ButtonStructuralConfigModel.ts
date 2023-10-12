import {IconConfigModel} from "./IconConfigModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class ButtonStructuralConfigModel {
  public label:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public icon:IconConfigModel|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public disabled: boolean = false
  constructor(){
  }
  setLabel(label:string|NoValueType.NO_VALUE_NEEDED){
    this.label=label
    return this
  }
  setIcon(icon:IconConfigModel|NoValueType.NO_VALUE_NEEDED){
    this.icon=icon
    return this
  }
  setDisabled(disabled: boolean) {
    this.disabled = disabled
    return this
  }

}
