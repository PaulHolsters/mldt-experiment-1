import {ConfirmationModel} from "./ConfirmationModel";
import {ComponentStructuralRenderModel} from "../ComponentStructuralRenderModel";

export class ConfirmPopupStructuralRenderModel extends ComponentStructuralRenderModel{
  public confirmationModel:ConfirmationModel|null=null
  public setProperty(propName: string, value: string): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
