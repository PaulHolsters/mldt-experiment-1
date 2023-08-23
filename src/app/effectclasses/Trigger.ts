import {TriggerType} from "../enums/triggerTypes.enum";
import {SourceType} from "../enums/sourceTypes.enum";
import {NoValueType} from "../enums/no_value_type";
import {ActionIdType, ComponentNameType,  TriggerIdType} from "../types/type-aliases";
import {ServiceType} from "../enums/serviceTypes.enum";
export class Trigger {
  public readonly sourceType:SourceType
  public constructor(
    public name:TriggerType,
    public source:ComponentNameType|ActionIdType|ServiceType,
    public id:TriggerIdType|NoValueType.NA=NoValueType.NA,
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
      default:
        throw new Error('The trigger is not implemented yet')
    }
  }
}
