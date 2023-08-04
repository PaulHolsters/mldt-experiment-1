import {Component} from "./Component";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";

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
  public static grow: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static shrink: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined
  public static calcHeight: string|undefined = undefined
  public static calcWidth: string|undefined = undefined
  public static width:string|undefined = undefined
  public static height:string|undefined = undefined
  public static padding: string|undefined = undefined
  public static margin: string|undefined = undefined


}
