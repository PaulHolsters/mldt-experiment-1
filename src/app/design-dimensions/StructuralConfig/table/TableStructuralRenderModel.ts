import {TableColumnModel} from "./TableColumnModel";
import {ComponentModelType} from "../../../types/union-types";
export class TableStructuralRenderModel {
  public textWhenEmpty:string|null=null
  public paginator:boolean|null=null
  public columns:TableColumnModel[]|null=null
  public rows:number|null=null
  public rowsPerPage:number[]|null=null
  public currentPageReportTemplate:string|null=null
  public showFirstLastIcon:boolean|null=null
  public showJumpToPageDropdown:boolean|null=null
  public showPageLinks:boolean|null=null
  public first:number|null=null
  public totalRecords:number|null=null
  constructor() {
  }
  public setProperty(propName: string, value: string|number|ComponentModelType| undefined): void {
    if (Reflect.has(this, propName)) Reflect.set(this, propName, value)
    else throw new Error('cannot set property ' + propName + ' because it does not exist on the object of type TableStructuralRenderModel')
  }

}
