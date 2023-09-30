import {ComponentModel} from "../../ComponentModel";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {ExtraColumnModel} from "./ExtraColumnModel";
export class TableContentInjectionConfigModel {
  public columnHeaderComponents: ComponentModel[]|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public footer: ComponentModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public caption: ComponentModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public extraColumns:ExtraColumnModel[]|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor() {
  }
  setColumnHeaderComponents(columnHeaderComponents: ComponentModel[]|ZeroValueType.NotConfigured){
    this.columnHeaderComponents=columnHeaderComponents
    return this
  }
  setFooter(footer: ComponentModel|ZeroValueType.NotConfigured){
    this.footer=footer
    return this
  }
  setCaption(caption: ComponentModel|ZeroValueType.NotConfigured){
    this.caption=caption
    return this
  }
  setExtraColumns(extraColumns:ExtraColumnModel[]|ZeroValueType.NotConfigured){
    this.extraColumns=extraColumns
    return this
  }
}
