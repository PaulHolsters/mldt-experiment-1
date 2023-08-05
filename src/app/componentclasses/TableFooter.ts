import {Component} from "./Component";
import {ComponentModel} from "../models/ComponentModel";

export abstract class TableFooter extends Component{
  public static padding: string|undefined = undefined
  public static component: ComponentModel|undefined = undefined
  public static content: ComponentModel|undefined = undefined
}
