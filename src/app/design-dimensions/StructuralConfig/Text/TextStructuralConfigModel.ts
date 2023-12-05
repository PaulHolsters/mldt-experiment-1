import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class TextStructuralConfigModel {
  public text:string|NoValueType.NO_VALUE_YET=NoValueType.NO_VALUE_YET
  constructor(){
  }
  setText(text:string|NoValueType.NO_VALUE_NEEDED){
    this.text=text
    return this
  }

}
