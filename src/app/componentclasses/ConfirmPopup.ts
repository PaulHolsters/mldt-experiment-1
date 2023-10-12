import {Component} from "./Component";
import {ConfirmationModel} from "../design-dimensions/StructuralConfig/confirm-popup/ConfirmationModel";

export abstract class ConfirmPopup extends Component{
  public static confirmationModel:ConfirmationModel|undefined
  public static data: any|undefined
}
