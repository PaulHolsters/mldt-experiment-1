import {Injectable} from '@angular/core';
import {ComponentModel} from "./models/ComponentModel";
import {ActionModel} from "./models/ActionModel";
import {StoreService} from "./store.service";
import {State} from "./enums/states.enum";
import {ScreenSize} from "./enums/screenSizes.enum";
import {BehaviorSubject} from "rxjs";
import {VisibilityConfigPropsModel} from "./models/Visibility/VisibilityConfigPropsModel";
import {PositioningConfigPropsModel} from "./models/Positioning/self/PositioningConfigPropsModel";
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
      // todo aanvullen ivm dimensioning etc
      if(comp.position)
      this.storeService.setState(comp.name,this.storeService.getPositionComponentProps(comp.name,comp.position,screenSize))
      if (comp.children && comp.children.length > 0 && comp.position) {
        this.storeService.setState(comp.name,this.storeService.getPositionChildComponentsProps(comp.name,comp.position,screenSize))
      }
      if(comp.dimensions)
        this.storeService.setState(comp.name,this.storeService.getDimensionsComponentProps( comp.name,comp.dimensions,screenSize))
      if (comp.children && comp.children.length > 0 && comp.dimensions) {
        this.storeService.setState(comp.name,this.storeService.getDimensionsChildComponentsProps(comp.name,comp.dimensions,screenSize))
      }
      if(comp.overflow)
        this.storeService.setState(comp.name,this.storeService.getOverflowComponentProps( comp.name,comp.overflow,screenSize))
      if (comp.children && comp.children.length > 0 && comp.overflow) {
        this.storeService.setState(comp.name,this.storeService.getOverflowChildComponentsProps(comp.name,comp.overflow,screenSize))
      }
      if(comp.visibility)
        this.storeService.setState(comp.name,this.storeService.getVisibilityComponentProps(comp.name,comp.visibility,screenSize))
      if(comp.attributes)
        this.storeService.setState(comp.name,this.storeService.getAttributesComponentProps( comp.name,comp.attributes,screenSize))
      if(comp.styling)
        this.storeService.setState(comp.name,this.storeService.getStylingComponentProps( comp.name,comp.styling,screenSize))

      if (comp.children && comp.children.length > 0) {
        comp.children.forEach(child => {
          if(typeof child === 'string'){
          } else{
            if(child.position)
              this.storeService.setState(child.name,this.storeService.getPositionComponentProps(child.name,child.position,screenSize))
            if(child.visibility)
              this.storeService.setState(child.name,this.storeService.getVisibilityComponentProps(child.name,child.visibility,screenSize))
            if(child.attributes)
              this.storeService.setState(child.name,this.storeService.getAttributesComponentProps( child.name,child.attributes,screenSize))
            if(child.styling)
              this.storeService.setState(child.name,this.storeService.getStylingComponentProps( child.name,child.styling,screenSize))
            if(child.dimensions)
              this.storeService.setState(child.name,this.storeService.getDimensionsComponentProps( child.name,child.dimensions,screenSize))
            if(child.overflow)
              this.storeService.setState(child.name,this.storeService.getOverflowComponentProps( child.name,child.overflow,screenSize))
          }
        })
        this.storeService.setState(comp.name,comp.children as ComponentModel[])
      }
    })
  }
  public setResponsiveBehaviour(contentContainer: {
    components: ComponentModel[],
    actions: ActionModel[]
  }) {
    // todo debug
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
