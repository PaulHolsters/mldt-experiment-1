import {ComponentConfigModel} from "../ComponentConfigModel";
import {CursorValues} from "../../enums/cursorValues.enum";

export class ComponentStructuralConfigModel extends ComponentConfigModel{
  public repeater:boolean=false
  public cursor:CursorValues=CursorValues.Arrow
}
