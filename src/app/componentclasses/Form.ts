import {Component} from "./Component";
import {NoValueType} from "../enums/no_value_type";
import {ComponentModel} from "../design-dimensions/ComponentModel";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";

export abstract class Form extends Component{
  public static content:ComponentModel|undefined = undefined
  public static calcHeight:string|undefined = undefined
  public static calcWidth:string|undefined = undefined
  public static width:string|undefined = undefined
  public static height:string|undefined = undefined
  public static conceptId:string|NoValueType.NA=NoValueType.NA
  public static grow: number|undefined| ParentConfigType.grow = undefined
  public static shrink: number|undefined| ParentConfigType.shrink = undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined

  public static data: any|undefined = undefined
}
