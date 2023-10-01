import {ComponentModel} from "../../ComponentModel";
import {ExtraColumnModel} from "./ExtraColumnModel";
import {NotConfigured} from "../../../types/type-aliases";
export class TableContentInjectionConfigModel {
  public columnHeaderComponents: ComponentModel[]|NotConfigured=undefined
  public footer: ComponentModel|NotConfigured=undefined
  public caption: ComponentModel|NotConfigured=undefined
  public extraColumns:ExtraColumnModel[]|NotConfigured=undefined
  constructor() {
  }
  setColumnHeaderComponents(columnHeaderComponents: ComponentModel[]|NotConfigured){
    this.columnHeaderComponents=columnHeaderComponents
    return this
  }
  setFooter(footer: ComponentModel|NotConfigured){
    this.footer=footer
    return this
  }
  setCaption(caption: ComponentModel|NotConfigured){
    this.caption=caption
    return this
  }
  setExtraColumns(extraColumns:ExtraColumnModel[]|NotConfigured){
    this.extraColumns=extraColumns
    return this
  }
}
