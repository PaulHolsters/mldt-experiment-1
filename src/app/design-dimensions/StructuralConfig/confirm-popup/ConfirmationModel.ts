import {IconType} from "../../../enums/iconType.enum";
import {NotConfigured} from "../../../types/type-aliases";

export class ConfirmationModel {
  constructor(
    public message:string='Please confirm or cancel',
    public icon:IconType|NotConfigured=undefined
  ) {
  }
}
