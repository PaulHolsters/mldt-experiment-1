import {TableColumnModel} from "./TableColumnModel";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class TableConfigModel{
  public textWhenEmpty:string|ZeroValueType.NotConfigured='No records found'
  public paginator:boolean=true
  public columns:TableColumnModel[]|ZeroValueType.DeterminedByEngine=ZeroValueType.DeterminedByEngine
  public rows:number=10
  public rowsPerPage:number[]=[10,25,50]
  public currentPageReportTemplate:string= '{first} - {last} of {totalRecords}'
  public showFirstLastIcon:boolean=true
  public showJumpToPageDropdown:boolean=true
  public showPageLinks:boolean=true
  public first:number=0
  public totalRecords:number=0
  constructor() {
  }
  setTextWhenEmpty(textWhenEmpty:string|ZeroValueType.NotConfigured):TableConfigModel{
    this.textWhenEmpty = textWhenEmpty
    return this
  }
  setPaginator(paginator:boolean):TableConfigModel{
    this.paginator = paginator
    return this
  }
  setColumns(columns:TableColumnModel[]|ZeroValueType.DeterminedByEngine):TableConfigModel{
    this.columns = columns
    return this
  }
  setRows(rows:number):TableConfigModel{
    this.rows = rows
    return this
  }
  setRowsPerPage(rowsPerPage:number[]):TableConfigModel{
    this.rowsPerPage = rowsPerPage
    return this
  }
  setCurrentPageReportTemplate(currentPageReportTemplate:string):TableConfigModel{
    this.currentPageReportTemplate = currentPageReportTemplate
    return this
  }
  setShowFirstLastIcon(showFirstLastIcon:boolean):TableConfigModel{
    this.showFirstLastIcon = showFirstLastIcon
    return this
  }
  setShowJumpToPageDropdown(showJumpToPageDropdown:boolean):TableConfigModel{
    this.showJumpToPageDropdown = showJumpToPageDropdown
    return this
  }
  setShowPageLinks(showPageLinks:boolean):TableConfigModel{
    this.showPageLinks = showPageLinks
    return this
  }
  setFirst(first:number):TableConfigModel{
    this.first = first
    return this
  }
  setTotalRecords(totalRecords:number):TableConfigModel{
    this.totalRecords = totalRecords
    return this
  }
}
