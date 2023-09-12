import {ComponentModel} from "../../ComponentModel";
import {NoValueType} from "../../../enums/no_value_type";

export interface TableColumnModel {
    field:string,
    header:string,
    sort:boolean,
    filter:boolean, // filtering is altijd custom
    customSort:boolean,
    anchor:ComponentModel|NoValueType.NA
}
