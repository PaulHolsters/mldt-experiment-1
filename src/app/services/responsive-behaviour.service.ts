import {Injectable, OnInit} from '@angular/core';
import {RenderPropertiesService} from "./renderProperties.service";
import {ActionsService} from "./actions.service";
import {ScreenSize} from "../enums/screenSizes.enum";
import {ConfigService} from "./config.service";
import {Subject} from "rxjs";
import {Action} from "../effectclasses/Action";
import {ActionType} from "../enums/actionTypes.enum";
import {TriggerType} from "../enums/triggerTypes.enum";
import {ActionIdType} from "../types/type-aliases";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";
import {ComponentModelType} from "../types/union-types";
import {SizeRenderModel} from "../design-dimensions/Size/SizeRenderModel";
import {ChildLayoutRenderModel} from "../design-dimensions/Layout/Container/ChildLayoutRenderModel";
import {ContentInjectionRenderModel} from "../design-dimensions/ContentInjection/ContentInjectionRenderModel";
import {LayoutOverrideRenderModel} from "../design-dimensions/LayoutOverride/LayoutOverrideRenderModel";
import {ComponentSpecificRenderModel} from "../design-dimensions/component-specific-config/ComponentSpecificRenderModel";
import {VisibilityRenderModel} from "../design-dimensions/Visibility/VisibilityRenderModel";
import {StylingRenderModel} from "../design-dimensions/Styling/StylingRenderModel";
import {OverflowRenderModel} from "../design-dimensions/Overflow/OverflowRenderModel";
import {DataRepresentationRenderModel} from "../design-dimensions/DataRepresentation/DataRepresentationRenderModel";
import {ComponentModel} from "../design-dimensions/ComponentModel";
@Injectable({
  providedIn: 'root'
})
export class ResponsiveBehaviourService implements OnInit{
  private screensize:ScreenSize|undefined
  public actionFinished = new Subject<{trigger:TriggerType.ActionFinished,source:ActionIdType}>()
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

  constructor(private updateService:RenderPropertiesService,
              private configService:ConfigService,
              private actionsService:ActionsService,
              private renderPropertiesService:RenderPropertiesService) {
    this.actionsService.bindToActionsEmitter.subscribe(res=>{
      this.bindActions()
    })
  }
  public bindActions(){
    this.actionsService.bindToAction(new Action('',ActionType.SetGlobalResponsiveBehaviour))?.subscribe(res=>{
      if(res){
        this.setResponsiveBehaviour()
        this.actionFinished.next({trigger:TriggerType.ActionFinished,source:res.effect.action.id})
      }
    })
  }
  public setRBSState(componentName: string,
                     newState: (LayoutOverrideRenderModel |
                       ComponentSpecificRenderModel |
                       VisibilityRenderModel) |
                       StylingRenderModel |
                       ContentInjectionRenderModel |
                       SizeRenderModel |
                       OverflowRenderModel |
                       ChildLayoutRenderModel |
                       DataRepresentationRenderModel|
                       (ComponentModel[])): void {
    // todo voeg datarepresentation toe
    if (newState instanceof LayoutOverrideRenderModel ||
      newState instanceof ComponentSpecificRenderModel ||
      newState instanceof VisibilityRenderModel ||
      newState instanceof StylingRenderModel ||
      newState instanceof ContentInjectionRenderModel ||
      newState instanceof SizeRenderModel ||
      newState instanceof OverflowRenderModel ||
      newState instanceof DataRepresentationRenderModel
    ) {
      for (let [k, v] of Object.entries(newState)) {
        if (v !== ComponentDimensionValueConfigType.Parent) {
          this.renderPropertiesService.getStatePropertySubjects().find(subj => {
            return subj.componentName === componentName && subj.propName === k
          })?.propValue.next(v)
        }
      }
    } else if (newState instanceof ChildLayoutRenderModel) {
      if (newState.parentProps) {
        for (let [k, v] of Object.entries(newState.parentProps)) {
          this.renderPropertiesService.getStatePropertySubjects().find(subj => {
            return subj.componentName === componentName && subj.propName === k
          })?.propValue.next(v)
        }
      }
      if (newState.childProps) {
        for (let [k, v] of Object.entries(newState.childProps)) {
          let parent = this.configService.getConfigFromRoot(componentName)
          if (parent?.children) {
            (parent.children as ComponentModel[]).forEach(childComp => {
              this.renderPropertiesService.getStatePropertySubjects().find(subj => {
                return subj.componentName === childComp.name && subj.propName === k
              })?.propValue.next(v)
            })
          }
        }
      }
    } else {
      this.renderPropertiesService.getStatePropertySubjects().find(subj => {
        return subj.componentName === componentName && subj.propName === 'children'
      })?.propValue.next(newState)
    }
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
  private setState(component: ComponentModelType, screenSize: number) {
    this.setRBSState(component.name, component.visibility.getVisibilityRenderProperties(screenSize))
    this.setRBSState(component.name, component.position.getPositionRenderProperties(screenSize))
    this.setRBSState(component.name, component.dimensions.getDimensionsRenderProperties(screenSize))
    //this.setRBSState(component.name, component.overflow.getOverflowRenderProperties(screenSize))
    if (component.childLayout){
      //  todo undefined aanvaarden?
      this.setRBSState(component.name, component.childLayout.getChildLayoutRenderProperties(screenSize))
    }
    if (component.visibility){
      //  todo undefined aanvaarden? => ja indien undefined

    }
    if (component.position){
      //  todo undefined aanvaarden?

    }
    if (component.dimensions){
      //  todo undefined aanvaarden?

    }
/*    if (component.overflow){
      //  todo undefined aanvaarden?

    }*/

    if (component.children && component.children.length > 0) {
      this.setRBSState(component.name, component.children)
    }
    if (component.attributes){
      // todo mogelijks mag deze methode nu ook versimpeld worden
/*      Object.values(this.storeService.getAttributesComponentProps(component.name, component.attributes, screenSize)).filter(val=>{
        return val instanceof ComponentModel || this.configService.isComponentObjectModel(val) || (
          val instanceof Array && val.length > 0 && (val[0] instanceof ComponentModel || this.configService.isComponentObjectModel(val[0])
          || val[0] instanceof TableColumnModel)
        )
      }).forEach(val=>{
        this.setState(val,screenSize)
        if(val instanceof Array){
          val.forEach(v=>{
            if(v instanceof ComponentModel || this.configService.isComponentObjectModel(v)){
              this.setState(this.configService.convertToComponentModel(v) as ComponentModel,screenSize)
            } else this.setState(v.anchor,screenSize)
          })
        }
      })*/
      const props = component.attributes.getAttributesRenderProperties(screenSize)
      this.setRBSState(component.name, props)
    }
    if (component.contentInjection){
      const contentInjection = component.contentInjection.getContentInjectionRenderProperties(screenSize)
      this.setRBSState(component.name, contentInjection)
    }
/*    if (component.styling)
      this.setRBSState(component.name, component.styling.getStylingRenderProperties(screenSize))*/
  }

  public setComponentStates( screenSize: number) {
    this.configService.getAllComponents(true).forEach(c=>{
      this.setState(c, screenSize)
    })
            //         todo de formulieren zitten nog niet in de dialoogboxen wat verklaart waarom ze niet naar boven komen
                //          of leeg naar boven komen
    /*this.configService.convertToComponentModels(this.configService.appConfig?.userConfig).components.forEach(comp => {
      this.setState(comp, screenSize)
    })*/
  }

}
