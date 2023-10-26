import {ComponentModelType, isNoValueType} from "../../../types/union-types";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class DialogContentInjectionConfigModel {
  public content: ComponentModelType|NoValueType.NO_VALUE_YET=NoValueType.NO_VALUE_YET
  constructor( ) {
  }
  setContent(content: ComponentModelType|NoValueType.NO_VALUE_YET){
    this.content=content
    return this
  }
  getComponents():ComponentModelType[]{
    if(isNoValueType(this.content)) return []
    return [this.content]
  }
}
