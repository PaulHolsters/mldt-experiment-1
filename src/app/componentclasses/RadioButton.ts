import {Component} from "./Component";
import {Blueprint} from "../services/data/client/Blueprint";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";
import {CursorValues} from "../enums/cursorValues.enum";

export abstract class RadioButton extends Component{

  public static calcHeight: string|undefined
  public static calcWidth: string|undefined
  public static width:string|undefined
  public static height:string|undefined

  public static values:string[]|undefined
  public static selectedValue: string|undefined

  public static conceptData:string|undefined
  public static conceptBlueprint:Blueprint|undefined
  public static dataLink: string[] | undefined

  public static dirty: boolean | undefined
  public static invalid: boolean | undefined
  public static disabled: boolean | undefined
  public static propsByData:[PropertyName,Datalink,Function[]]|null=null
  public static cursor:CursorValues|null=null

}
