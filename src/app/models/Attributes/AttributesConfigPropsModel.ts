import {MenuItem} from "primeng/api";
import {ComponentModel} from "../ComponentModel";
import {NoValueType} from "../../enums/no_value_type";
import {ComponentObjectModel} from "../ComponentObjectModel";

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
    public filterComponent: ComponentModel|NoValueType.NA = NoValueType.NA,
    public header:string|NoValueType.NA = NoValueType.NA,
    public textWhenEmpty:string|NoValueType.NA = NoValueType.NA,
    public paginator:boolean = false,
    public rows:number|NoValueType.NA = 5,
    public rowsPerPage:number[]|NoValueType.NA = [10,25,50],
    // todo zou het niet logischer zijn om dataLink te verplaatsen naar het datamodel?
    public dataLink:string[]|NoValueType.NA = NoValueType.NA,
    public columnHeaderComponents:ComponentModel[]|ComponentObjectModel[]|NoValueType.NA = NoValueType.NA
  ) {
  }
}
