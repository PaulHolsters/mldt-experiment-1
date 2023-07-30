import {Component} from "./Component";
import {ComponentModel} from "../models/ComponentModel";
import {Observable} from "rxjs";
import {IconType} from "../enums/iconType.enum";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";

export abstract class Button extends Component{
  public static icon:string|undefined = undefined
  public static label: string|undefined = undefined
  public static calcHeight: string|undefined = undefined
  public static calcWidth: string|undefined = undefined
  public static width:string|undefined = undefined
  public static height:string|undefined = undefined
  public static grow: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static shrink: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined
}
