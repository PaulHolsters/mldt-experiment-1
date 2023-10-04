import {Action} from "./Action";
import {Trigger} from "./Trigger";
import {EffectIdType, NotAllowed} from "../types/type-aliases";
export class Effect {
  public constructor(
    public trigger:Trigger,
    public action:Action,
    public id:EffectIdType|NotAllowed=undefined,
  ) {


  }
}
