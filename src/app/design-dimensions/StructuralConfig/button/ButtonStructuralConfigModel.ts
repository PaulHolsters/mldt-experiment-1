import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {IconConfigModel} from "./IconConfigModel";

export class ButtonStructuralConfigModel {
  public label:string|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public icon:IconConfigModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public disabled: boolean = false
  constructor(){
  }
  setLabel(label:string|ZeroValueType.NotConfigured){
    this.label=label
    return this
  }
  setIcon(icon:IconConfigModel|ZeroValueType.NotConfigured){
    this.icon=icon
    return this
  }
  setDisabled(disabled: boolean) {
    this.disabled = disabled
    return this
  }

}
