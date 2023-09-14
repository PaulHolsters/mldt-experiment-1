import {NoValueType} from "../../../enums/no_value_type";
import {DataObjectModel} from "../../DataObjectModel";
import {DataRecordModel} from "../../DataRecordModel";

export class MultiSelectAttributeComponentModel {
  constructor(
    public conceptName: string | NoValueType.DBI,
    public options: DataRecordModel[] | NoValueType.DBI,
    public selectedOptions: DataRecordModel[],
    public optionLabel: string | NoValueType.DBI
  ) {
}
}
