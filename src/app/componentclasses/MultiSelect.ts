import {Component} from "./Component";
import {Blueprint} from "../services/data/client/Blueprint";
import {DataRecordModel} from "../design-dimensions/DataRecordModel";
import {NoValueType.CALCULATED_BY_ENGINE, NoValueYet} from "../types/type-aliases";

export abstract class MultiSelect extends Component{

  public static options:DataRecordModel[]|NoValueYet=undefined
  public static selectedOptions:DataRecordModel[]|NoValueYet=undefined
  public static optionLabel:string|NoValueType.CALCULATED_BY_ENGINE

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
