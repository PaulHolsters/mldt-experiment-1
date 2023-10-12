import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {ComponentModel} from "../design-dimensions/ComponentModel";

export abstract class FormControl extends Component{
  public static content:ComponentModel|undefined
  public static calcHeight:string|undefined
  public static calcWidth:string|undefined
  public static width:string|undefined
  public static height:string|undefined
  public static grow: number|undefined| ParentConfigType.grow
  public static shrink: number|undefined| ParentConfigType.shrink
  public static visible: boolean|undefined
  public static holdSpace: boolean|undefined

  public static data: any|undefined
}
