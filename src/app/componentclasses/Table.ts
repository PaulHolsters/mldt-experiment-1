import {DataRecordModel} from "../models/DataRecordModel";
import {Component} from "./Component";
import {ComponentModel} from "../models/ComponentModel";
import {TableStylingType} from "../enums/tableStylingType.enum";
import {ResponsiveTableLayoutType} from "../enums/responsiveTableLayoutType.enum";
import {ConceptComponentModel} from "../models/Data/ConceptComponentModel";
import {AttributeComponentModel} from "../models/Data/AttributeComponentModel";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";

export abstract class Table extends Component{
  // todo deze properties kunnen gewijzigd worden door middel van een setValue functie nadat de applicatie klaar is met opstarten
  // todo de createStore method gebruikt deze klasse voor het aanmaken van de store properties van elk table component die
  //      er in de configuratie staat
  public static dataList:DataRecordModel[]|undefined=undefined
  public static currentDataList:DataRecordModel[]|undefined=undefined
  public static currentColumn:{field:string,header:string,sort:boolean,filter:boolean}|undefined=undefined
  public static textWhenEmpty:string|undefined=undefined
  public static caption:ComponentModel|undefined=undefined
  public static summary:ComponentModel|undefined=undefined
  public static footer:ComponentModel|undefined=undefined
  public static columnHeaderComponents:ComponentModel|undefined=undefined
  public static tableStyle:TableStylingType|undefined=undefined
  public static responsiveTableLayout:ResponsiveTableLayoutType|undefined=undefined
  public static paginator:boolean|undefined=undefined
  public static tableBreakpoint:number|undefined=undefined
  public static rows:number|undefined=undefined
  public static rowsPerPage:number[]|undefined=undefined
  public static dataConcept:ConceptComponentModel|undefined=undefined
  public static conceptBlueprint:Object|undefined=undefined
  public static attributes:AttributeComponentModel[]|undefined=undefined
  public static conceptName:string|undefined=undefined
  public static grow: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static shrink: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined

}
