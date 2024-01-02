import {ComponentConfigModel} from "../ComponentConfigModel";
import {CursorValues} from "../../enums/cursorValues.enum";
import {NoValueType} from "../../enums/NoValueTypes.enum";

export class ComponentStructuralConfigModel extends ComponentConfigModel{
  public repeater:boolean=false
  public cursor:CursorValues=CursorValues.Arrow
  setRepeater(repeater:boolean){
    this.repeater=repeater
    return this
  }
  setCursor(cursor:CursorValues){
    this.cursor=cursor
    return this
  }
}
