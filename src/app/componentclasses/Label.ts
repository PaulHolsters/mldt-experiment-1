import {Component} from "./Component";
import {BackgroundColorType} from "../enums/backgroundColorType.enum";
import {PaddingType} from "../enums/paddingType.enum";
import {MarginType} from "../enums/marginType.enum";
import {LabelType} from "../enums/labelType.enum";
import {Blueprint} from "../services/data/client/Blueprint";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {BorderModel} from "../design-dimensions/BorderModel";
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
  public static grow: number|undefined| ParentConfigType.grow = undefined
  public static shrink: number|undefined| ParentConfigType.shrink = undefined
  public static visible: boolean|undefined = undefined
  public static holdSpace: boolean|undefined = undefined

  public static data: any|undefined = undefined
  public static hardCodedData: any|undefined = undefined

  public static conceptBlueprint:Blueprint|undefined = undefined
  public static dataLink:string[]|undefined = undefined
}
