import {IconType} from "../../../enums/iconType.enum";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class ConfirmationModel {
  constructor(
    public message:string='Please confirm or cancel',
    public icon:IconType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  ) {
  }
}
