import {ComponentModel} from "./ComponentModel";
import {NoValueType} from "../enums/no_value_type";

export class TableColumnModel {
  isComponent?:boolean = false
  constructor(
    public field:string,
    public header:string,
    public sort:boolean,
    public filter:boolean, // filtering is altijd custom
    public customSort:boolean,
    public anchor:ComponentModel|NoValueType.NA=NoValueType.NA
  ) {
  }
}
