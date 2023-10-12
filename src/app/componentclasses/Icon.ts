import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";

export abstract class Icon extends Component{
  public static icon:string|undefined
  public static iconSize: string|undefined
  public static iconMeaning: string|undefined
  public static calcHeight: string|undefined
  public static calcWidth: string|undefined
  public static width:string|undefined
  public static height:string|undefined
  public static grow: number|undefined| ParentConfigType.grow
  public static shrink: number|undefined| ParentConfigType.shrink
  public static visible: boolean|undefined
  public static holdSpace: boolean|undefined
  public static margin: string|undefined
  public static display: string|undefined

  public static data: any|undefined
  public static hardCodedData: any|undefined

}
