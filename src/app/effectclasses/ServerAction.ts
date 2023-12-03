import {ActionIdType, ComponentNameType, FormTargetType} from "../types/type-aliases";
import {NoValueType} from "../enums/NoValueTypes.enum";

export class ServerAction {
  public constructor(
    public id:ActionIdType,
    public target:ComponentNameType|FormTargetType|
      NoValueType.CALCULATED_BY_ENGINE|
      NoValueType.NO_VALUE_ALLOWED
      =NoValueType.NO_VALUE_ALLOWED,
  ) {
  }
}
