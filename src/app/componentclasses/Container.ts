import {Component} from "./Component";
import {ComponentModel} from "../models/ComponentModel";
import {BackgroundColorType} from "../enums/backgroundColorType.enum";
import {ConceptComponentModel} from "../models/Data/ConceptComponentModel";
import {AttributeComponentModel} from "../models/Data/AttributeComponentModel";

export abstract class Container extends Component{
  public static children:ComponentModel[]|undefined=undefined
  public static row:boolean|undefined=undefined
  public static column:boolean|undefined=undefined
  public static wrap:boolean|undefined=undefined
  public static justifyContentStart:boolean|undefined=undefined
  public static justifyContentCenter:boolean|undefined=undefined
  public static justifyContentEnd:boolean|undefined=undefined
  public static justifyContentBetween:boolean|undefined=undefined
  public static justifyContentEvenly:boolean|undefined=undefined
  public static justifyContentAround:boolean|undefined=undefined
  public static alignItemsStart:boolean|undefined=undefined
  public static alignItemsCenter:boolean|undefined=undefined
  public static alignItemsEnd:boolean|undefined=undefined
  public static alignContentStart:boolean|undefined=undefined
  public static alignContentCenter:boolean|undefined=undefined
  public static alignContentEnd:boolean|undefined=undefined
  public static alignContentBetween:boolean|undefined=undefined
  public static alignContentEvenly:boolean|undefined=undefined
  public static alignContentAround:boolean|undefined=undefined
  public static overflowScroll:boolean|undefined=undefined
  public static overflowXScroll:boolean|undefined=undefined
  public static overflowHidden:boolean|undefined=undefined
  public static overflowXHidden:boolean|undefined=undefined
  public static overflowAuto:boolean|undefined=undefined
  public static overflowXAuto:boolean|undefined=undefined
  public static height:string|undefined=undefined
  public static width:string|undefined=undefined
  public static backgroundColorPrimary:BackgroundColorType|undefined=undefined
  public static backgroundColorWhite:BackgroundColorType|undefined=undefined
  public static backgroundColorDanger:BackgroundColorType|undefined=undefined
  public static visible:boolean|undefined=undefined
  public static holdSpace:boolean|undefined=undefined
  public static calcHeight:string|undefined=undefined
  public static calcWidth:string|undefined=undefined
  public static alignSelfStretch:boolean|undefined=undefined
  public static alignItemsStretch:boolean|undefined=undefined
  public static grow:number|undefined=undefined
  public static shrink:number|undefined=undefined
  public static dataConcept: ConceptComponentModel | undefined
  public static dataAttribute: AttributeComponentModel | undefined
  public static dataLink: string[] | undefined

}
