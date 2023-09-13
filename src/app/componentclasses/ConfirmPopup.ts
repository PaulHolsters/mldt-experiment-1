import {Component} from "./Component";
import {ConfirmationModel} from "../design-dimensions/ConfirmationModel";

export abstract class ConfirmPopup extends Component{
  public static confirmationModel:ConfirmationModel|undefined = undefined
  public static data: any|undefined = undefined
}
