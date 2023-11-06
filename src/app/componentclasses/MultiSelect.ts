import {Component} from "./Component";
import {Blueprint} from "../services/data/client/Blueprint";
import {List} from "../types/union-types";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
// todo zoek een manier om af te dwingen dat de properties die hier gebruikt worden
//      ook aanwezig zijn in de modellen en dit op een consistente manier


export abstract class MultiSelect extends Component{
  public static options:List|null=null
  public static selectedOptions:List|null=null
  public static optionLabel:string|null=null
  public static optionValue:string|null=null
  public static calcWidth: string|null=null
  public static calcHeight: string|null=null
  public static updateKey: string|null=null
  public static width:string|null=null
  public static height:string|null=null
  public static grow: number| ParentConfigType.grow|null=null
  public static shrink: number|null=null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null
  public static data: any|null=null
  public static outputData:List|null=null
  public static reset:boolean|null = null
  public static conceptBlueprint:Blueprint|null=null
  public static dataLink: string[] | null=null
  public static dirty: boolean | null=null
  public static invalid: boolean | null=null
  public static disabled: boolean | null=null

}
