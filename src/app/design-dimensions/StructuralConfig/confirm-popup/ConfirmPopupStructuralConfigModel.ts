import {ConfirmationModel} from "./ConfirmationModel";
import {ComponentStructuralConfigModel} from "../ComponentStructuralConfigModel";

export class ConfirmPopupStructuralConfigModel extends ComponentStructuralConfigModel{
  constructor(public confirmationModel:ConfirmationModel=new ConfirmationModel()) {
    super()
  }
}
