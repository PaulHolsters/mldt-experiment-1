import {Component} from "./Component";
import {ComponentModel} from "../models/ComponentModel";

export abstract class Dialog extends Component{
  public static visible:boolean|undefined = undefined
  public static header:string|undefined = undefined
  public static content:ComponentModel|undefined = undefined
  public static xClicked:number|undefined = undefined
  public static yClicked:number|undefined = undefined
}
