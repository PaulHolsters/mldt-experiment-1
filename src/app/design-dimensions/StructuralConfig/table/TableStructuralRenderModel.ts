import {ComponentModel} from "../../ComponentModel";
import {TableColumnModel} from "./TableColumnModel";
export class TableStructuralRenderModel {
  public textWhenEmpty:string|undefined=undefined
  public paginator:boolean|undefined=undefined
  public columns:TableColumnModel[]|undefined=undefined
  public rows:number|undefined=undefined
  public rowsPerPage:number[]|undefined=undefined
  public currentPageReportTemplate:string|undefined=undefined
  public showFirstLastIcon:boolean|undefined=undefined
  public showJumpToPageDropdown:boolean|undefined=undefined
  public showPageLinks:boolean|undefined=undefined
  public first:number|undefined=undefined
  public totalRecords:number|undefined=undefined
  constructor() {
  }
  public setProperty(propName: string, value: string|number|ComponentModel| undefined): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
