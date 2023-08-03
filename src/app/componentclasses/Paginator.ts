import {Component} from "./Component";

export abstract class Paginator extends Component {

  public static data: any | undefined = undefined
  public static rowsPerPageOptions: number[] | undefined = undefined
  public static first: number | undefined = undefined
  public static rows: number | undefined = undefined
  public static totalRecords: number | undefined = undefined
  public static showCurrentPageReport:boolean | undefined = undefined
  public static showPageLinks:boolean | undefined = undefined
  public static showJumpToPageDropdown:boolean | undefined = undefined
  public static showFirstLastIcon:boolean | undefined = undefined
  public static currentPageReportTemplate:string | undefined = undefined


}
