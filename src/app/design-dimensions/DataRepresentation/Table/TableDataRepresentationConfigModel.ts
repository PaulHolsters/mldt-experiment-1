import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";

export class TableDataRepresentationConfigModel {
  public columnName:string|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public sort:ZeroValueType.DeterminedByEngine|ZeroValueType.NotConfigured|Function = ZeroValueType.NotConfigured
  public filter:ZeroValueType.DeterminedByEngine|ZeroValueType.NotConfigured|Function = ZeroValueType.NotConfigured
  constructor() {
  }
  setColumnName(columnName:string|ZeroValueType.DeterminedByEngine) {
    this.columnName = columnName
    return this
  }
  setSort(sort:ZeroValueType.DeterminedByEngine|ZeroValueType.NotConfigured|Function) {
    this.sort = sort
    return this
  }
  setFilter(filter:ZeroValueType.DeterminedByEngine|ZeroValueType.NotConfigured|Function) {
    this.filter = filter
    return this
  }
}
