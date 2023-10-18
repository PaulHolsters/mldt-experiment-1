import {PropertyName} from "../../enums/PropertyNameTypes.enum";
import {StateService} from "../../services/state.service";
import {ActionType} from "../../enums/actionTypes.enum";
import {TriggerType} from "../../enums/triggerTypes.enum";
import {Effect} from "../../effectclasses/Effect";
import {Trigger} from "../../effectclasses/Trigger";
import {Action} from "../../effectclasses/Action";
import {ActionValueModel} from "../../design-dimensions/ActionValueModel";
import {DataRecord} from "../../types/union-types";

const customFunction = (stateService: StateService): any[] => {
  const cl = stateService.getValue('table', PropertyName.currentDataList)
  const cc = stateService.getValue('filter-dialog', PropertyName.data)
  return cl.filter((record: DataRecord) => {
    const entry = Object.entries(record).find(([k, v]) => {
      return k === cc.field
    })
    if (entry) {
      return (Boolean)(Math.round(Math.random()))
    }
    return false
  })
}
export const effects:Effect[] = [
/*  new Effect(
    new Trigger(TriggerType.ComponentReady, 'delete-container'),
    new Action('getBP_product',ActionType.GetBluePrint,'product','delete-container'),
  ),
  new Effect(
    new Trigger(TriggerType.ComponentClicked, 'delete-btn'),
    new Action('delete_product',ActionType.DeleteInstance, 'product',  'delete-product'),
  ),
  new Effect(
    new Trigger(TriggerType.ActionFinished,'delete_product'),
    new Action('set_delete-container_invisible',
      ActionType.SetRenderProperty, 'delete-container',
      new ActionValueModel(PropertyName.visible, false)),
  ),*/
  new Effect(
    new Trigger(TriggerType.ComponentReady, 'main-table'),
    new Action('populate_table',ActionType.GetAllInstances, 'product','main-table')
  ),
  new Effect(
    new Trigger(TriggerType.ComponentClicked, 'edit-product-btn'),
    new Action('create_client_data',ActionType.CreateClientData, 'product','edit-product-text-input')
  ),
  new Effect(
    new Trigger(TriggerType.ActionFinished, 'create_client_data'),
    new Action('set_edit-product-dialog_visible',ActionType.SetRenderProperty, undefined,'edit-product-dialog',
      new ActionValueModel(PropertyName.visible, true))
  ),
  new Effect(
    new Trigger(TriggerType.ComponentClicked, 'edit-product-submit-btn'),
    // todo het lijkt er op dat je ook een component naam gaat nodig hebben
    new Action('save_updated_product',ActionType.UpdateInstance,'product')
  ),
]

/*{
  on:EventType.ActionFinished,
    sourceId:'delete-product',
  actionType:ActionType.Client,
  actionSubType:ActionSubType.GetDataByID,
  targetName:'delete-container',
  sourceName:NoValueType.NA,
  targetType:TargetType.Component,
}*/




  /*
  {
    actionType: ActionType.Client,
    actionSubType: ActionSubType.SetConfigValueAndRebuild,
    targetType: TargetType.Component,
    targetName: 'delete-container',
    value: new ResponsiveSpacingConfigModel(new VisibilityConfigPropsModel(false, false)),
    sourceName: 'table',
    on: EventType.RowSelected
  },*/
  /*   ,*/
/*  {
    on: EventType.ActionFinished,
    sourceId: 'delete-product',
    actionType: ActionType.Client,
    actionSubType: ActionSubType.SetConfigValueAndRebuild,
    value: new ResponsiveSpacingConfigModel(new VisibilityConfigPropsModel(false, false)),
    targetName: 'delete-container',
    sourceName: NoValueType.NA,
    targetType: TargetType.Component,
  },
  {
    on: EventType.ComponentClicked,
    actionType: ActionType.Client,
    actionSubType: ActionSubType.SetProperty,
    value: new ActionValueModel(PropertyName.visible, true),
    targetName: 'filter-dialog',
    sourceName: 'filter-h1',
    targetType: TargetType.Component,
  },
  {
    on: EventType.ComponentClicked,
    actionType: ActionType.Client,
    actionSubType: ActionSubType.SetProperty,
    value: new ActionValueModel(PropertyName.currentDataList, customFunction),
    targetName: 'table',
    sourceName: 'filter-btn',
    targetType: TargetType.Component,
    id: 'filtering table'
  },
  {
    on: EventType.ActionFinished,
    sourceId: 'filtering table',
    actionType: ActionType.Client,
    actionSubType: ActionSubType.SetProperty,
    value: new ActionValueModel(PropertyName.visible, false),
    targetName: 'filter-dialog',
    sourceName: NoValueType.NA,
    targetType: TargetType.Component,
  },
  {
    on: EventType.ComponentClicked,
    actionType: ActionType.Client,
    actionSubType: ActionSubType.InitializeForm,
    targetName: 'form container - product edit',
    sourceName: 'edit-product-btn',
    targetType: TargetType.Component,
    id: 'initialize edit-product-form'
  },
  {
    on: EventType.ActionFinished,
    sourceId: 'initialize edit-product-form',
    actionType: ActionType.Client,
    actionSubType: ActionSubType.SetProperty,
    value: new ActionValueModel(PropertyName.visible, true),
    targetName: 'edit-product-dialog',
    sourceName: NoValueType.NA,
    targetType: TargetType.Component,
    id:'open edit-product-dialog'
  },
  {
    on: EventType.ComponentClicked,
    actionType: ActionType.Server,
    actionSubType: ActionSubType.PersistUpdatedData,
    targetName: NoValueType.NA,
    sourceName: 'submit edited product btn',
    targetType: TargetType.API,
    id: 'submit edited product'
  },
  {
    on: EventType.ActionFinished,
    sourceId: 'submit edited product',
    actionType: ActionType.Client,
    actionSubType: ActionSubType.SetProperty,
    value: new ActionValueModel(PropertyName.visible, false),
    targetName: 'edit-product-dialog',
    sourceName: NoValueType.NA,
    targetType: TargetType.Component,
    id:'close edit-product-dialog'
  },
  {
    on: EventType.ActionFinished,
    sourceId: 'close edit-product-dialog',
    actionType: ActionType.Server,
    actionSubType: ActionSubType.GetAllData,
    targetName: 'table',
    sourceName: NoValueType.NA,
    targetType: TargetType.Component,
  },
  {
    on: EventType.ComponentClicked,
    actionType: ActionType.Client,
    actionSubType: ActionSubType.SetConfirmation,
    targetName: 'confirmation popup',
    sourceName: 'actionBtn',
    targetType: TargetType.Component,
    id: 'confirmation'
  },
  {
    on: EventType.ActionAccepted,
    actionType: ActionType.Server,
    actionSubType: ActionSubType.DeleteByID,
    targetName: NoValueType.NA,
    sourceName: 'confirmation popup',
    targetType: TargetType.API,
    id: 'item deleted'
  },
  {
    on: EventType.ActionFinished,
    sourceId: 'item deleted',
    actionType: ActionType.Server,
    actionSubType: ActionSubType.GetAllData,
    targetName: 'table',
    sourceName: NoValueType.NA,
    targetType: TargetType.Component,
  },*/
  /*        {
            actionType: ActionType.Server,
            actionSubType: ActionSubType.GetDataBluePrint,
            targetType: TargetType.Component,
            targetName: 'form-container',
            sourceName: 'my first form',
            on: EventType.ComponentReady
          },
          {
            actionType: ActionType.Server,
            actionSubType: ActionSubType.PersistNewData,
            targetType: TargetType.API,
            targetName: NoValueType.NA,
            sourceName: 'submitbtn',
            on: EventType.ComponentClicked
          },*/
  /*    {
        actionType: ActionType.Server,
        actionSubType: ActionSubType.GetDataByID,
        targetType: TargetType.Component,
        targetName: 'form-container',
        sourceName: 'my first form',
        on: EventType.ComponentReady
      },
      {
        actionType: ActionType.Server,
        actionSubType: ActionSubType.PersistUpdatedData,
        targetType: TargetType.API,
        targetName: NoValueType.NA,
        sourceName: 'submitbtn',
        on: EventType.ComponentClicked
      },*/

/*       {
      actionType: ActionType.Server,
      actionSubType: ActionSubType.GetDataBluePrint,
      targetType: TargetType.Component,
      targetName: 'form-container',
      sourceName: 'my first form',
      on: EventType.ComponentReady
    },*/
/*
{
  actionType: ActionType.Server,
  actionSubType: ActionSubType.GetAllData,
  targetType: TargetType.Component,
  targetName: 'fc4-container',
  sourceName: 'my first form',
  on: EventType.ComponentReady
},*/
/*    {
  actionType: ActionType.Server,
  actionSubType: ActionSubType.PersistNewData,
  targetType: TargetType.API,
  targetName: NoValueType.NA,
  sourceName: 'submitbtn',
  on: EventType.ComponentClicked
},*/
/*    {
  actionType: ActionType.Server,
  actionSubType: ActionSubType.GetDataBluePrint,
  targetType: TargetType.Component,
  targetName: 'form-container2',
  sourceName: 'my 2e form',
  on: EventType.ComponentReady
},
{
  actionType: ActionType.Server,
  actionSubType: ActionSubType.PersistNewData,
  targetType: TargetType.API,
  targetName: NoValueType.NA,
  sourceName: 'submitForm2',
  on: EventType.ComponentClicked
},*/
