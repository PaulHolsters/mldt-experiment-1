import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {ComponentModelType} from "../types/union-types";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";
import {CursorValues} from "../enums/cursorValues.enum";

export abstract class Card extends Component{
  public static repeater:boolean|null=null
  public static grow: number|null| ParentConfigType.grow = null
  public static shrink: number|null| ParentConfigType.shrink = null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null
  public static calcHeight: string|null=null
  public static calcWidth: string|null=null
  public static width:string|null=null
  public static height:string|null=null
  public static title:string|null=null
  public static subtitle:string|null=null
  public static header:ComponentModelType|null=null
  public static content:ComponentModelType|null=null
  public static footer:ComponentModelType|null=null
  public static data: any|null=null
  public static propsByData:[PropertyName,Datalink,Function[]]|null=null
  public static cursor:CursorValues|null=null
}
