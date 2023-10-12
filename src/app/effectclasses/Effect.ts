import {Action} from "./Action";
import {Trigger} from "./Trigger";
import {EffectIdType} from "../types/type-aliases";
import {NoValueType} from "../enums/NoValueTypes.enum";

export class Effect {
  public constructor(
    public trigger:Trigger,
    public action:Action,
    public id:EffectIdType|NoValueType.NO_VALUE_ALLOWED=NoValueType.NO_VALUE_ALLOWED,
  ) {


  }
}
