import {ConfirmationModel} from "./ConfirmationModel";

export class ConfirmPopupRenderModel {
  public confirmationModel:ConfirmationModel|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableRenderModel')
  }

}
