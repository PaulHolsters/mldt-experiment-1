import {Component} from "./Component";
import {Input} from "@angular/core";
import {IconType} from "../enums/iconType.enum";
import {IconPositionType} from "../enums/iconPositionType.enum";
import {RestrictionType} from "../enums/restrictionType.enum";
import {NoValueType} from "../enums/no_value_type";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";
export abstract class TextInput extends Component{
  public static width:string|undefined = undefined
  public static height:string|undefined = undefined
  public static calcHeight: string|undefined = undefined
  public static calcWidth: string|undefined = undefined
  public static updateKey: string|undefined = undefined
  public static conceptId:string|undefined= undefined
  public static icon: IconType | undefined= undefined
  public static iconPosition: IconPositionType |NoValueType.NI| undefined= undefined
  public static advisoryText: string | undefined= undefined
  public static label: string | undefined= undefined
  public static floatLabel: boolean | undefined | NoValueType.NA= undefined
  public static dirty: boolean | undefined= undefined
  public static invalid: boolean | undefined= undefined
  public static small: boolean | undefined= undefined
  public static large: boolean | undefined= undefined
  public static disabled: boolean | undefined= undefined
  public static value: string | undefined= undefined
  public static keyFilter: string | RegExp | undefined | RestrictionType.NA | "alphanum" | "hex" | "alpha" | "int" | "money" | "number"= undefined
  public static grow: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static shrink: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined
}
