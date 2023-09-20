export class VisibilityConfigModel {
  public visible: boolean = true
  public holdSpace: boolean = false
  constructor() {
  }
  public setVisible(visible: boolean){
    this.visible=visible
    return this
  }
  public setHoldSpace(holdSpace: boolean){
    this.holdSpace=holdSpace
    return this
  }

}
