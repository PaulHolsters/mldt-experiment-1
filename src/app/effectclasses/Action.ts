import {TargetType} from "../enums/targetTypes.enum";
import {ActionType} from "../enums/actionTypes.enum";
import {ServiceType} from "../enums/serviceTypes.enum";
import {ServiceMethodType} from "../enums/serviceMethodTypes.enum";
import {ActionIdType, ComponentNameType, ConceptNameType, DataLink} from "../types/type-aliases";
import {ActionValueModel} from "../design-dimensions/ActionValueModel";
import {NoValueType} from "../enums/NoValueTypes.enum";
export class Action {
  public readonly service:ServiceType
  public readonly serviceMethod:ServiceMethodType
  public readonly targetType:TargetType
  public constructor(
    public id:ActionIdType,
    public type:ActionType,
    public target:ComponentNameType|NoValueType.CALCULATED_BY_ENGINE|NoValueType.NO_VALUE_ALLOWED=NoValueType.NO_VALUE_ALLOWED,
    public conceptName: ConceptNameType|DataLink|NoValueType.CALCULATED_BY_ENGINE|NoValueType.NO_VALUE_ALLOWED=NoValueType.NO_VALUE_ALLOWED,
    public value:ActionValueModel|NoValueType.NO_VALUE_ALLOWED=NoValueType.NO_VALUE_ALLOWED
  ) {
    switch (type){
      case ActionType.CreateInstance:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.CreateInstance
        this.targetType = TargetType.Server
        break
      case ActionType.SetGlobalResponsiveBehaviour:
        this.service = ServiceType.RBSService
        this.serviceMethod = ServiceMethodType.SetResponsiveBehaviour
        this.targetType = TargetType.Client
        break
      case ActionType.CreateStore:
        this.service = ServiceType.RenderPropertiesService
        this.serviceMethod = ServiceMethodType.CreateStore
        this.targetType = TargetType.Client
        break
      case ActionType.SetRenderProperty:
        this.service = ServiceType.UIService
        this.serviceMethod = ServiceMethodType.SetProperty
        this.targetType = TargetType.Client
        break
      case ActionType.UseInstanceFromFrontend:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.UseInstanceFromFrontend
        this.targetType = TargetType.Client
        break
      case ActionType.UseInstanceFromServer:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.UseInstanceFromServer
        this.targetType = TargetType.Client
        break
      case ActionType.UseInstancesFromFrontend:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.UseInstancesFromFrontend
        this.targetType = TargetType.Client
        break
      case ActionType.UseInstancesFromServer:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.UseInstancesFromServer
        this.targetType = TargetType.Client
        break
      case ActionType.UpdateDataRelatedProperties:
        this.service = ServiceType.UIService
        this.serviceMethod = ServiceMethodType.UpdateDataRelatedProperties
        this.targetType = TargetType.Client
        break
      case ActionType.GetInstance:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.GetInstance
        this.targetType = TargetType.Server
        break
      case ActionType.GetAllInstances:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.GetAllInstances
        this.targetType = TargetType.Server
        break
      case ActionType.GetBluePrint:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.GetBluePrint
        this.targetType = TargetType.Server
        break
      case ActionType.GetClientData:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.GetClientData
        this.targetType = TargetType.Client
        break
      case ActionType.CreateInstances:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.CreateInstances
        this.targetType = TargetType.Server
        break
      case ActionType.DeleteClientData:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.DeleteClientData
        this.targetType = TargetType.Client
        break
      case ActionType.DeleteInstances:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.DeleteInstances
        this.targetType = TargetType.Server
        break
      case ActionType.DeleteInstance:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.DeleteInstance
        this.targetType = TargetType.Server
        break
      case ActionType.SetConfirmation:
        this.service = ServiceType.UIService
        this.serviceMethod = ServiceMethodType.SetConfirmation
        this.targetType = TargetType.Client
        break
      case ActionType.UpdateInstance:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.UpdateInstance
        this.targetType = TargetType.Server
        break
      case ActionType.UpdateInstances:
        this.service = ServiceType.DataService
        this.serviceMethod = ServiceMethodType.UpdateInstances
        this.targetType = TargetType.Server
        break
      case ActionType.UpdateDataProperties:
        this.service = ServiceType.UIService
        this.serviceMethod = ServiceMethodType.UpdateDataProperties
        this.targetType = TargetType.Client
        break
      case ActionType.SetLocalConfigurationValueAndRebuild:
        this.service = ServiceType.UIService
        this.serviceMethod = ServiceMethodType.SetConfigValueAndRebuild
        this.targetType = TargetType.Client
        break
      default:
        throw new Error('The action is not implemented yet '+this.type)
        // todo add typescript switch completion
    }
  }
}
