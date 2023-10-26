import {ExtraColumnModel} from "./ExtraColumnModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";
import {ComponentModelType, isNoValueType} from "../../../types/union-types";
export class TableContentInjectionConfigModel {
  public columnHeaderComponents: ComponentModelType[]|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public footer: ComponentModelType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public caption: ComponentModelType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public extraColumns:ExtraColumnModel[]|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  constructor() {
  }
  getComponents():ComponentModelType[]{
    let arr:ComponentModelType[] = []
    if(!isNoValueType(this.columnHeaderComponents)){
      arr = arr.concat(this.columnHeaderComponents)
    }
    if(!isNoValueType(this.footer)){
      arr = arr.concat(this.footer)
    }
    if(!isNoValueType(this.caption)){
      arr = arr.concat(this.caption)
    }
    if(!isNoValueType(this.extraColumns)){
      arr = arr.concat(this.extraColumns.map(ec=>ec.component))
    }
    return arr
  }
  setColumnHeaderComponents(columnHeaderComponents: ComponentModelType[]|NoValueType.NO_VALUE_NEEDED){
    this.columnHeaderComponents=columnHeaderComponents
    return this
  }
  setFooter(footer: ComponentModelType|NoValueType.NO_VALUE_NEEDED){
    this.footer=footer
    return this
  }
  setCaption(caption: ComponentModelType|NoValueType.NO_VALUE_NEEDED){
    this.caption=caption
    return this
  }
  setExtraColumns(extraColumns:ExtraColumnModel[]|NoValueType.NO_VALUE_NEEDED){
    this.extraColumns=extraColumns
    return this
  }
}
