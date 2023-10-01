import {IconConfigModel} from "./IconConfigModel";
import {NotConfigured} from "../../../types/type-aliases";

export class ButtonStructuralConfigModel {
  public label:string|NotConfigured=undefined
  public icon:IconConfigModel|NotConfigured=undefined
  public disabled: boolean = false
  constructor(){
  }
  setLabel(label:string|NotConfigured){
    this.label=label
    return this
  }
  setIcon(icon:IconConfigModel|NotConfigured){
    this.icon=icon
    return this
  }
  setDisabled(disabled: boolean) {
    this.disabled = disabled
    return this
  }

}
