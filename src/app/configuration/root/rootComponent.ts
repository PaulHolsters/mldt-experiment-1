import AppConfig from "../appConfig";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {mainDimensions} from "./mainDimensions";
import {mainChildLayout} from "./mainChildLayout";
import {ResponsiveStylingConfigModel} from "../../models/Styling/ResponsiveStylingConfigModel";
import {StylingConfigPropsModel} from "../../models/Styling/StylingConfigPropsModel";
import {BackgroundColorType} from "../../enums/backgroundColorType.enum";
import {ActionType} from "../../enums/actionTypes.enum";
import {ActionSubType} from "../../enums/actionSubTypes.enum";
import {TargetType} from "../../enums/targetTypes.enum";
import {EventType} from "../../enums/eventTypes.enum";
import {NoValueType} from "../../enums/no_value_type";
import {deleteContainer} from "../deleteContainer/deleteContainer";
import {table} from "../table/table";

export const RootComponent = new AppConfig({
  components: [
    {
      // todo start adding constraints
      // todo add a minimum/maximum dimension
      name: 'content-container',
      type: ComponentType.Container,
      visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
      dimensions: mainDimensions,
      childLayout: mainChildLayout,
      styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(BackgroundColorType.Background_Color_White)),
      children: [
        //header,
        deleteContainer,
        //form,
        table
      ]
    },
  ],
  // hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
  // de condities zoals gedefinieerd in de overeenkomstige actie
  // todo: test of dbp nog werkt
  actions: [
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
    {
      actionType: ActionType.Client,
      actionSubType: ActionSubType.SetResponsiveBehaviour,
      targetType: TargetType.Component,
      targetName: NoValueType.NA,
      sourceName: 'content-container',
      on: EventType.RootComponentReady
    },
    {
      actionType: ActionType.Server,
      actionSubType: ActionSubType.GetAllData,
      targetType: TargetType.Component,
      targetName: 'table',
      sourceName: 'table',
      on: EventType.ComponentReady
    },
    {
      actionType: ActionType.Server,
      actionSubType: ActionSubType.GetDataBluePrint,
      targetType: TargetType.Component,
      targetName: 'delete-container',
      sourceName: 'delete-container',
      on: EventType.ComponentReady
    },
    {
      actionType: ActionType.Server,
      actionSubType: ActionSubType.DeleteByID,
      targetType: TargetType.API,
      targetName: NoValueType.NA,
      sourceName: 'delete-btn',
      on: EventType.ComponentClicked,
      id:'delete-product'
    },
/*    {
      on:EventType.ActionFinished,
      sourceId:'delete-product',
      actionType:ActionType.Client,
      actionSubType:ActionSubType.GetDataByID,
      targetName:'delete-container',
      sourceName:NoValueType.NA,
      targetType:TargetType.Component,
    },*/
    {
      on:EventType.ActionFinished,
      sourceId:'delete-product',
      actionType:ActionType.Client,
      actionSubType:ActionSubType.SetValue,
      value:new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel(false,false)),
      targetName:'delete-container',
      sourceName:NoValueType.NA,
      targetType:TargetType.Component,
    }
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
  ]
})
