import {ComponentModel} from "../../ComponentModel";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";

export class TableContentInjectionConfigModel {
  public columnHeaderComponents: ComponentModel[]|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public footer: ComponentModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public caption: ComponentModel|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public extraColumns:ComponentModel[]|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  constructor() {
  }
}
