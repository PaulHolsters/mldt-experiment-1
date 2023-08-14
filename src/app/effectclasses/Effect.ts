import {Action} from "./Action";
import {Trigger} from "./Trigger";
export class Effect {
  public constructor(
    public trigger:Trigger,
    public action:Action
  ) {


  }
}
