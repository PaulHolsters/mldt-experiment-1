import {IconType} from "../../../enums/iconType.enum";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";

export class ConfirmationModel {
  constructor(
    public message:string='Please confirm or cancel',
    public icon:IconType|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  ) {
  }
}
