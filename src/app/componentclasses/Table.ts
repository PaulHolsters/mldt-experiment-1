import {Component} from "./Component";
import {ResponsiveTableLayoutType} from "../enums/responsiveTableLayoutType.enum";
import {Blueprint} from "../services/data/client/Blueprint";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {TableColumnModel} from "../design-dimensions/StructuralConfig/table/TableColumnModel";
import {ComponentModelType, DataRecord} from "../types/union-types";

export abstract class Table extends Component{
  public static currentColumn:{field:string,header:string|undefined,sort:boolean|undefined,filter:boolean|undefined}|null=null
  public static textWhenEmpty:string|null=null
  public static caption:ComponentModelType|null=null
  public static footer:ComponentModelType|null=null
  public static columnHeaderComponents:ComponentModelType|null=null
  public static responsiveTableLayout:ResponsiveTableLayoutType|null=null
  public static paginator:boolean|null=null
  public static tableBreakpoint:number|null=null
  public static rows:number|null=null
  public static rowsPerPage:number[]|null=null

  public static grow: number|null| ParentConfigType.grow = null
  public static shrink: number|null| ParentConfigType.shrink = null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null
  public static columns:TableColumnModel[]|null=null
  public static extraColumns:(TableColumnModel & {component:ComponentModelType})[]|null=null

  public static outputData:DataRecord[]|null=null
  public static conceptBlueprint:Blueprint|null=null

  public static data: any|null=null
  public static currentDataList:DataRecord[]|null=null

}
