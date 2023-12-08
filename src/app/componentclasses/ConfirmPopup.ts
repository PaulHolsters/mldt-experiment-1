import {Component} from "./Component";
import {ConfirmationModel} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmationModel";
import {PropertyName} from "../enums/PropertyNameTypes.enum";
import {Datalink} from "../design-dimensions/datalink";

export abstract class ConfirmPopup extends Component{
  public static confirmationModel:ConfirmationModel|undefined
  public static data: any|undefined
  public static propsByData:[PropertyName,Datalink,Function[]]|null=null
}
