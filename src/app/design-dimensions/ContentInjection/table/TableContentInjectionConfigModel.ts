import {ComponentModel} from "../../ComponentModel";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
import {TableColumnModel} from "../../component-specific-config/table/TableColumnModel";

export class TableContentInjectionConfigModel {
  public columnHeaderComponents: ComponentModel[]|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public footer: ComponentModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public caption: ComponentModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public extraColumns:TableColumnModel[]|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor() {
  }
}
