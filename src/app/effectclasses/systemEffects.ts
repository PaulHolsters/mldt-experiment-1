import {Effect} from "./Effect";
import {Trigger} from "./Trigger";
import {TriggerType} from "../enums/triggerTypes.enum";
import {Action} from "./Action";
import {ActionType} from "../enums/actionTypes.enum";
import {ServiceType} from "../enums/serviceTypes.enum";

export abstract class SystemEffects {
  public static getSystemEffects():Effect[]{
    return [
      new Effect(
        new Trigger(TriggerType.RootComponentReady, 'content-container'),
        new Action('create_store',ActionType.CreateStore,undefined,undefined)
      ),
      new Effect(
      new Trigger(TriggerType.ActionFinished, 'create_store'),
      new Action('set_RBS',ActionType.SetGlobalResponsiveBehaviour,undefined,undefined)
      ),
      new Effect(
        new Trigger(TriggerType.ClientDataUpdated,ServiceType.DataService),
        new Action('update_data_related_render_properties',ActionType.UpdateDataRelatedProperties)
      ),
      new Effect(
        new Trigger(TriggerType.BlueprintStrReady, ServiceType.DataService),
        new Action('create_client_data',ActionType.CreateClientData)
      ),
      new Effect(
        new Trigger(TriggerType.BlueprintStrNeeded, ServiceType.DataService),
        new Action('get_blueprint',ActionType.GetBluePrint) // het geniale is: dit resulteert automatisch in een clientdata instance
      )
    ]
  }
}
