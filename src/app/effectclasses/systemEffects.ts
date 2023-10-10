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
        new Action('create_store',ActionType.CreateStore,NoValueType.NA,NoValueType.NA)
      ),
      new Effect(
      new Trigger(TriggerType.ActionFinished, 'create_store'),
      new Action('set_RBS',ActionType.SetGlobalResponsiveBehaviour,NoValueType.NA,NoValueType.NA)
      ),
      new Effect(
        new Trigger(TriggerType.ClientDataUpdated,ServiceType.DataService),
        new Action('update_view',ActionType.UpdateView)
      ),
/*      new Effect(
        new Trigger(TriggerType.ClientDataUpdated,ServiceType.DataService),
        new Action('continue_suspended_server_calls',ActionType.ContinueSuspendedServerCalls)
      ),
      new Effect(
        new Trigger(TriggerType.BlueprintStrReady, ServiceType.DataService),
        new Action('create_client_data',ActionType.CreateClientData)
      )*/
    ]
  }
}
