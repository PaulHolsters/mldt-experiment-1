import {Component} from "./Component";
import {TableStylingType} from "../enums/tableGridType.enum";
import {ResponsiveTableLayoutType} from "../enums/responsiveTableLayoutType.enum";
import {Blueprint} from "../services/data/client/Blueprint";
import {ComponentModel} from "../design-dimensions/ComponentModel";
import {TableColumnModel} from "../design-dimensions/component-specific-config/table/TableColumnModel";
import {DataRecordModel} from "../design-dimensions/DataRecordModel";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";

export abstract class Table extends Component{
  public static currentColumn:{field:string,header:string,sort:boolean,filter:boolean}|undefined=undefined
  public static textWhenEmpty:string|undefined=undefined
  public static caption:ComponentModel|undefined=undefined
  public static footer:ComponentModel|undefined=undefined
  public static columnHeaderComponents:ComponentModel|undefined=undefined
  public static tableStyle:TableStylingType|undefined=undefined
  public static responsiveTableLayout:ResponsiveTableLayoutType|undefined=undefined
  public static paginator:boolean|undefined=undefined
  public static tableBreakpoint:number|undefined=undefined
  public static rows:number|undefined=undefined
  public static rowsPerPage:number[]|undefined=undefined

  public static grow: number|undefined| ParentConfigType.grow= undefined
  public static shrink: number|undefined| ParentConfigType.shrink= undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined
  public static columns:TableColumnModel[]|undefined = undefined
  public static extraColumns:TableColumnModel[]|undefined = undefined

  public static conceptData:DataRecordModel[]|undefined = undefined
  public static conceptBlueprint:Blueprint|undefined=undefined
  public static data: any|undefined = undefined
  public static currentDataList:DataRecordModel[]|undefined=undefined

}
