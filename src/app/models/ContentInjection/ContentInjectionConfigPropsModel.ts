import {ComponentModel} from "../ComponentModel";
import {NoValueType} from "../../enums/no_value_type";
import {ComponentObjectModel} from "../ComponentObjectModel";
import {TableColumnModel} from "../TableColumnModel";

export class ContentInjectionConfigPropsModel {
  constructor(
    public start: ComponentModel|ComponentObjectModel|NoValueType = NoValueType.NA,
    public end: ComponentModel|ComponentObjectModel|NoValueType= NoValueType.NA,
    public content: ComponentModel|ComponentObjectModel|NoValueType = NoValueType.NA,
    public columnHeaderComponents: ComponentModel[]|ComponentObjectModel[]|NoValueType = NoValueType.NA,
    public footer: ComponentModel|ComponentObjectModel|NoValueType = NoValueType.NA,
    public caption: ComponentModel|ComponentObjectModel|NoValueType = NoValueType.NA,
    public extraColumns:TableColumnModel[]|NoValueType = NoValueType.NA,
  ) {
  }
}
// posible values:
/*
* ComponentModel|ComponentObjectModel
* ComponentModel[]|ComponentObjectModel[]
* TableColumnModel[]
* */
