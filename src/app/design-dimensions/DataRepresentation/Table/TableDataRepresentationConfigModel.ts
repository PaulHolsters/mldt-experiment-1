import {DeterminedByEngine, NotConfigured} from "../../../types/type-aliases";

export class TableDataRepresentationConfigModel {
  public columnName:string|DeterminedByEngine=undefined
  public sort:DeterminedByEngine|NotConfigured|Function = undefined
  public filter:DeterminedByEngine|NotConfigured|Function = undefined
  constructor() {
  }
  setColumnName(columnName:string|DeterminedByEngine) {
    this.columnName = columnName
    return this
  }
  setSort(sort:DeterminedByEngine|NotConfigured|Function) {
    this.sort = sort
    return this
  }
  setFilter(filter:DeterminedByEngine|NotConfigured|Function) {
    this.filter = filter
    return this
  }
}
