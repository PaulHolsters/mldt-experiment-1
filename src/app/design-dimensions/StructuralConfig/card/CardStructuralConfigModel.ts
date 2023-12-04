import {MenuItem} from "primeng/api";
import {NoValueType} from "../../../enums/NoValueTypes.enum";

export class CardStructuralConfigModel {
  constructor(public title:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED,
              public subtitle:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED,) {
  }
  setTitle(title:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED){
    this.title=title
    return this
  }
  setSubTitle(subtitle:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED){
    this.subtitle=subtitle
    return this
  }
}
