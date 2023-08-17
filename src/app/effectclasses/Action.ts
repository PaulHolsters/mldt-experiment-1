import {TargetType} from "../enums/targetTypes.enum";
import {NoValueType} from "../enums/no_value_type";
import {ActionType} from "../enums/actionTypes.enum";
import {ServiceType} from "../enums/serviceTypes.enum";
import {ServiceMethodType} from "../enums/serviceMethodTypes.enum";
import {ActionIdType, ComponentNameType, ConceptNameType, ResponsiveConfigModel} from "../types/union-types";
import {ActionValueModel} from "../models/ActionValueModel";
import {ConceptName} from "../types/ConceptName";
export class Action {
  public readonly service:ServiceType
  public readonly serviceMethod:ServiceMethodType
  public readonly targetType:TargetType
  public constructor(
    public type:ActionType,
    public conceptName: ConceptNameType|NoValueType.NA=NoValueType.NA,
    public target:ComponentNameType|NoValueType.NA=NoValueType.NA,
    public id:ActionIdType|NoValueType.NA=NoValueType.NA,
    public value:ResponsiveConfigModel|ActionValueModel|NoValueType.NA=NoValueType.NA
  ) {
    ConceptName.check(conceptName)
    switch (type){
      case ActionType.CreateInstance:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.PersistNewInstance
        this.targetType = TargetType.Server
        break
      case ActionType.SetGlobalResponsiveBehaviour:
        this.service = ServiceType.RBSService
        this.serviceMethod = ServiceMethodType.SetResponsiveBehaviour
        this.targetType = TargetType.Client
        break
      default:
        throw new Error('The action is not implemented yet')
    }
  }
}
