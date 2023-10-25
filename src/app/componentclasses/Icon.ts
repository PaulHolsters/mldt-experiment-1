import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";

export abstract class Icon extends Component{
  public static icon:string|null=null
  public static iconSize: string|null=null
  public static iconMeaning: string|null=null
  public static calcHeight: string|null=null
  public static calcWidth: string|null=null
  public static width:string|null=null
  public static height:string|null=null
  public static grow: number| ParentConfigType.grow|null=null
  public static shrink: number| ParentConfigType.shrink|null=null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null
  public static margin: string|null=null
  public static display: string|null=null

  public static data: any|null=null
  public static hardCodedData: any|null=null

}
