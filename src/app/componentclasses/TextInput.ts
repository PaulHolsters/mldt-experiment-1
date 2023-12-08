import {Component} from "./Component";
import {IconType} from "../enums/iconType.enum";
import {IconPositionType} from "../enums/iconPositionType.enum";
import {Blueprint} from "../services/data/client/Blueprint";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";
export abstract class TextInput extends Component{
  public static width:string|null=null
  public static height:string|null=null
  public static calcHeight: string|null=null
  public static calcWidth: string|null=null
  public static updateKey: string|null=null
  public static conceptId:string|null=null
  public static icon: IconType | null=null
  public static iconPosition: IconPositionType |null=null
  public static advisoryText: string | null=null
  public static label: string | null=null
  public static floatLabel: boolean | null=null
  public static dirty: boolean | null=null
  public static invalid: boolean | null=null
  public static small: boolean | null=null
  public static large: boolean | null=null
  public static disabled: boolean | null=null

  public static keyFilter: string | RegExp |  "alphanum" | "hex" | "alpha" | "int" | "money" | "number" |null=null
  public static grow: number| ParentConfigType.grow|null=null
  public static shrink: number|null=null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null

  public static data: any|null=null
  public static outputData:string|null=null
  public static reset:boolean|null = null
  public static conceptBlueprint:Blueprint|null=null
  public static dataLink: string[] | null=null
  public static propsByData:[PropertyName,Datalink,Function[]]|null=null

  public static value: string | null=null
}
