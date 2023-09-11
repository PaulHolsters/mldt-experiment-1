import {NoValueType} from "../../enums/no_value_type";

export class TableColumnAttributeConfigModel {
constructor(
  public sort:boolean = false, // data rep eigen model : op colom niveau maar dat maakt niet uit, wel zien dta je natuurlijk één model per rubriek hebt per component
  public label:string|NoValueType.DBI, // data rep eigen model : op colom niveau maar dat maakt niet uit, wel zien dta je natuurlijk één model per rubriek hebt per component
  public customSort:Function|NoValueType.NA= NoValueType.NA, // data rep eigen model : op colom niveau maar dat maakt niet uit, wel zien dta je natuurlijk één model per rubriek hebt per component
  public filter:boolean = false,// data rep eigen model : op colom niveau maar dat maakt niet uit, wel zien dta je natuurlijk één model per rubriek hebt per component
  public customFilter:Function|NoValueType.NA= NoValueType.NA,// data rep eigen model : op colom niveau maar dat maakt niet uit, wel zien dta je natuurlijk één model per rubriek hebt per component

  ) {
}
}
