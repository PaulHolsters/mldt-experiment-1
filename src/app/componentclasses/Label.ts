import {Component} from "./Component";
import {BackgroundColorType} from "../enums/backgroundColorType.enum";
import {PaddingType} from "../enums/paddingType.enum";
import {MarginType} from "../enums/marginType.enum";
import {LabelType} from "../enums/labelType.enum";
import {Blueprint} from "../services/data/client/Blueprint";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {BorderModel} from "../design-dimensions/BorderModel";
export abstract class Label extends Component{
  public static width:string|undefined
  public static height:string|undefined
  public static text:string|undefined
  public static backgroundColor: BackgroundColorType|undefined
  public static calcHeight: string|undefined
  public static calcWidth: string|undefined
  public static padding: PaddingType|undefined
  public static margin: MarginType|undefined
  public static border: BorderModel|undefined
  public static labelType: LabelType|undefined
  public static grow: number|undefined| ParentConfigType.grow
  public static shrink: number|undefined| ParentConfigType.shrink
  public static visible: boolean|undefined
  public static holdSpace: boolean|undefined

  public static data: any|undefined
  public static hardCodedData: any|undefined

  public static conceptBlueprint:Blueprint|undefined
  public static dataLink:string[]|undefined
}
