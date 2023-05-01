import {Injectable} from '@angular/core';
import {ComponentModel} from "./models/ComponentModel";
import {ActionModel} from "./models/ActionModel";
import {StoreService} from "./store.service";
import {ScreenSize} from "./enums/screenSizes.enum";
@Injectable({
  providedIn: 'root'
})
export class ResponsiveBehaviourService {
  constructor(private storeService: StoreService) {
  }
  private setState(component: ComponentModel, screenSize: number) {
    if (component.visibility)
      this.storeService.setRBSState(component.name, this.storeService.getVisibilityComponentProps(component.name, component.visibility, screenSize))
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
  private setComponentStates(contentContainer: {
    components: ComponentModel[],
    actions: ActionModel[]
  }, screenSize: number) {
    contentContainer.components.forEach(comp => {
      this.setState(comp, screenSize)
    })
  }
  public setResponsiveBehaviour(contentContainer: {
    components: ComponentModel[],
    actions: ActionModel[]
  }) {
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
        this.setComponentStates(contentContainer, ScreenSize.smartphone)
      }
    }))
    window.addEventListener("load", (e => {
      if (mqSM1.matches) {
        this.setComponentStates(contentContainer, ScreenSize.smartphone)
      }
    }))
    mqPT1.addEventListener("change", (e => {
      if (mqPT1.matches && mqPT2.matches) {
        this.setComponentStates(contentContainer, ScreenSize.portraitTablet)
      }
    }))
    mqPT2.addEventListener("change", (e => {
      if (mqPT1.matches && mqPT2.matches) {
        this.setComponentStates(contentContainer, ScreenSize.portraitTablet)
      }
    }))
    window.addEventListener("load", (e => {
      if (mqPT1.matches && mqPT2.matches) {
        this.setComponentStates(contentContainer, ScreenSize.portraitTablet)
      }
    }))
    mqT1.addEventListener("change", (e => {
      if (mqT1.matches && mqT2.matches) {
        this.setComponentStates(contentContainer, ScreenSize.tablet)
      }
    }))
    mqT2.addEventListener("change", (e => {
      if (mqT1.matches && mqT2.matches) {
        this.setComponentStates(contentContainer, ScreenSize.tablet)
      }
    }))
    window.addEventListener("load", (e => {
      if (mqT1.matches && mqT2.matches) {
        this.setComponentStates(contentContainer, ScreenSize.tablet)
      }
    }))
    mqL1.addEventListener("change", (e => {
      if (mqL1.matches && mqL2.matches) {
        this.setComponentStates(contentContainer, ScreenSize.laptop)
      }
    }))
    mqL2.addEventListener("change", (e => {
      if (mqL1.matches && mqL2.matches) {
        this.setComponentStates(contentContainer, ScreenSize.laptop)
      }
    }))
    window.addEventListener("load", (e => {
      if (mqL1.matches && mqL2.matches) {
        this.setComponentStates(contentContainer, ScreenSize.laptop)
      }
    }))
    mqHR1.addEventListener("change", (e => {
      if (mqHR1.matches) {
        this.setComponentStates(contentContainer, ScreenSize.highResolution)
      }
    }))
    window.addEventListener("load", (e => {
      if (mqHR1.matches) {
        this.setComponentStates(contentContainer, ScreenSize.highResolution)
      }
    }))
  }
}
