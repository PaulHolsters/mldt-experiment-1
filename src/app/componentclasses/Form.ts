import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {ComponentModelType} from "../types/union-types";

export abstract class Form extends Component{
  public static content:ComponentModelType|null=null
  public static calcHeight:string|null=null
  public static calcWidth:string|null=null
  public static width:string|null=null
  public static height:string|null=null
  public static conceptId:string|null=null
  public static grow: number| ParentConfigType.grow|null=null
  public static shrink: number| ParentConfigType.shrink|null=null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null
  public static data: any|null=null
}
