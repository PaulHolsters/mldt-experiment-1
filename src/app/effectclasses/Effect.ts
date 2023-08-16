import {Action} from "./Action";
import {Trigger} from "./Trigger";
import { EffectIdType} from "../types/type-aliases";
import {NoValueType} from "../enums/no_value_type";
export class Effect {
  public constructor(
    public trigger:Trigger,
    public action:Action,
    public id:EffectIdType|NoValueType.NA=NoValueType.NA,
  ) {


  }
}
