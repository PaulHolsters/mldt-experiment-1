import {MenuItem} from "primeng/api";
import {ComponentModel} from "../ComponentModel";
import {NoValueType} from "../../enums/no_value_type";

export class AttributesConfigPropsModel {
  constructor(
    public src: string|NoValueType.NA = NoValueType.NA,
    public alt: string|NoValueType.NA = NoValueType.NA,
    public name: string|NoValueType.NA = NoValueType.NA,
    public width: number|NoValueType.NA = NoValueType.NA,
    public icon:string|NoValueType.NA = NoValueType.NA,
    public label:string|NoValueType.NA = NoValueType.NA,
    public menuItems: MenuItem[]|NoValueType.NA = NoValueType.NA,
    public start: ComponentModel|NoValueType.NA = NoValueType.NA,
    public end: ComponentModel|NoValueType.NA = NoValueType.NA,
    public content: ComponentModel|NoValueType.NA = NoValueType.NA,
    public textWhenEmpty:string|NoValueType.NA = NoValueType.NA,
    public paginator:boolean = false,
    public rows:number|NoValueType.NA = 5,
    public dataLink:string[]|NoValueType.NA = NoValueType.NA
  ) {
  }
}
