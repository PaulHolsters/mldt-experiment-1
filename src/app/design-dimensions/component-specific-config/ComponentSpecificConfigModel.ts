import {NoValueType} from "../../enums/no_value_type";
import {TableConfigModel} from "./table/TableConfigModel";
import {ImageConfigModel} from "./image/ImageConfigModel";
import {MenubarConfigModel} from "./menubar/MenubarConfigModel";
import {ConfirmPopupConfigModel} from "./confirm-popup/ConfirmPopupConfigModel";
import {DialogConfigModel} from "./dialog/DialogConfigModel";

export class ComponentSpecificConfigModel {
  constructor(
    public componentSpecificConfig:
      TableConfigModel|
      ImageConfigModel|
      MenubarConfigModel|
      ConfirmPopupConfigModel|
      DialogConfigModel
  ) {
  }
}
