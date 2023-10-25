import {NoValueType} from "../../../enums/NoValueTypes.enum";
import {ComponentModelType, isNoValueType} from "../../../types/union-types";

export class MenubarContentInjectionConfigModel {
  constructor( public start: ComponentModelType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED,
               public end: ComponentModelType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED) {
  }
  getComponents():ComponentModelType[]{
    const arr = []
    if(!isNoValueType(this.start)){
      arr.push(this.start)
    }
    if(!isNoValueType(this.end)){
      arr.push(this.end)
    }
    return arr
  }
}
