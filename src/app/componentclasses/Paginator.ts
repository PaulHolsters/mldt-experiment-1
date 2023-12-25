import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {BorderModel} from "../design-dimensions/BorderModel";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";
import {CursorValues} from "../enums/cursorValues.enum";

export abstract class Paginator extends Component {
  public static rowsPerPageOptions: number[] | undefined
  public static first: number | undefined
  public static rows: number | undefined
  public static totalRecords: number | undefined
  public static showCurrentPageReport:boolean | undefined
  public static showPageLinks:boolean | undefined
  public static showJumpToPageDropdown:boolean | undefined
  public static showFirstLastIcon:boolean | undefined
  public static currentPageReportTemplate:string | undefined
  public static grow: number|undefined| ParentConfigType.grow
  public static shrink: number|undefined| ParentConfigType.shrink
  public static visible: boolean|undefined
  public static holdSpace: boolean|undefined
  public static calcHeight: string|undefined
  public static calcWidth: string|undefined
  public static width:string|undefined
  public static height:string|undefined
  public static padding: string|undefined
  public static margin: string|undefined
  public static border: BorderModel|undefined

  public static data: any | undefined
  public static propsByData:[PropertyName,Datalink,Function[]]|null=null
  public static cursor:CursorValues|null=null
}
