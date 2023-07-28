import {Component} from "./Component";
import {ComponentModel} from "../models/ComponentModel";
import {Observable} from "rxjs";
import {IconType} from "../enums/iconType.enum";

export abstract class Button extends Component{
  public static icon:string|undefined
  public static label: string|undefined
  public static calcHeight: string|undefined
  public static calcWidth: string|undefined
  public static width:string|undefined
  public static height:string|undefined
}
