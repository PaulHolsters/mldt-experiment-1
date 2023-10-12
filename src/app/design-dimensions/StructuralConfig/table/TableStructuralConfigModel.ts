import {TableColumnModel} from "./TableColumnModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class TableStructuralConfigModel {
  public textWhenEmpty:string|NoValueType.NO_VALUE_NEEDED='No records found'
  public paginator:boolean=true
  public columns:TableColumnModel[]|NoValueType.CALCULATED_BY_ENGINE=NoValueType.CALCULATED_BY_ENGINE
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
  setTextWhenEmpty(textWhenEmpty:string|NoValueType.NO_VALUE_NEEDED):TableStructuralConfigModel{
    this.textWhenEmpty = textWhenEmpty
    return this
  }
  setPaginator(paginator:boolean):TableStructuralConfigModel{
    this.paginator = paginator
    return this
  }
  setColumns(columns:TableColumnModel[]|NoValueType.CALCULATED_BY_ENGINE):TableStructuralConfigModel{
    this.columns = columns
    return this
  }
  setRows(rows:number):TableStructuralConfigModel{
    this.rows = rows
    return this
  }
  setRowsPerPage(rowsPerPage:number[]):TableStructuralConfigModel{
    this.rowsPerPage = rowsPerPage
    return this
  }
  setCurrentPageReportTemplate(currentPageReportTemplate:string):TableStructuralConfigModel{
    this.currentPageReportTemplate = currentPageReportTemplate
    return this
  }
  setShowFirstLastIcon(showFirstLastIcon:boolean):TableStructuralConfigModel{
    this.showFirstLastIcon = showFirstLastIcon
    return this
  }
  setShowJumpToPageDropdown(showJumpToPageDropdown:boolean):TableStructuralConfigModel{
    this.showJumpToPageDropdown = showJumpToPageDropdown
    return this
  }
  setShowPageLinks(showPageLinks:boolean):TableStructuralConfigModel{
    this.showPageLinks = showPageLinks
    return this
  }
  setFirst(first:number):TableStructuralConfigModel{
    this.first = first
    return this
  }
  setTotalRecords(totalRecords:number):TableStructuralConfigModel{
    this.totalRecords = totalRecords
    return this
  }
}
