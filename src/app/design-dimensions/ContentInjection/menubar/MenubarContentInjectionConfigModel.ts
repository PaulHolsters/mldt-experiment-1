import {ComponentModel} from "../../ComponentModel";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class MenubarContentInjectionConfigModel {
  constructor( public start: ComponentModel|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED,
               public end: ComponentModel|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED) {
  }
}
