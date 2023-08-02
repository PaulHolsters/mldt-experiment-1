import {Component} from "./Component";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";

export abstract class Icon extends Component{
  public static icon:string|undefined = undefined
  public static iconSize: string|undefined = undefined
  public static iconMeaning: string|undefined = undefined
  public static calcHeight: string|undefined = undefined
  public static calcWidth: string|undefined = undefined
  public static width:string|undefined = undefined
  public static height:string|undefined = undefined
  public static grow: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static shrink: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined
  public static margin: string|undefined = undefined
  public static display: string|undefined = undefined
}
