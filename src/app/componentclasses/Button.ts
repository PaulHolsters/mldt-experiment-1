import {Component} from "./Component";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";

export abstract class Button extends Component{
  public static icon:string|null=null
  public static label: string|null=null
  public static buttonSize: string|null=null
  public static buttonMeaning: string|null=null
  public static buttonAppearance: string|null=null
  public static buttonForm: string|null=null
  public static calcHeight: string|null=null
  public static calcWidth: string|null=null
  public static width:string|null=null
  public static height:string|null=null
  public static grow: number| ParentConfigType.grow|null=null
  public static shrink: number| ParentConfigType.shrink|null=null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null
  public static display: string|null=null
  public static padding: string|null=null
  public static margin: string|null=null

  public static data: any|null=null
  public static hardCodedData: any|null=null
  public static propsByData:[PropertyName,Datalink,Function[]]|null=null

}
