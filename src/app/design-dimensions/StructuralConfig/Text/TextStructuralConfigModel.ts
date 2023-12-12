import {NoValueType} from "../../../enums/NoValueTypes.enum";
import {ComponentStructuralConfigModel} from "../ComponentStructuralConfigModel";

export class TextStructuralConfigModel extends ComponentStructuralConfigModel{
  public text:string|NoValueType.NO_VALUE_YET=NoValueType.NO_VALUE_YET
  setText(text:string|NoValueType.NO_VALUE_NEEDED){
    this.text=text
    return this
  }

}
