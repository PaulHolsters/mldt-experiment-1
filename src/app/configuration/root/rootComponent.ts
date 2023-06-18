import AppConfig from "../appConfig";
import {ComponentType} from "../../enums/componentTypes.enum";
import {ResponsiveVisibilityConfigModel} from "../../models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "../../models/Visibility/VisibilityConfigPropsModel";
import {ResponsiveOverflowConfigModel} from "../../models/Overflow/self/ResponsiveOverflowConfigModel";
import {OverflowConfigPropsModel} from "../../models/Overflow/self/OverflowConfigPropsModel";
import {OverflowValueConfigType} from "../../enums/overflowValueConfigTypes.enum";
import {mainDimensions} from "./mainDimensions";
import {mainChildLayout} from "./mainChildLayout";
import {ResponsiveStylingConfigModel} from "../../models/Styling/ResponsiveStylingConfigModel";
import {StylingConfigPropsModel} from "../../models/Styling/StylingConfigPropsModel";
import {BackgroundColorType} from "../../enums/backgroundColorType.enum";
import {header} from "../header/header";
import {form} from "../form1/form";
import {ActionType} from "../../enums/actionTypes.enum";
import {ActionSubType} from "../../enums/actionSubTypes.enum";
import {TargetType} from "../../enums/targetTypes.enum";
import {EventType} from "../../enums/eventTypes.enum";
import {NoValueType} from "../../enums/no_value_type";
import {table} from "../table/table";

export const  RootComponent = new AppConfig( {
  components: [
    {
      // todo start adding constraints
      // todo add a minimum/maximum dimension
      name: 'content-container',
      type: ComponentType.Container,
      visibility: new ResponsiveVisibilityConfigModel(new VisibilityConfigPropsModel()),
      overflow: new ResponsiveOverflowConfigModel(new OverflowConfigPropsModel(OverflowValueConfigType.Auto, OverflowValueConfigType.NA)),
      dimensions: mainDimensions,
      childLayout: mainChildLayout,
      styling: new ResponsiveStylingConfigModel(new StylingConfigPropsModel(BackgroundColorType.Background_Color_White)),
      children: [
        header,
        form,
        table
      ]
    },
  ],
  // hou er rekening mee dat de volgorde van de actions in deze array gevolgen kunnen hebben op
  // de condities zoals gedefinieerd in de overeenkomstige actie
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
    },
  ]
})
