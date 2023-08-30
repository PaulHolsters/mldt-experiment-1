import {Component} from "./Component";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";
import {ComponentDataType} from "../enums/componentDataTypes.enum";

export abstract class RadioButton extends Component{
  public static values:string[]|undefined=undefined
  public static calcHeight: string|undefined = undefined
  public static calcWidth: string|undefined = undefined
  public static width:string|undefined = undefined
  public static height:string|undefined = undefined
  public static selectedValue: string|undefined = undefined

}
