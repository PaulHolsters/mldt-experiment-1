import {Component} from "./Component";
import {Blueprint} from "../services/data/client/Blueprint";

export abstract class RadioButton extends Component{

  public static calcHeight: string|undefined = undefined
  public static calcWidth: string|undefined = undefined
  public static width:string|undefined = undefined
  public static height:string|undefined = undefined

  public static values:string[]|undefined=undefined
  public static selectedValue: string|undefined = undefined

  public static conceptData:string|undefined = undefined
  public static conceptBlueprint:Blueprint|undefined = undefined
  public static dataLink: string[] | undefined = undefined

  public static dirty: boolean | undefined = undefined
  public static invalid: boolean | undefined = undefined
  public static disabled: boolean | undefined = undefined

}
