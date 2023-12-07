import {ComponentConfigModel} from "../ComponentConfigModel";


export class VisibilityConfigModel extends ComponentConfigModel{
  public visible: boolean = true
  public holdSpace: boolean = false
  public setVisible(visible: boolean){
    this.visible=visible
    return this
  }
  public setHoldSpace(holdSpace: boolean){
    this.holdSpace=holdSpace
    return this
  }

}
