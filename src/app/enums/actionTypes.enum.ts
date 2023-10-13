export enum ActionType {
  // todo hier kan nog gerefactored worden omdat er een sterke connectie is tussen action en target type
  UpdateDataProperties=1,
  CreateInstance ,
  CreateInstances,
  UpdateInstance,
  UpdateInstances,
  GetBluePrint,
  GetInstance,
  GetAllInstances,
  DeleteInstance,
  DeleteInstances,
  SetGlobalResponsiveBehaviour,
  CreateStore,
  SetRenderProperty,
  SetLocalConfigurationValueAndRebuild,
  SetConfirmation,// todo hier zouden geen component namen mogen komen
  CreateClientData,
  GetClientData,
  DeleteClientData,
  UpdateDataRelatedProperties,
}
