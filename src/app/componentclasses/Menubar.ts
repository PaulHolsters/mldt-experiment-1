import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {MenuItem} from "primeng/api";

export abstract class Menubar extends Component{

  public static grow: number|null| ParentConfigType.grow = null
  public static shrink: number|null| ParentConfigType.shrink = null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null
  public static calcHeight: string|null=null
  public static calcWidth: string|null=null
  public static width:string|null=null
  public static height:string|null=null
  public static menuItems:MenuItem[]|null = null
}
