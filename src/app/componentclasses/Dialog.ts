import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {ComponentModelType} from "../types/union-types";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";

export abstract class Dialog extends Component{
  public static visible:boolean|null=null
  public static header:string|null=null
  public static content:ComponentModelType|null=null
  public static xClicked:number|null=null
  public static yClicked:number|null=null
  public static grow: number| ParentConfigType.grow|null=null
  public static shrink: number| ParentConfigType.shrink|null=null
  public static holdSpace: boolean|null=null

  public static data: any|null=null
  public static propsByData:[PropertyName,Datalink,Function[]]|null=null
}
