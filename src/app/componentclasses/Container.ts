import {Component} from "./Component";
import {BackgroundColorType} from "../enums/backgroundColorType.enum";
import {ComponentModel} from "../design-dimensions/ComponentModel";

export abstract class Container extends Component{
  public static children:ComponentModel[]|undefined
  public static row:boolean|undefined
  public static column:boolean|undefined
  public static wrap:boolean|undefined
  public static justifyContentStart:boolean|undefined
  public static justifyContentCenter:boolean|undefined
  public static justifyContentEnd:boolean|undefined
  public static justifyContentBetween:boolean|undefined
  public static justifyContentEvenly:boolean|undefined
  public static justifyContentAround:boolean|undefined
  public static alignItemsStart:boolean|undefined
  public static alignItemsCenter:boolean|undefined
  public static alignItemsEnd:boolean|undefined
  public static alignContentStart:boolean|undefined
  public static alignContentCenter:boolean|undefined
  public static alignContentEnd:boolean|undefined
  public static alignContentBetween:boolean|undefined
  public static alignContentEvenly:boolean|undefined
  public static alignContentAround:boolean|undefined
  public static overflowScroll:boolean|undefined
  public static overflowXScroll:boolean|undefined
  public static overflowHidden:boolean|undefined
  public static overflowXHidden:boolean|undefined
  public static overflowAuto:boolean|undefined
  public static overflowXAuto:boolean|undefined
  public static height:string|undefined
  public static width:string|undefined
  public static backgroundColorPrimary:BackgroundColorType|undefined
  public static backgroundColorWhite:BackgroundColorType|undefined
  public static backgroundColorDanger:BackgroundColorType|undefined
  public static visible:boolean|undefined
  public static holdSpace:boolean|undefined
  public static calcHeight:string|undefined
  public static calcWidth:string|undefined
  public static alignSelfStretch:boolean|undefined
  public static alignItemsStretch:boolean|undefined
  public static grow:number|undefined
  public static shrink:number|undefined

  public static display: string|undefined

  public static data: any|undefined

}
