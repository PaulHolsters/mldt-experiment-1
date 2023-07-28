import {Component} from "./Component";
import {ComponentModel} from "../models/ComponentModel";

export abstract class Form extends Component{
  public static content:ComponentModel|undefined
  public static calcHeight:string|undefined
  public static calcWidth:string|undefined
  public static width:string|undefined
  public static height:string|undefined
}
