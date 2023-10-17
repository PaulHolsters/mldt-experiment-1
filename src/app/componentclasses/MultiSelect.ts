import {Component} from "./Component";
import {Blueprint} from "../services/data/client/Blueprint";
import {DataRecord} from "../types/union-types";
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

  public static conceptData:DataRecord[]|undefined
  public static conceptBlueprint:Blueprint|undefined
  public static dataLink: string[] | undefined

  public static dirty: boolean | undefined
  public static invalid: boolean | undefined
  public static disabled: boolean | undefined

}
