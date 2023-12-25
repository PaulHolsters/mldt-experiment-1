import {Component} from "./Component";
import {BackgroundColorType} from "../enums/backgroundColorType.enum";
import {ComponentModelType} from "../types/union-types";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";
import {CursorValues} from "../enums/cursorValues.enum";

export abstract class Container extends Component{
  public static children:ComponentModelType[]|null=null
  public static row:boolean|null=null
  public static column:boolean|null=null
  public static wrap:boolean|null=null
  public static justifyContentStart:boolean|null=null
  public static justifyContentCenter:boolean|null=null
  public static justifyContentEnd:boolean|null=null
  public static justifyContentBetween:boolean|null=null
  public static justifyContentEvenly:boolean|null=null
  public static justifyContentAround:boolean|null=null
  public static alignItemsStart:boolean|null=null
  public static alignItemsCenter:boolean|null=null
  public static alignItemsEnd:boolean|null=null
  public static alignContentStart:boolean|null=null
  public static alignContentCenter:boolean|null=null
  public static alignContentEnd:boolean|null=null
  public static alignContentBetween:boolean|null=null
  public static alignContentEvenly:boolean|null=null
  public static alignContentAround:boolean|null=null
  public static overflowScroll:boolean|null=null
  public static overflowXScroll:boolean|null=null
  public static overflowHidden:boolean|null=null
  public static overflowXHidden:boolean|null=null
  public static overflowAuto:boolean|null=null
  public static overflowXAuto:boolean|null=null
  public static height:string|null=null
  public static width:string|null=null
  public static backgroundColorPrimary:BackgroundColorType|null=null
  public static backgroundColorWhite:BackgroundColorType|null=null
  public static backgroundColorDanger:BackgroundColorType|null=null
  public static visible:boolean|null=null
  public static holdSpace:boolean|null=null
  public static calcHeight:string|null=null
  public static calcWidth:string|null=null
  public static alignSelfStretch:boolean|null=null
  public static alignItemsStretch:boolean|null=null
  public static grow:number|null=null
  public static shrink:number|null=null
  public static display: string|null=null
  public static data: any|null=null
  public static outputData:string|null=null
  public static propsByData:[PropertyName,Datalink,Function[]]|null=null
  public static cursor:CursorValues|null=null
}
