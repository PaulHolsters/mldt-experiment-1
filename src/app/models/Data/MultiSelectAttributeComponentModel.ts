import {NoValueType} from "../../enums/no_value_type";
import {DataObjectModel} from "../DataObjectModel";

export class MultiSelectAttributeComponentModel {
  constructor(
    public conceptName: string | NoValueType.DBI,
    public options: DataObjectModel[] | NoValueType.DBI,
    public selectedOptions: DataObjectModel[],
    public optionLabel: string | NoValueType.DBI
  ) {
}
}
