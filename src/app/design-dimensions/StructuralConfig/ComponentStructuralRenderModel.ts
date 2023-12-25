import {ComponentRenderModel} from "../ComponentRenderModel";
import {CursorValues} from "../../enums/cursorValues.enum";

export class ComponentStructuralRenderModel extends ComponentRenderModel{
  public repeater:boolean|null=null
  public cursor:CursorValues|null=null
}
