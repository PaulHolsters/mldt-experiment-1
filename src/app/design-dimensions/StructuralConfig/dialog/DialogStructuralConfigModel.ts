import {ComponentStructuralConfigModel} from "../ComponentStructuralConfigModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class DialogStructuralConfigModel extends ComponentStructuralConfigModel{
  public header:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED
  public blockUI:boolean=true
  constructor() {
    super()
  }
}
