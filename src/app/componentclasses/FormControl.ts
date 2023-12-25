import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {ComponentModelType} from "../types/union-types";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";
import {CursorValues} from "../enums/cursorValues.enum";

export abstract class FormControl extends Component{
  public static content:ComponentModelType|undefined
  public static calcHeight:string|undefined
  public static calcWidth:string|undefined
  public static width:string|undefined
  public static height:string|undefined
  public static grow: number|undefined| ParentConfigType.grow
  public static shrink: number|undefined| ParentConfigType.shrink
  public static visible: boolean|undefined
  public static holdSpace: boolean|undefined

  public static data: any|undefined
  public static propsByData:[PropertyName,Datalink,Function[]]|null=null
  public static cursor:CursorValues|null=null
}
