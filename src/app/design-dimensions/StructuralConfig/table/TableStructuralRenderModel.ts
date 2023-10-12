import {ComponentModel} from "../../ComponentModel";
import {TableColumnModel} from "./TableColumnModel";
export class TableStructuralRenderModel {
  public textWhenEmpty:string|undefined
  public paginator:boolean|undefined
  public columns:TableColumnModel[]|undefined
  public rows:number|undefined
  public rowsPerPage:number[]|undefined
  public currentPageReportTemplate:string|undefined
  public showFirstLastIcon:boolean|undefined
  public showJumpToPageDropdown:boolean|undefined
  public showPageLinks:boolean|undefined
  public first:number|undefined
  public totalRecords:number|undefined
  constructor() {
  }
  public setProperty(propName: string, value: string|number|ComponentModel| undefined): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
