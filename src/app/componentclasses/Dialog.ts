import {Component} from "./Component";
import {ComponentModel} from "../design-dimensions/ComponentModel";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";

export abstract class Dialog extends Component{
  public static visible:boolean|undefined
  public static header:string|undefined
  public static content:ComponentModel|undefined
  public static xClicked:number|undefined
  public static yClicked:number|undefined
  public static grow: number|undefined| ParentConfigType.grow
  public static shrink: number|undefined| ParentConfigType.shrink
  public static holdSpace: boolean|undefined

  public static data: any|undefined
}
