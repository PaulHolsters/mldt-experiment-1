import {Injectable} from '@angular/core';
import {ComponentModel} from "./models/ComponentModel";
import {ActionModel} from "./models/ActionModel";
import {StoreService} from "./store.service";
import {State} from "./enums/states.enum";
import {ScreenSize} from "./enums/screenSizes.enum";
@Injectable({
  providedIn: 'root'
})
export class ResponsiveBehaviourService {
  constructor(private storeService:StoreService) { }
  private setComponentStates(contentContainer: {
    components: ComponentModel[],
    actions: ActionModel[]
  }, screenSize:number){
    contentContainer.components.forEach(comp => {
      // todo fix this mess
      this.storeService.setState(comp.name,this.storeService.getChildPositionState(State.layout, comp.name,comp.position,screenSize))
      if(comp.visibility)
        this.storeService.setState(comp.name,this.storeService.getVisibilityState(State.visibility, comp.name,comp.visibility,screenSize))
      if(comp.attributes)
        this.storeService.setState(comp.name,this.storeService.getAttributesState(State.attributes, comp.name,comp.attributes,screenSize))
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

      }
    }))
    window.addEventListener("load", (e => {
      if (mqSM1.matches) {
        this.setComponentStates(contentContainer,ScreenSize.smartphone)
      }
    }))
    mqPT1.addEventListener("change", (e => {
      if (mqPT1.matches && mqPT2.matches) {

      }
    }))
    mqPT2.addEventListener("change", (e => {
      if (mqPT1.matches && mqPT2.matches) {

      }
    }))
    window.addEventListener("load", (e => {
      if (mqPT1.matches && mqPT2.matches) {
        this.setComponentStates(contentContainer,ScreenSize.portraitTablet)
      }
    }))
    mqT1.addEventListener("change", (e => {
      if (mqT1.matches && mqT2.matches) {

      }
    }))
    mqT2.addEventListener("change", (e => {
      if (mqT1.matches && mqT2.matches) {

      }
    }))
    window.addEventListener("load", (e => {
      if (mqT1.matches && mqT2.matches) {
        this.setComponentStates(contentContainer,ScreenSize.tablet)
      }}))
    mqL1.addEventListener("change", (e => {
      if (mqL1.matches && mqL2.matches) {

      }
    }))
    mqL2.addEventListener("change", (e => {
      if (mqL1.matches && mqL2.matches) {

      }
    }))
    window.addEventListener("load", (e => {
      if (mqL1.matches && mqL2.matches) {
        this.setComponentStates(contentContainer,ScreenSize.laptop)
      }
    }))
    mqHR1.addEventListener("change", (e => {
      if (mqHR1.matches) {

      }
    }))
    window.addEventListener("load", (e => {
      if (mqHR1.matches) {
        this.setComponentStates(contentContainer,ScreenSize.highResolution)
      }
    }))
  }
}
