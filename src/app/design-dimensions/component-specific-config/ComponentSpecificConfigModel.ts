import {TableConfigModel} from "./table/TableConfigModel";
import {ImageConfigModel} from "./image/ImageConfigModel";
import {MenubarConfigModel} from "./menubar/MenubarConfigModel";
import {ConfirmPopupConfigModel} from "./confirm-popup/ConfirmPopupConfigModel";
import {DialogConfigModel} from "./dialog/DialogConfigModel";

export class ComponentSpecificConfigModel {
  constructor(
    public componentSpecificConfigModel:
      TableConfigModel|
      ImageConfigModel|
      MenubarConfigModel|
      ConfirmPopupConfigModel|
      DialogConfigModel
  ) {
  }
}
