import {NoValueType} from "../enums/no_value_type";
import {IconType} from "../enums/iconType.enum";
export class ConfirmationModel {
  isComponent?:boolean = false
  constructor(
    public icon:IconType|NoValueType.NI=NoValueType.NI,
    public message:string|NoValueType.NI=NoValueType.NI,
    public target:EventTarget|NoValueType.NVY=NoValueType.NVY,
    public data:any|NoValueType.NVY=NoValueType.NVY,

  ) {
  }
}
