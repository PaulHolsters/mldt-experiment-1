import {DataRecordModel} from "../models/DataRecordModel";
import {Component} from "./Component";

export abstract class Table extends Component{
  public static datalist:DataRecordModel[]|undefined=undefined
  public static currentDatalist:DataRecordModel[]|undefined=undefined
}
