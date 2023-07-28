import {Component} from "./Component";
import {ComponentModel} from "../models/ComponentModel";

export abstract class Dialog extends Component{
  public static visible:boolean|undefined
  public static header:string|undefined
  public static content:ComponentModel|undefined
}
