import {Component} from "./Component";
import {Blueprint} from "../services/data/client/Blueprint";
import {DataRecord, List} from "../types/union-types";
import {ParentConfigType} from "../enums/ParentConfigTypes.enum";
// todo zoek een manier om af te dwingen dat de properties die hier gebruikt worden
//      ook aanwezig zijn in de modellen en dit op een consistente manier


export abstract class MultiSelect extends Component{

  public static options:DataRecord[]|undefined
  public static selectedOptions:DataRecord[]|undefined
  public static optionLabel:string|undefined

  public static calcWidth: string|undefined
  public static calcHeight: string|undefined

  public static updateKey: string|undefined

  public static width:string|undefined
  public static height:string|undefined
  public static grow: number| ParentConfigType.grow|null=null
  public static shrink: number|null=null
  public static visible: boolean|null=null
  public static holdSpace: boolean|null=null
  public static data: any|null=null
  public static outputData:List|null=null
  public static conceptBlueprint:Blueprint|null=null
  public static dataLink: string[] | null=null

  public static dirty: boolean | undefined
  public static invalid: boolean | undefined
  public static disabled: boolean | undefined

}
