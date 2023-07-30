import {Injectable, OnInit} from '@angular/core';
import {ComponentModel} from "../models/ComponentModel";
import {StoreService} from "./store.service";
import {ActionType} from "../enums/actionTypes.enum";
import {ActionSubType} from "../enums/actionSubTypes.enum";
import {ActionsService} from "./actions.service";
import {ScreenSize} from "../enums/screenSizes.enum";
import {ConfigService} from "./config.service";
import {Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ResponsiveBehaviourService implements OnInit{
  private screensize:ScreenSize|undefined
  public actionFinished = new Subject()
  public get screenSize(){
    return this.screensize
  }
  private mqSM1 = window.matchMedia("(max-width: 480px)") //smartphone
  private mqPT1 = window.matchMedia("(min-width: 481px)") //portrait-tablet
  private mqPT2 = window.matchMedia("(max-width: 799px)") //portrait-tablet
  private mqT1 = window.matchMedia("(min-width: 800px)") //tablet
  private mqT2 = window.matchMedia("(max-width: 1024px)") //tablet
  private mqL1 = window.matchMedia("(min-width: 1025px)") //desktop
  private mqL2 = window.matchMedia("(max-width: 1280px)") //desktop
  private mqHR1 = window.matchMedia("(min-width: 1281px)") //HR

  constructor(private storeService:StoreService,
              private configService:ConfigService,
              private actionsService:ActionsService) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public bindActions(){
    this.actionsService.bindToAction(ActionType.Client,ActionSubType.SetResponsiveBehaviour)?.subscribe(res=>{
      this.setResponsiveBehaviour()
    })
  }
  ngOnInit(): void {

  }
  private setResponsiveBehaviour() {
    this.mqSM1.addEventListener("change", (e => {
      if (this.mqSM1.matches) {
        this.screensize = ScreenSize.smartphone
        this.setComponentStates(ScreenSize.smartphone)
      }
    }))
    window.addEventListener("load", (e => {
      if (this.mqSM1.matches) {
        this.screensize = ScreenSize.smartphone
        this.setComponentStates( ScreenSize.smartphone)
      }
    }))
    this.mqPT1.addEventListener("change", (e => {
      if (this.mqPT1.matches && this.mqPT2.matches) {
        this.screensize = ScreenSize.portraitTablet
        this.setComponentStates(ScreenSize.portraitTablet)
      }
    }))
    this.mqPT2.addEventListener("change", (e => {
      if (this.mqPT1.matches && this.mqPT2.matches) {
        this.screensize = ScreenSize.portraitTablet
        this.setComponentStates(ScreenSize.portraitTablet)
      }
    }))
    window.addEventListener("load", (e => {
      if (this.mqPT1.matches && this.mqPT2.matches) {
        this.screensize = ScreenSize.portraitTablet
        this.setComponentStates( ScreenSize.portraitTablet)
      }
    }))
    this.mqT1.addEventListener("change", (e => {
      if (this.mqT1.matches && this.mqT2.matches) {
        this.screensize = ScreenSize.tablet
        this.setComponentStates( ScreenSize.tablet)
      }
    }))
    this.mqT2.addEventListener("change", (e => {
      if (this.mqT1.matches && this.mqT2.matches) {
        this.screensize = ScreenSize.tablet
        this.setComponentStates(ScreenSize.tablet)
      }
    }))
    window.addEventListener("load", (e => {
      if (this.mqT1.matches && this.mqT2.matches) {
        this.screensize = ScreenSize.tablet
        this.setComponentStates(ScreenSize.tablet)
      }
    }))
    this.mqL1.addEventListener("change", (e => {
      if (this.mqL1.matches && this.mqL2.matches) {
        this.screensize = ScreenSize.laptop
        this.setComponentStates(ScreenSize.laptop)
      }
    }))
    this.mqL2.addEventListener("change", (e => {
      if (this.mqL1.matches && this.mqL2.matches) {
        this.screensize = ScreenSize.laptop
        this.setComponentStates(ScreenSize.laptop)
      }
    }))
    window.addEventListener("load", (e => {
      if (this.mqL1.matches && this.mqL2.matches) {
        this.screensize = ScreenSize.laptop
        this.setComponentStates(ScreenSize.laptop)
      }
    }))
    this.mqHR1.addEventListener("change", (e => {
      if (this.mqHR1.matches) {
        this.screensize = ScreenSize.highResolution
        this.setComponentStates(ScreenSize.highResolution)
      }
    }))
    window.addEventListener("load", (e => {
      if (this.mqHR1.matches) {
        this.screensize = ScreenSize.highResolution
        this.setComponentStates( ScreenSize.highResolution)
      }
    }))
  }
  public rebuildUI(){
    if (this.mqSM1.matches) {
      this.screensize = ScreenSize.smartphone
      this.setComponentStates(ScreenSize.smartphone)
    } else
    if (this.mqPT1.matches && this.mqPT2.matches) {
      this.screensize = ScreenSize.portraitTablet
      this.setComponentStates(ScreenSize.portraitTablet)
    } else
    if (this.mqT1.matches && this.mqT2.matches) {
      this.screensize = ScreenSize.tablet
      this.setComponentStates( ScreenSize.tablet)
    } else
    if (this.mqL1.matches && this.mqL2.matches) {
      this.screensize = ScreenSize.laptop
      this.setComponentStates(ScreenSize.laptop)
    } else
    if (this.mqHR1.matches) {
      this.screensize = ScreenSize.highResolution
      this.setComponentStates(ScreenSize.highResolution)
    }
  }
  private setState(component: ComponentModel, screenSize: number) {
    if (component.visibility){
      this.storeService.setRBSState(component.name, this.storeService.getVisibilityComponentProps(component.name, component.visibility, screenSize))
    }
    if (component.position)
      this.storeService.setRBSState(component.name, this.storeService.getPositionComponentProps(component.name, component.position, screenSize))
    if (component.dimensions){
      this.storeService.setRBSState(component.name, this.storeService.getDimensionsComponentProps(component.name, component.dimensions, screenSize))
    }
    if (component.overflow)
      this.storeService.setRBSState(component.name, this.storeService.getOverflowComponentProps(component.name, component.overflow, screenSize))
    if (component.childLayout){
      this.storeService.setRBSState(component.name, this.storeService.getChildLayoutComponentProps(component.name, component.childLayout, screenSize))
    }
    if (component.children && component.children.length > 0) {
      this.storeService.setRBSState(component.name, component.children as ComponentModel[])
      component.children.forEach(child => {
        if (typeof child === 'string') {

        } else {
          this.setState(child, screenSize)
        }
      })
    }
    if (component.attributes){
      Object.values(this.storeService.getAttributesComponentProps(component.name, component.attributes, screenSize)).filter(val=>{
        return val instanceof ComponentModel
      }).forEach(val=>{
        this.setState(val,screenSize)
      })
      this.storeService.setRBSState(component.name, this.storeService.getAttributesComponentProps(component.name, component.attributes, screenSize))
    }
    if (component.styling)
      this.storeService.setRBSState(component.name, this.storeService.getStylingComponentProps(component.name, component.styling, screenSize))

  }
  public setComponentStates( screenSize: number) {
    this.configService.appConfig?.userConfig.components.forEach(comp => {
      this.setState(comp, screenSize)
    })
  }

}
