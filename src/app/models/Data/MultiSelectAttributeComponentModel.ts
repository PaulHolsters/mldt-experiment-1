import {NoValueType} from "../../enums/no_value_type";

export class MultiSelectAttributeComponentModel {
  constructor(
    public conceptName: string | NoValueType.DBI,
    public options: Object[] | NoValueType.DBI,
    public selectedOptions: Object[],
    public optionLabel: string | NoValueType.DBI
  ) {
}
}
