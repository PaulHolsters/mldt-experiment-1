import {Action} from "./Action";
import {Trigger} from "./Trigger";
import {EffectIdType} from "../types/type-aliases";
import {NoValueType} from "../enums/NoValueTypes.enum";
import {ServerAction} from "./ServerAction";

export class Effect {
  public constructor(
    public trigger:Trigger,
    public action:Action|ServerAction,
    public id:EffectIdType|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED,
  ) {
    // todo andere no value types zijn toegelaten omdat dit string types zijn
  }
}
