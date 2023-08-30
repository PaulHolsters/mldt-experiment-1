import {DataRecordModel} from "../models/DataRecordModel";
import {Component} from "./Component";
import {ComponentModel} from "../models/ComponentModel";
import {TableStylingType} from "../enums/tableStylingType.enum";
import {ResponsiveTableLayoutType} from "../enums/responsiveTableLayoutType.enum";
import {ClientDataRenderModel} from "../models/Data/ClientDataRenderModel";
import {AttributeComponentModel} from "../models/Data/AttributeComponentModel";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";
import {TableColumnModel} from "../models/TableColumnModel";
import {ComponentDataType} from "../enums/componentDataTypes.enum";
import {Blueprint} from "../services/data/Blueprint";

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

  public static grow: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static shrink: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined
  public static extraColumns:TableColumnModel[]|undefined = undefined

  public static conceptData:DataRecordModel[]|undefined = undefined
  public static conceptBlueprint:Blueprint|undefined=undefined

  public static attributes:AttributeComponentModel[]|undefined=undefined
  public static conceptName:string|undefined=undefined
  public static data: any|undefined = undefined

  public static dataList:DataRecordModel[]|undefined=undefined
  public static currentDataList:DataRecordModel[]|undefined=undefined

}
