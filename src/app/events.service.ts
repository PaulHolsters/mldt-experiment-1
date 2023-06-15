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
import {NoValueType} from "./enums/no_value_type";

@Injectable({
  providedIn: 'root'
})
export class EventsService{
  private screensize:ScreenSize|undefined
  constructor(private dataService:DataService,private responsiveBehaviourService:ResponsiveBehaviourService,private storeService:StoreService) {
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
        if(data !== NoValueType.NA && !(data instanceof AppConfig) && action.actionSubType === 7){
          // todo dit gebeurt voordat getDataBluePrint klaar is, dat is een probleem
          this.dataService.saveConceptId(data,action)
        }
        await this.executeAction(action)
      }
    })
  }
  private setResponsiveBehaviour() {
    const mqSM1 = window.matchMedia("(max-width: 480px)") //smartphone
    const mqPT1 = window.matchMedia("(min-width: 481px)") //portrait-tablet
    const mqPT2 = window.matchMedia("(max-width: 799px)") //portrait-tablet
    const mqT1 = window.matchMedia("(min-width: 800px)") //tablet
    const mqT2 = window.matchMedia("(max-width: 1024px)") //tablet
    const mqL1 = window.matchMedia("(min-width: 1025px)") //desktop
    const mqL2 = window.matchMedia("(max-width: 1280px)") //desktop
    const mqHR1 = window.matchMedia("(min-width: 1281px)") //HR
    mqSM1.addEventListener("change", (e => {
      if (mqSM1.matches) {
        this.screensize = ScreenSize.smartphone
        this.responsiveBehaviourService.setComponentStates(ScreenSize.smartphone)
      }
    }))
    window.addEventListener("load", (e => {
      if (mqSM1.matches) {
        console.log('load')
        this.screensize = ScreenSize.smartphone
        this.responsiveBehaviourService.setComponentStates( ScreenSize.smartphone)
      }
    }))
    mqPT1.addEventListener("change", (e => {
      if (mqPT1.matches && mqPT2.matches) {
        this.screensize = ScreenSize.portraitTablet
        this.responsiveBehaviourService.setComponentStates(ScreenSize.portraitTablet)
      }
    }))
    mqPT2.addEventListener("change", (e => {
      if (mqPT1.matches && mqPT2.matches) {
        this.screensize = ScreenSize.portraitTablet
        this.responsiveBehaviourService.setComponentStates(ScreenSize.portraitTablet)
      }
    }))
    window.addEventListener("load", (e => {
      if (mqPT1.matches && mqPT2.matches) {
        console.log('load')
        this.screensize = ScreenSize.portraitTablet
        this.responsiveBehaviourService.setComponentStates( ScreenSize.portraitTablet)
      }
    }))
    mqT1.addEventListener("change", (e => {
      if (mqT1.matches && mqT2.matches) {
        this.screensize = ScreenSize.tablet
        this.responsiveBehaviourService.setComponentStates( ScreenSize.tablet)
      }
    }))
    mqT2.addEventListener("change", (e => {
      if (mqT1.matches && mqT2.matches) {
        this.screensize = ScreenSize.tablet
        this.responsiveBehaviourService.setComponentStates(ScreenSize.tablet)
      }
    }))
    window.addEventListener("load", (e => {
      if (mqT1.matches && mqT2.matches) {
        console.log('load')
        this.screensize = ScreenSize.tablet
        this.responsiveBehaviourService.setComponentStates(ScreenSize.tablet)
      }
    }))
    mqL1.addEventListener("change", (e => {
      if (mqL1.matches && mqL2.matches) {
        this.screensize = ScreenSize.laptop
        this.responsiveBehaviourService.setComponentStates(ScreenSize.laptop)
      }
    }))
    mqL2.addEventListener("change", (e => {
      if (mqL1.matches && mqL2.matches) {
        this.screensize = ScreenSize.laptop
        this.responsiveBehaviourService.setComponentStates(ScreenSize.laptop)
      }
    }))
    window.addEventListener("load", (e => {
      if (mqL1.matches && mqL2.matches) {
        console.log('load')
        this.screensize = ScreenSize.laptop
        this.responsiveBehaviourService.setComponentStates(ScreenSize.laptop)
      }
    }))
    mqHR1.addEventListener("change", (e => {
      if (mqHR1.matches) {
        this.screensize = ScreenSize.highResolution
        this.responsiveBehaviourService.setComponentStates(ScreenSize.highResolution)
      }
    }))
    window.addEventListener("load", (e => {
      if (mqHR1.matches) {
        console.log('load')
        this.screensize = ScreenSize.highResolution
        this.responsiveBehaviourService.setComponentStates( ScreenSize.highResolution)
      }
    }))
  }
  private async executeAction(action: ActionModel) {
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
                await this.dataService.getDataByID(action)
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
              case ActionSubType.PersistUpdatedData:
                await this.dataService.persistUpdatedData(action)
                break
              default:
            }
            break
        }

        break
      default:
    }
  }
}
