import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {ComponentModelType} from "../types/union-types";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";

export abstract class Toolbar extends Component{

  public static grow: number|null| ParentConfigType.grow = null
  public static shrink: number|null| ParentConfigType.shrink = null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null
  public static calcHeight: string|null=null
  public static calcWidth: string|null=null
  public static width:string|null=null
  public static height:string|null=null
  public static start:ComponentModelType|null=null
  public static center:ComponentModelType|null=null
  public static end:ComponentModelType|null=null
  public static propsByData:[PropertyName,Datalink,Function[]]|null=null
}
