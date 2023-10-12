import {Component} from "./Component";
import {ResponsiveTableLayoutType} from "../enums/responsiveTableLayoutType.enum";
import {Blueprint} from "../services/data/client/Blueprint";
import {ComponentModel} from "../design-dimensions/ComponentModel";
import {DataRecordModel} from "../design-dimensions/DataRecordModel";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {TableColumnModel} from "../design-dimensions/StructuralConfig/table/TableColumnModel";

export abstract class Table extends Component{
  public static currentColumn:{field:string,header:string|undefined,sort:boolean|undefined,filter:boolean|undefined}|undefined
  public static textWhenEmpty:string|undefined
  public static caption:ComponentModel|undefined
  public static footer:ComponentModel|undefined
  public static columnHeaderComponents:ComponentModel|undefined
  public static responsiveTableLayout:ResponsiveTableLayoutType|undefined
  public static paginator:boolean|undefined
  public static tableBreakpoint:number|undefined
  public static rows:number|undefined
  public static rowsPerPage:number[]|undefined

  public static grow: number|undefined| ParentConfigType.grow
  public static shrink: number|undefined| ParentConfigType.shrink
  public static visible: boolean|undefined
  public static holdSpace: boolean|undefined
  public static columns:TableColumnModel[]|undefined
  public static extraColumns:TableColumnModel[]|undefined

  public static conceptData:DataRecordModel[]|undefined
  public static conceptBlueprint:Blueprint|undefined
  public static data: any|undefined
  public static currentDataList:DataRecordModel[]|undefined

}
