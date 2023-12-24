import {TriggerType} from "../enums/triggerTypes.enum";
import {SourceType} from "../enums/sourceTypes.enum";
import {ActionIdType, ComponentNameType, TriggerIdType} from "../types/type-aliases";
import {ServiceType} from "../enums/serviceTypes.enum";
import {NoValueType} from "../enums/NoValueTypes.enum";

export class Trigger {
  public readonly sourceType:SourceType
  public constructor(
    public name:TriggerType,
    public source:ComponentNameType|ActionIdType|ServiceType|[ComponentNameType,string],
    public id:TriggerIdType|NoValueType.NO_VALUE_ALLOWED=NoValueType.NO_VALUE_ALLOWED,
  ) {
    switch (name){
      case TriggerType.ComponentClicked:
        this.sourceType = SourceType.Component
        break
      case TriggerType.RootComponentReady:
        this.sourceType = SourceType.Component
        break
      case TriggerType.ActionFinished:
        this.sourceType = SourceType.Action
        break
      case TriggerType.ClientDataUpdated:
        this.sourceType = SourceType.System
        break
      case TriggerType.ComponentInitialized:
        this.sourceType = SourceType.Component
        break
      case TriggerType.ComponentReady:
        this.sourceType = SourceType.Component
        break
      case TriggerType.InstanceNeeded:
        this.sourceType = SourceType.System
        break
      case TriggerType.AllInstancesNeeded:
        this.sourceType = SourceType.System
        break
      case TriggerType.BlueprintStrNeeded:
        this.sourceType = SourceType.System
        break
      case TriggerType.ActionAccepted:
        this.sourceType = SourceType.System
        break
      case TriggerType.ActionRejected:
        this.sourceType = SourceType.System
        break
      case TriggerType.PageChanged:
        this.sourceType = SourceType.Component
        break
      case TriggerType.RowSelected:
        this.sourceType = SourceType.Component
        break
      case TriggerType.BlueprintStrReady:
        this.sourceType = SourceType.System
        break
      case TriggerType.ComponentHide:
        this.sourceType = SourceType.Component
        break
      case TriggerType.MenuItemSelected:
        this.sourceType = SourceType.Component
        break
      case TriggerType.DataPropertyInitialized:
        this.sourceType = SourceType.System
        break
      case TriggerType.IndexUpdated:
        this.sourceType = SourceType.System
        break
      case TriggerType.ComponentHovered:
        this.sourceType = SourceType.Component
        break
      default:
        throw new Error('The trigger is not implemented yet: '+name)
    }
  }
}
