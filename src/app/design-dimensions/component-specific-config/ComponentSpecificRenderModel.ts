import {MenuItem} from "primeng/api";
import {ComponentModel} from "../ComponentModel";
import {TableConfigModel} from "./table/TableConfigModel";
import {ImageConfigModel} from "./image/ImageConfigModel";
import {MenubarConfigModel} from "./menubar/MenubarConfigModel";
import {ConfirmPopupConfigModel} from "./confirm-popup/ConfirmPopupConfigModel";
import {DialogConfigModel} from "./dialog/DialogConfigModel";
export class ComponentSpecificRenderModel {
  public componentSpecificConfig:
    TableConfigModel|
    ImageConfigModel|
    MenubarConfigModel|
    ConfirmPopupConfigModel|
    DialogConfigModel|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string|number|MenuItem[]|ComponentModel| undefined): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type AttributesComponentPropsModel')
  }

}
