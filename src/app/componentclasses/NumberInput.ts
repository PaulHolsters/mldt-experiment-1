import {Component} from "./Component";
import {ElementRef} from "@angular/core";
import {Blueprint} from "../services/data/client/Blueprint";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
export abstract class NumberInput extends Component{
  public static advisoryText:string|null=null
  public static label:string|null=null
  public static floatLabel:boolean|null=null
  public static disabled:boolean|null=null
  public static dirty:boolean|null=null
  public static invalid:boolean|null=null
  public static useGrouping:boolean|null=null
  public static mode:string|null=null
  public static suffix:string|null=null
  public static prefix:string|null=null
  public static locale:string|null=null
  public static currency:string|null=null
  public static currencyDisplay:string|null=null
  public static minFractionDigits:number|null=null
  public static maxFractionDigits:number|null=null
  public static min:number|null=null
  public static max:number|null=null
  public static showButtons:boolean|null=null
  public static spinnerMode:string|null=null
  public static step:number|null=null
  public static decrementButtonClass:string|null=null
  public static incrementButtonClass:string|null=null
  public static incrementButtonIcon:string|null=null
  public static decrementButtonIcon:string|null=null
  public static buttonLayout:string|null=null
  public static updateKey: string
  public static calcHeight: string|null=null
  public static calcWidth: string|null=null
  public static width:string|null=null
  public static height:string|null=null
  public static grow: number| ParentConfigType.grow|null=null
  public static shrink: number|null=null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null

  public static data: any|null=null
  public static outputData:string|null=null
  public static reset:boolean|null = null
  public static conceptBlueprint:Blueprint|null=null
  public static dataLink: string[] | null=null
}
