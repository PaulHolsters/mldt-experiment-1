import {Effect} from "./Effect";
import {Trigger} from "./Trigger";
import {TriggerType} from "../enums/triggerTypes.enum";
import {Action} from "./Action";
import {ActionType} from "../enums/actionTypes.enum";
import {NoValueType} from "../enums/no_value_type";
import {ServiceType} from "../enums/serviceTypes.enum";

export abstract class SystemEffects {
  public static getSystemEffects():Effect[]{
    return [
      new Effect(
        new Trigger(TriggerType.RootComponentReady, 'content-container'),
        new Action(ActionType.CreateStore,NoValueType.NA,NoValueType.NA,'createStore')
      ),
      new Effect(
      new Trigger(TriggerType.ActionFinished, 'createStore'),
      new Action(ActionType.SetGlobalResponsiveBehaviour,NoValueType.NA,NoValueType.NA,'setRBS')
      ),
      new Effect(
        new Trigger(TriggerType.ClientDataUpdated,ServiceType.DataService),
        new Action(ActionType.UpdateView)
      ),
    ]
  }
}
