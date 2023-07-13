import {Injectable} from '@angular/core';
import {EventType} from "./enums/eventTypes.enum";
import {ActionModel} from "./models/ActionModel";
import {ActionType} from "./enums/actionTypes.enum";
import {ActionSubType} from "./enums/actionSubTypes.enum";
import {DataService} from "./data.service";
import {ScreenSize} from "./enums/screenSizes.enum";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {StoreService} from "./store.service";
import AppConfig from "./configuration/appConfig";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class EventsService{
  private screensize:ScreenSize|undefined
  private mqSM1 = window.matchMedia("(max-width: 480px)") //smartphone
  private mqPT1 = window.matchMedia("(min-width: 481px)") //portrait-tablet
  private mqPT2 = window.matchMedia("(max-width: 799px)") //portrait-tablet
  private mqT1 = window.matchMedia("(min-width: 800px)") //tablet
  private mqT2 = window.matchMedia("(max-width: 1024px)") //tablet
  private mqL1 = window.matchMedia("(min-width: 1025px)") //desktop
  private mqL2 = window.matchMedia("(max-width: 1280px)") //desktop
  private mqHR1 = window.matchMedia("(min-width: 1281px)") //HR
  constructor(private configService:ConfigService,private dataService:DataService,private responsiveBehaviourService:ResponsiveBehaviourService,private storeService:StoreService) {
  }
  public get screenSize(){
    return this.screensize
  }
  public triggerEvent(event:EventType,source:string,data?:any){
    if(data && data instanceof AppConfig){
      this.storeService.saveConfig(data)
    }
    this.storeService.appConfig?.getActionsForEvent(event).forEach(async action=>{
      if(action.sourceName===source){
        await this.executeAction(action,data)
      }
    })
  }

  public rerender(){
    if (this.mqSM1.matches) {
      this.screensize = ScreenSize.smartphone
      this.responsiveBehaviourService.setComponentStates(ScreenSize.smartphone)
    } else
    if (this.mqPT1.matches && this.mqPT2.matches) {
      this.screensize = ScreenSize.portraitTablet
      this.responsiveBehaviourService.setComponentStates(ScreenSize.portraitTablet)
    } else
    if (this.mqT1.matches && this.mqT2.matches) {
      this.screensize = ScreenSize.tablet
      this.responsiveBehaviourService.setComponentStates( ScreenSize.tablet)
    } else
    if (this.mqL1.matches && this.mqL2.matches) {
      this.screensize = ScreenSize.laptop
      this.responsiveBehaviourService.setComponentStates(ScreenSize.laptop)
    } else
    if (this.mqHR1.matches) {
      this.screensize = ScreenSize.highResolution
      this.responsiveBehaviourService.setComponentStates(ScreenSize.highResolution)
    }
  }
  private setResponsiveBehaviour() {
    this.mqSM1.addEventListener("change", (e => {
      if (this.mqSM1.matches) {
        this.screensize = ScreenSize.smartphone
        this.responsiveBehaviourService.setComponentStates(ScreenSize.smartphone)
      }
    }))
    window.addEventListener("load", (e => {
      if (this.mqSM1.matches) {
        this.screensize = ScreenSize.smartphone
        this.responsiveBehaviourService.setComponentStates( ScreenSize.smartphone)
      }
    }))
    this.mqPT1.addEventListener("change", (e => {
      if (this.mqPT1.matches && this.mqPT2.matches) {
        this.screensize = ScreenSize.portraitTablet
        this.responsiveBehaviourService.setComponentStates(ScreenSize.portraitTablet)
      }
    }))
    this.mqPT2.addEventListener("change", (e => {
      if (this.mqPT1.matches && this.mqPT2.matches) {
        this.screensize = ScreenSize.portraitTablet
        this.responsiveBehaviourService.setComponentStates(ScreenSize.portraitTablet)
      }
    }))
    window.addEventListener("load", (e => {
      if (this.mqPT1.matches && this.mqPT2.matches) {
        this.screensize = ScreenSize.portraitTablet
        this.responsiveBehaviourService.setComponentStates( ScreenSize.portraitTablet)
      }
    }))
    this.mqT1.addEventListener("change", (e => {
      if (this.mqT1.matches && this.mqT2.matches) {
        this.screensize = ScreenSize.tablet
        this.responsiveBehaviourService.setComponentStates( ScreenSize.tablet)
      }
    }))
    this.mqT2.addEventListener("change", (e => {
      if (this.mqT1.matches && this.mqT2.matches) {
        this.screensize = ScreenSize.tablet
        this.responsiveBehaviourService.setComponentStates(ScreenSize.tablet)
      }
    }))
    window.addEventListener("load", (e => {
      if (this.mqT1.matches && this.mqT2.matches) {
        this.screensize = ScreenSize.tablet
        this.responsiveBehaviourService.setComponentStates(ScreenSize.tablet)
      }
    }))
    this.mqL1.addEventListener("change", (e => {
      if (this.mqL1.matches && this.mqL2.matches) {
        this.screensize = ScreenSize.laptop
        this.responsiveBehaviourService.setComponentStates(ScreenSize.laptop)
      }
    }))
    this.mqL2.addEventListener("change", (e => {
      if (this.mqL1.matches && this.mqL2.matches) {
        this.screensize = ScreenSize.laptop
        this.responsiveBehaviourService.setComponentStates(ScreenSize.laptop)
      }
    }))
    window.addEventListener("load", (e => {
      if (this.mqL1.matches && this.mqL2.matches) {
        this.screensize = ScreenSize.laptop
        this.responsiveBehaviourService.setComponentStates(ScreenSize.laptop)
      }
    }))
    this.mqHR1.addEventListener("change", (e => {
      if (this.mqHR1.matches) {
        this.screensize = ScreenSize.highResolution
        this.responsiveBehaviourService.setComponentStates(ScreenSize.highResolution)
      }
    }))
    window.addEventListener("load", (e => {
      if (this.mqHR1.matches) {
        this.screensize = ScreenSize.highResolution
        this.responsiveBehaviourService.setComponentStates( ScreenSize.highResolution)
      }
    }))
  }
  private async executeAction(action: ActionModel,data?:string){
    switch (action.on) {
      case EventType.RootComponentReady:
        switch (action.actionType) {
          case ActionType.Client:
            switch (action.actionSubType) {
              case ActionSubType.SetResponsiveBehaviour:
                this.storeService.createStore()
                this.setResponsiveBehaviour()
                break
              default:
            }
            break
          case ActionType.Server:
            switch (action.actionSubType) {
              case ActionSubType.GetDataBluePrint:
                await this.dataService.getDataBluePrint(action)
                break
              default:
            }
            break
        }
        break
      case EventType.ComponentReady:
        switch (action.actionType) {
          case ActionType.Client:
            break
          case ActionType.Server:
            switch (action.actionSubType) {
              case ActionSubType.GetDataBluePrint:
                await this.dataService.getDataBluePrint(action)
                break
              case ActionSubType.GetAllData:
                await this.dataService.getAllData(action)
                break
              case ActionSubType.GetDataByID:
                if(data){
                  await this.dataService.getDataByID(action,data)
                }
                break
              default:
            }
            break
        }
        break
      case EventType.ComponentClicked:
        switch (action.actionType) {
          case ActionType.Client:
            break
          case ActionType.Server:
            switch (action.actionSubType) {
              case ActionSubType.GetDataBluePrint:
                await this.dataService.getDataBluePrint(action)
                break
              case ActionSubType.PersistNewData:
                await this.dataService.persistNewData(action)
                break
              // todo voorzien dat je data en masse kan wijzigen aanmaken of verwijderen
              case ActionSubType.PersistUpdatedData:
                  await this.dataService.persistUpdatedData(action)
                break
              case ActionSubType.DeleteByID:
                await this.dataService.deleteData(action)
                break
              default:
            }
            break
        }
        break
      case EventType.ActionFinished:
        switch (action.actionType){
          case ActionType.Client:
            switch (action.actionSubType){
              case ActionSubType.SetValue:
                await this.configService.setValue(action)
                break
              default:
            }
            break
          default:
        }
        break
      default: return undefined
    }
    return undefined
  }
}
