import {MenuItem} from "primeng/api";
import {ComponentModel} from "../../ComponentModel";
import {NoValueType} from "../../../enums/no_value_type";
import {TableColumnModel} from "./TableColumnModel";
import {ConfirmationModel} from "../confirm-popup/ConfirmationModel";
import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class TableRenderModel {
  public textWhenEmpty:string='No records available'
  public paginator:boolean = false
  public columns:TableColumnModel[]|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured
  public rows:number= 10
  public rowsPerPage:number[] = [10,25,50]
  public currentPageReportTemplate:string = '{first} - {last} of {totalRecords}'
  public showFirstLastIcon:boolean = false
  public showJumpToPageDropdown:boolean = false
  public showPageLinks:boolean = false
  public first:number = 0
  public totalRecords:number|ZeroValueType.DeterminedByEngine = ZeroValueType.DeterminedByEngine
  constructor() {
  }
  public setProperty(propName: string, value: string|number|ComponentModel| undefined): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableRenderModel')
  }

}
