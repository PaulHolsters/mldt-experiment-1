import {ConditionType} from "../types/type-aliases";

export interface FilterModel {
  record?:ConditionType,
  table?:ConditionType,
  db?:ConditionType
}
