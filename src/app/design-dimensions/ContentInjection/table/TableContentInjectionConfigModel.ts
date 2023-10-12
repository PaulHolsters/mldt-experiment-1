import {ComponentModel} from "../../ComponentModel";
import {ExtraColumnModel} from "./ExtraColumnModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
export class TableContentInjectionConfigModel {
  public columnHeaderComponents: ComponentModel[]|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public footer: ComponentModel|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public caption: ComponentModel|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public extraColumns:ExtraColumnModel[]|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  constructor() {
  }
  setColumnHeaderComponents(columnHeaderComponents: ComponentModel[]|NoValueType.NO_VALUE_NEEDED){
    this.columnHeaderComponents=columnHeaderComponents
    return this
  }
  setFooter(footer: ComponentModel|NoValueType.NO_VALUE_NEEDED){
    this.footer=footer
    return this
  }
  setCaption(caption: ComponentModel|NoValueType.NO_VALUE_NEEDED){
    this.caption=caption
    return this
  }
  setExtraColumns(extraColumns:ExtraColumnModel[]|NoValueType.NO_VALUE_NEEDED){
    this.extraColumns=extraColumns
    return this
  }
}
