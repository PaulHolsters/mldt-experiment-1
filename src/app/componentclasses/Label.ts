import {Component} from "./Component";
import {BackgroundColorType} from "../enums/backgroundColorType.enum";
import {PaddingType} from "../enums/paddingType.enum";
import {MarginType} from "../enums/marginType.enum";
import {BorderModel} from "../models/BorderModel";
import {LabelType} from "../enums/labelType.enum";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";
import {Blueprint} from "../services/data/client/Blueprint";
export abstract class Label extends Component{
  public static width:string|undefined = undefined
  public static height:string|undefined = undefined
  public static text:string|undefined = undefined
  public static backgroundColor: BackgroundColorType|undefined = undefined
  public static calcHeight: string|undefined = undefined
  public static calcWidth: string|undefined = undefined
  public static padding: PaddingType|undefined = undefined
  public static margin: MarginType|undefined = undefined
  public static border: BorderModel|undefined = undefined
  public static labelType: LabelType|undefined = undefined
  public static grow: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static shrink: number|undefined| ComponentDimensionValueConfigType.Parent = undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined

  public static data: any|undefined = undefined
  public static hardCodedData: any|undefined = undefined

  public static conceptBlueprint:Blueprint|undefined = undefined
  public static dataLink:string[]|undefined = undefined
}
