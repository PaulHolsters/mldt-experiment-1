import {TableRenderModel} from "./table/TableRenderModel";
import {ImageRenderModel} from "./image/ImageRenderModel";
import {MenubarRenderModel} from "./menubar/MenubarRenderModel";
import {ConfirmPopupRenderModel} from "./confirm-popup/ConfirmPopupRenderModel";
import {DialogRenderModel} from "./dialog/DialogRenderModel";
export class ComponentSpecificRenderModel {
  public componentSpecificRenderModel:
    TableRenderModel|
    ImageRenderModel|
    MenubarRenderModel|
    ConfirmPopupRenderModel|
    DialogRenderModel|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: any): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type AttributesComponentPropsModel')
  }

}
