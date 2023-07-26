import {DataRecordModel} from "../models/DataRecordModel";
import {Component} from "./Component";

export abstract class Table extends Component{
  // zet hier voorlopig enkel die properties in die niet in de store worden gestoken via de huidige methodes
  public static datalist:DataRecordModel[]|undefined=undefined
  public static currentDatalist:DataRecordModel[]|undefined=undefined
  public static currentColumn:{field:string,header:string,sort:boolean,filter:boolean}|undefined=undefined
}
