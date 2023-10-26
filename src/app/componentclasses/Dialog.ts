import {Component} from "./Component";
import {ComponentModel} from "../design-dimensions/ComponentModel";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";

export abstract class Dialog extends Component{
  public static visible:boolean|null=null
  public static header:string|null=null
  public static content:ComponentModel|null=null
  public static xClicked:number|null=null
  public static yClicked:number|null=null
  public static grow: number| ParentConfigType.grow|null=null
  public static shrink: number| ParentConfigType.shrink|null=null
  public static holdSpace: boolean|null=null

  public static data: any|null=null
}
