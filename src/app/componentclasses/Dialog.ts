import {Component} from "./Component";
import {ComponentModel} from "../design-dimensions/ComponentModel";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";

export abstract class Dialog extends Component{
  public static visible:boolean|undefined = undefined
  public static header:string|undefined = undefined
  public static content:ComponentModel|undefined = undefined
  public static xClicked:number|undefined = undefined
  public static yClicked:number|undefined = undefined
  public static grow: number|undefined| ParentConfigType.grow = undefined
  public static shrink: number|undefined| ParentConfigType.shrink= undefined
  public static holdSpace: boolean|undefined = undefined

  public static data: any|undefined = undefined
}
