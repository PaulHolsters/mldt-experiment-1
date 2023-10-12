import {Component} from "./Component";
import {ComponentModel} from "../design-dimensions/ComponentModel";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";

export abstract class Form extends Component{
  public static content:ComponentModel|undefined
  public static calcHeight:string|undefined
  public static calcWidth:string|undefined
  public static width:string|undefined
  public static height:string|undefined
  public static conceptId:string|undefined
  public static grow: number|undefined| ParentConfigType.grow
  public static shrink: number|undefined| ParentConfigType.shrink
  public static visible: boolean|undefined
  public static holdSpace: boolean|undefined

  public static data: any|undefined
}
