import {DataRecordModel} from "../models/DataRecordModel";
import {Component} from "./Component";

export abstract class Table extends Component{
  // deze properties kunnen gewijzigd worden door middel van een setValue functie nadat de applicatie klaar is met opstarten
  // de createStore method gebruikt deze klasse voor het aanmaken van de store properties van elk table component die
  // er in de configuratie staat
  public static datalist:DataRecordModel[]|undefined
  public static currentDatalist:DataRecordModel[]|undefined
  public static currentColumn:{field:string,header:string,sort:boolean,filter:boolean}|undefined
}
