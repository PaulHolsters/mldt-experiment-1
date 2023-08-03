import {Component} from "./Component";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";

export abstract class Button extends Component{
  public static icon:string|undefined = undefined
  public static label: string|undefined = undefined
  public static buttonSize: string|undefined = undefined
  public static buttonMeaning: string|undefined = undefined
  public static buttonAppearance: string|undefined = undefined
  public static buttonForm: string|undefined = undefined
  public static calcHeight: string|undefined = undefined
  public static calcWidth: string|undefined = undefined
  public static width:string|undefined = undefined
  public static height:string|undefined = undefined
  public static grow: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static shrink: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined
  public static display: string|undefined = undefined
  public static padding: string|undefined = undefined
  public static margin: string|undefined = undefined
  public static data: any|undefined = undefined
}
