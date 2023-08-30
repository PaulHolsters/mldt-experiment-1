import {Component} from "./Component";
import {DataRecordModel} from "../models/DataRecordModel";
import {NoValueType} from "../enums/no_value_type";
import {Blueprint} from "../services/data/Blueprint";

export abstract class MultiSelect extends Component{

  public static options:DataRecordModel[]|NoValueType.DBI|undefined=undefined
  public static selectedOptions:DataRecordModel[]|NoValueType.DBI|undefined=undefined
  public static optionLabel:string|undefined|NoValueType.DBI

  public static calcWidth: string|undefined = undefined
  public static calcHeight: string|undefined = undefined

  public static updateKey: string|undefined = undefined

  public static width:string|undefined = undefined
  public static height:string|undefined = undefined

  public static conceptData:DataRecordModel[]|undefined = undefined
  public static conceptBlueprint:Blueprint|undefined = undefined
  public static dataLink: string[] | undefined = undefined

  public static dirty: boolean | undefined = undefined
  public static invalid: boolean | undefined = undefined
  public static disabled: boolean | undefined = undefined

}
