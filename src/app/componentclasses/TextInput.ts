import {Component} from "./Component";
import {IconType} from "../enums/iconType.enum";
import {IconPositionType} from "../enums/iconPositionType.enum";
import {RestrictionType} from "../enums/restrictionType.enum";
import {Blueprint} from "../services/data/client/Blueprint";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
export abstract class TextInput extends Component{
  public static width:string|undefined
  public static height:string|undefined
  public static calcHeight: string|undefined
  public static calcWidth: string|undefined
  public static updateKey: string|undefined
  public static conceptId:string|undefined
  public static icon: IconType | undefined
  public static iconPosition: IconPositionType |undefined
  public static advisoryText: string | undefined
  public static label: string | undefined
  public static floatLabel: boolean | undefined
  public static dirty: boolean | undefined
  public static invalid: boolean | undefined
  public static small: boolean | undefined
  public static large: boolean | undefined
  public static disabled: boolean | undefined

  public static keyFilter: string | RegExp | undefined | "alphanum" | "hex" | "alpha" | "int" | "money" | "number"
  public static grow: number|undefined| ParentConfigType.grow
  public static shrink: number|undefined| ParentConfigType.shrink
  public static visible: boolean|undefined
  public static holdSpace: boolean|undefined

  public static data: any|undefined

  public static conceptData:string|undefined
  public static conceptBlueprint:Blueprint|undefined
  public static dataLink: string[] | undefined

  public static value: string | undefined
}
