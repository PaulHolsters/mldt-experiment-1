import {NoValueType} from "../../../enums/NoValueTypes.enum";
import {ComponentModelType} from "../../../types/union-types";

export class MenubarContentInjectionConfigModel {
  constructor( public start: ComponentModelType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED,
               public end: ComponentModelType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED) {
  }
  getComponents(){
    return [this.start,this.end]
  }
}
