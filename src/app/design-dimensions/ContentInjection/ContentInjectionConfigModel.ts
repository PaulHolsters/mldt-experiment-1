import {DialogContentInjectionConfigModel} from "./dialog/DialogContentInjectionConfigModel";
import {TableContentInjectionConfigModel} from "./table/TableContentInjectionConfigModel";
import {MenubarContentInjectionConfigModel} from "./menubar/MenubarContentInjectionConfigModel";
export class ContentInjectionConfigModel {
  constructor(
    public componentContentInjectionConfigModel:
      MenubarContentInjectionConfigModel|
      DialogContentInjectionConfigModel|
      TableContentInjectionConfigModel
  ) {
  }
}
// posible values:
/*
* ComponentModel|ComponentObjectModel
* ComponentModel[]|ComponentObjectModel[]
* TableColumnModel[]
* */
