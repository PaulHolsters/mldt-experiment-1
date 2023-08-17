import {Action} from "./Action";
import {Trigger} from "./Trigger";
import { EffectIdType} from "../types/union-types";
import {NoValueType} from "../enums/no_value_type";
export class Effect {
  public constructor(
    public trigger:Trigger,
    public action:Action,
    public id:EffectIdType|NoValueType.NA=NoValueType.NA,
  ) {


  }
}
