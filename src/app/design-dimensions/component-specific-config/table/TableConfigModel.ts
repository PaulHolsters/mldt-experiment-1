import {TableColumnModel} from "./TableColumnModel";
export class TableConfigModel{
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
}
