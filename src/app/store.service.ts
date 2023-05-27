import {Injectable} from '@angular/core';
import {ResponsivePositioningConfigModel} from "./models/Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveAttributesConfigModel} from "./models/Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveVisibilityConfigModel} from "./models/Visibility/ResponsiveVisibilityConfigModel";
import {BehaviorSubject, Observable} from "rxjs";
import {StatePropertySubjectModel} from "./models/StatePropertySubject";
import {CalculationModel} from "./models/CalculationModel";
import {ComponentModel} from "./models/ComponentModel";
import {ActionModel} from "./models/ActionModel";
import {AttributesConfigPropsModel} from "./models/Attributes/AttributesConfigPropsModel";
import {VisibilityConfigPropsModel} from "./models/Visibility/VisibilityConfigPropsModel";
import {PositioningComponentPropsModel} from "./models/Positioning/self/PositioningComponentPropsModel";
import {AttributesComponentPropsModel} from "./models/Attributes/AttributesComponentPropsModel";
import {VisibilityComponentPropsModel} from "./models/Visibility/VisibilityComponentPropsModel";
import {ScreenSize} from "./enums/screenSizes.enum";
import {OverflowComponentPropsModel} from "./models/Overflow/self/OverflowComponentPropsModel";
import {OverflowConfigPropsModel} from "./models/Overflow/self/OverflowConfigPropsModel";
import {ResponsiveOverflowConfigModel} from "./models/Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "./models/Styling/ResponsiveStylingConfigModel";
import {StylingComponentPropsModel} from "./models/Styling/StylingComponentPropsModel";
import {StylingConfigPropsModel} from "./models/Styling/StylingConfigPropsModel";
import {OverflowValueConfigType} from "./enums/overflowValueConfigTypes.enum";
import {OverflowChildConfigPropsModel} from "./models/Overflow/children/OverflowChildConfigPropsModel";
import {ResponsiveDimensioningConfigModel} from "./models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningComponentPropsModel} from "./models/Dimensioning/self/DimensioningComponentPropsModel";
import {DimensioningConfigPropsModel} from "./models/Dimensioning/self/DimensioningConfigPropsModel";
import {FixedDimensioningConfigModel} from "./models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "./enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "./enums/dimensionUnitConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "./enums/crossAxisVerticalPositioningConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "./enums/crossAxisHorizontalPositioningConfigTypes.enum";
import {ChildLayoutComponentsPropsModel} from "./models/ChildLayout/ChildLayoutComponentsPropsModel";
import {ResponsiveChildLayoutConfigModel} from "./models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ChildLayoutConfigPropsModel} from "./models/ChildLayout/ChildLayoutConfigPropsModel";
import {ParentComponentPropsModel} from "./models/ChildLayout/ParentComponentsPropsModel";
import {ChildComponentsPropsModel} from "./models/ChildLayout/ChildComponentsPropsModel";
import {DynamicDimensioningConfigModel} from "./models/Dimensioning/self/DynamicDimensioningConfigModel";
import {HeightConfigPropsModel} from "./models/Dimensioning/self/HeightConfigPropsModel";
import {WidthConfigPropsModel} from "./models/Dimensioning/self/WidthConfigPropsModel";
import {ComponentDimensionValueConfigType} from "./enums/componentDimensionValueConfigTypes.enum";
import {FixedDimensionValueConfigType} from "./enums/FixedDimensionValueConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "./enums/DynamicDimensionValueConfigTypes.enum";
import {GrowValueConfigType} from "./enums/GrowValueConfigTypes.enum";
import {ShrinkValueConfigType} from "./enums/ShrinkValueConfigTypes.enum";
import {EventType} from "./enums/eventTypes.enum";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() {
  }
  private statePropertySubjects: StatePropertySubjectModel[] = []
  private actions: ActionModel[]=[]
  private hasScreenSizeProperty(stateModel:
                                  ResponsivePositioningConfigModel | ResponsiveOverflowConfigModel | ResponsiveStylingConfigModel | ResponsiveDimensioningConfigModel | ResponsiveAttributesConfigModel
                                  | ResponsiveVisibilityConfigModel, property: string): boolean {
    let lastScreenSize = ScreenSize.highResolution
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]
        && stateModelObj[ScreenSize[lastScreenSize]].hasOwnProperty(property)
        && stateModelObj[ScreenSize[lastScreenSize]][property] !== undefined) {
        return true
      }
      lastScreenSize--
    }
    return false
  }
  // volgende methodes zijn pure opstartwaarden, zij geven niet de runtime waarden van de props terug, bv wanneer deze gewijzigd moeten worden!
  public getPositionComponentProps(componentName: string,
                                   stateModel: ResponsivePositioningConfigModel,
                                   screenSize: number): PositioningComponentPropsModel {
    const translateToPositioningComponentProps =
      (positionConfig: CrossAxisVerticalPositioningConfigType | CrossAxisHorizontalPositioningConfigType): PositioningComponentPropsModel => {
        return new PositioningComponentPropsModel(
          positionConfig === CrossAxisVerticalPositioningConfigType.Top || positionConfig === CrossAxisHorizontalPositioningConfigType.Left,
          positionConfig === CrossAxisVerticalPositioningConfigType.Center || positionConfig === CrossAxisHorizontalPositioningConfigType.Center,
          positionConfig === CrossAxisVerticalPositioningConfigType.Bottom || positionConfig === CrossAxisHorizontalPositioningConfigType.Right,
          positionConfig === CrossAxisVerticalPositioningConfigType.Baseline || positionConfig === CrossAxisHorizontalPositioningConfigType.Baseline)
      }
    if (this.hasScreenSizeProperty(stateModel, 'selfAlign')) {
      let lastScreenSize = screenSize
      const stateModelObj = Object.create(stateModel)
      while (lastScreenSize >= 0) {
        if (stateModelObj[ScreenSize[lastScreenSize]]?.selfAlign) {
          return translateToPositioningComponentProps(stateModelObj[ScreenSize[lastScreenSize]]?.selfAlign)
        }
        lastScreenSize--
      }
      throw new Error('No screensize configuration was found for given ResponsivePositioningConfigModel and screen ' + ScreenSize[screenSize])
    } else return new PositioningComponentPropsModel()
  }
  public getOverflowComponentProps(componentName: string, stateModel: ResponsiveOverflowConfigModel, screenSize: number): OverflowComponentPropsModel {
    const translateToOverflowComponentProps =
      (overflowConfig: OverflowConfigPropsModel): OverflowComponentPropsModel => {
        return new OverflowComponentPropsModel(
          overflowConfig.overflow === OverflowValueConfigType.Auto,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Auto,
          overflowConfig.overflow === OverflowValueConfigType.Scroll,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Scroll,
          overflowConfig.overflow === OverflowValueConfigType.Hidden,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Hidden)
      }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]) {
        return translateToOverflowComponentProps(stateModelObj[ScreenSize[lastScreenSize]])
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsiveOverflowConfigModel and screen ' + ScreenSize[screenSize])
  }
  public getOverflowChildComponentsProps(componentName: string, stateModel: ResponsiveOverflowConfigModel, screenSize: number): OverflowComponentPropsModel {
    const translateToOverflowComponentProps =
      (overflowConfig: OverflowChildConfigPropsModel): OverflowComponentPropsModel => {
        return new OverflowComponentPropsModel(
          overflowConfig.overflow === OverflowValueConfigType.Scroll,
          overflowConfig.overflow === OverflowValueConfigType.Hidden,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Hidden,
          overflowConfig.verticalOverflow === OverflowValueConfigType.Hidden,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Scroll,
          overflowConfig.verticalOverflow === OverflowValueConfigType.Scroll)
      }
    if (this.hasScreenSizeProperty(stateModel, 'childOverflowConfig')) {
      let lastScreenSize = screenSize
      const stateModelObj = Object.create(stateModel)
      while (lastScreenSize >= 0) {
        if (stateModelObj[ScreenSize[lastScreenSize]]) {
          return translateToOverflowComponentProps(stateModelObj[ScreenSize[lastScreenSize]].childOverflowConfig)
        }
        lastScreenSize--
      }
      throw new Error('No screensize configuration was found for given ResponsiveOverflowConfigModel and screen ' + ScreenSize[screenSize])
    } else return new OverflowComponentPropsModel()
  }
  public getStylingComponentProps(componentName: string, stateModel: ResponsiveStylingConfigModel, screenSize: number): StylingComponentPropsModel {
    const translateToStylingComponentProps =
      (stylingConfig: StylingConfigPropsModel): StylingComponentPropsModel => {
        return new StylingComponentPropsModel(
          stylingConfig.backgroundColor,
          stylingConfig.border,
          stylingConfig.padding,
          stylingConfig.margin,
          stylingConfig.fontWeight ,
          stylingConfig.textColor,
          stylingConfig.textDecoration,
          stylingConfig.fontSize,
          stylingConfig.fontStyle
        )
      }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]) {
        return translateToStylingComponentProps(stateModelObj[ScreenSize[lastScreenSize]])
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsiveStylingConfigModel and screen ' + ScreenSize[screenSize])
  }
  public getDimensionsComponentProps(componentName: string, stateModel: ResponsiveDimensioningConfigModel, screenSize: number): DimensioningComponentPropsModel {
    const translateToDimensioningComponentProps = (dimensionsConfig: DimensioningConfigPropsModel): DimensioningComponentPropsModel => {
      const compPropsObj = new DimensioningComponentPropsModel()
      if (dimensionsConfig.height && dimensionsConfig.height instanceof HeightConfigPropsModel) {
        if (dimensionsConfig.height.fixed && dimensionsConfig.height.fixed instanceof FixedDimensioningConfigModel) {
          switch (dimensionsConfig.height.fixed.type) {
            case DimensionValueConfigType.Hardcoded:
              switch (dimensionsConfig.height.fixed.unit) {
                case DimensionUnitConfigType.REM:
                  compPropsObj.height = dimensionsConfig.height.fixed.value + 'rem'
                  break
                case DimensionUnitConfigType.PX:
                  compPropsObj.height = dimensionsConfig.height.fixed.value + 'px'
                  break
                case DimensionUnitConfigType.Percentage:
                  compPropsObj.height = dimensionsConfig.height.fixed.value + '%'
                  break
              }
              break
            case DimensionValueConfigType.Calculated:
              if (typeof dimensionsConfig.height.fixed.value === 'string')
                compPropsObj.calcHeight = dimensionsConfig.height.fixed.value
              break
          }
        } else if (dimensionsConfig.height.fixed && dimensionsConfig.height.fixed === FixedDimensionValueConfigType.Parent) {
          compPropsObj.height = ComponentDimensionValueConfigType.Parent
        }
        if (dimensionsConfig.height.dynamic && dimensionsConfig.height.dynamic instanceof DynamicDimensioningConfigModel) {
          if (dimensionsConfig.height.dynamic.grow && dimensionsConfig.height.dynamic.grow === GrowValueConfigType.Parent) {
            compPropsObj.grow = ComponentDimensionValueConfigType.Parent
          } else if (dimensionsConfig.height.dynamic.grow && !isNaN(dimensionsConfig.height.dynamic.grow)) {
            compPropsObj.grow = dimensionsConfig.height.dynamic.grow
          }
          if (dimensionsConfig.height.dynamic.shrink && dimensionsConfig.height.dynamic.shrink === ShrinkValueConfigType.Parent) {
            compPropsObj.shrink = ComponentDimensionValueConfigType.Parent
          } else if (dimensionsConfig.height.dynamic.shrink && !isNaN(dimensionsConfig.height.dynamic.shrink)) {
            compPropsObj.shrink = dimensionsConfig.height.dynamic.shrink
          }
        } else if (dimensionsConfig.height.dynamic === DynamicDimensionValueConfigType.Parent) {
          compPropsObj.grow = ComponentDimensionValueConfigType.Parent
          compPropsObj.shrink = ComponentDimensionValueConfigType.Parent
        }
      }
      if (dimensionsConfig.width && dimensionsConfig.width instanceof WidthConfigPropsModel) {
        if (dimensionsConfig.width.fixed && dimensionsConfig.width.fixed instanceof FixedDimensioningConfigModel) {
          switch (dimensionsConfig.width.fixed.type) {
            case DimensionValueConfigType.Hardcoded:
              switch (dimensionsConfig.width.fixed.unit) {
                case DimensionUnitConfigType.REM:
                  compPropsObj.width = dimensionsConfig.width.fixed.value + 'rem'
                  break
                case DimensionUnitConfigType.PX:
                  compPropsObj.width = dimensionsConfig.width.fixed.value + 'px'
                  break
                case DimensionUnitConfigType.Percentage:
                  compPropsObj.width = dimensionsConfig.width.fixed.value + '%'
                  break
              }
              break
            case DimensionValueConfigType.Calculated:
              if (typeof dimensionsConfig.width.fixed.value === 'string')
                compPropsObj.calcWidth = dimensionsConfig.width.fixed.value
              break
          }
        } else if (dimensionsConfig.width.fixed && dimensionsConfig.width.fixed === FixedDimensionValueConfigType.Parent) {
          compPropsObj.width = ComponentDimensionValueConfigType.Parent
        }
        if (dimensionsConfig.width.dynamic && dimensionsConfig.width.dynamic instanceof DynamicDimensioningConfigModel) {
          if (dimensionsConfig.width.dynamic.grow && dimensionsConfig.width.dynamic.grow === GrowValueConfigType.Parent) {
            compPropsObj.grow = ComponentDimensionValueConfigType.Parent
          } else if (dimensionsConfig.width.dynamic.grow && !isNaN(dimensionsConfig.width.dynamic.grow)) {
            compPropsObj.grow = dimensionsConfig.width.dynamic.grow
          }
          if (dimensionsConfig.width.dynamic.shrink && dimensionsConfig.width.dynamic.shrink === ShrinkValueConfigType.Parent) {
            compPropsObj.shrink = ComponentDimensionValueConfigType.Parent
          } else if (dimensionsConfig.width.dynamic.shrink && !isNaN(dimensionsConfig.width.dynamic.shrink)) {
            compPropsObj.shrink = dimensionsConfig.width.dynamic.shrink
          }
        } else if (dimensionsConfig.width.dynamic === DynamicDimensionValueConfigType.Parent) {
          compPropsObj.grow = ComponentDimensionValueConfigType.Parent
          compPropsObj.shrink = ComponentDimensionValueConfigType.Parent
        }
      }
      return compPropsObj
    }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]) {
        return translateToDimensioningComponentProps(stateModelObj[ScreenSize[lastScreenSize]])
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsiveDimensioningConfigModel and screen ' + ScreenSize[screenSize])
  }
  public getAttributesComponentProps(componentName: string, stateModel: ResponsiveAttributesConfigModel, screenSize: number): AttributesComponentPropsModel {
    if(componentName==='fc1-container'){
      console.log(stateModel,screenSize)
    }
    const translateToAttributesComponentProps = (attributesConfig: AttributesConfigPropsModel): AttributesComponentPropsModel => {
      if(componentName==='fc1-container'){
        console.log(attributesConfig)
      }
      const compPropsObj = new AttributesComponentPropsModel()
      Object.entries(attributesConfig).forEach(([k, v]) => {
        compPropsObj.setProperty(k, v)
      })
      let copy = Object.create(compPropsObj)
      Object.entries(compPropsObj).forEach(([k,v])=>{
        if(v !== undefined && (v instanceof Array || typeof v !== 'object')) copy[k] = v
        else if(v && typeof v === 'object'){
          copy[k] = new ComponentModel(v.name,v.type,v.childLayout,v.position,v.dimensions,v.attributes,v.visibility,v.overflow,v.children,v.styling,v.data)
        }
      })
      return copy
    }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]) {
        return translateToAttributesComponentProps(stateModelObj[ScreenSize[lastScreenSize]])
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsiveAttributesConfigModel and screen ' + ScreenSize[screenSize])
  }
  public getVisibilityComponentProps(componentName: string, stateModel: ResponsiveVisibilityConfigModel, screenSize: number): VisibilityComponentPropsModel {
    const translateToVisibilityComponentProps = (visibilityConfig: VisibilityConfigPropsModel): VisibilityComponentPropsModel => {
      const compPropsObj = new VisibilityComponentPropsModel()
      Object.entries(visibilityConfig).forEach(([k, v]) => {
        compPropsObj.setProperty(k, v)
      })
      return compPropsObj
    }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]) {
        return translateToVisibilityComponentProps(stateModelObj[ScreenSize[lastScreenSize]])
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsiveVisibilityConfigModel and screen ' + ScreenSize[screenSize])
  }
  public getChildLayoutComponentProps(componentName: string, stateModel: ResponsiveChildLayoutConfigModel, screenSize: number): ChildLayoutComponentsPropsModel {
    // diegene die deze methode aanroept moet ervoor zorgen dat de properties effectief naar de bedoelde childComponents gaan, indien van toepassing
    const translateToChildLayoutComponentsProps = (childLayoutConfig: ChildLayoutConfigPropsModel): ChildLayoutComponentsPropsModel => {
      const parentPropsObj = new ParentComponentPropsModel()
      const childPropsObj = new ChildComponentsPropsModel()
      Object.entries(childLayoutConfig.horizontalLayout).forEach(([k]) => {
        const layout = childLayoutConfig.horizontalLayout.getComponentProperties(k, childLayoutConfig.verticalLayout)
        if (layout.parent) {
          parentPropsObj.setProperties(layout.parent)
        }
        if (layout.children) {
          childPropsObj.setProperties(layout.children)
        }
      })
      return new ChildLayoutComponentsPropsModel(parentPropsObj, childPropsObj)
    }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]) {
        return translateToChildLayoutComponentsProps(stateModelObj[ScreenSize[lastScreenSize]])
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsiveChildLayoutConfigModel and screen ' + ScreenSize[screenSize])
  }

  public getComponent(compName: string ,component?:ComponentModel): ComponentModel | undefined {
    // todo later string [] variant toevoegen
    // de naam is nu 'input with label'
    if(component){
        if(component.name !== compName){
          if(component.children){
            for (let j=0;j<component.children.length;j++){
              // hier ga je bv de menubar component hebben
              const comp = this.getComponent(compName,component.children[j] as ComponentModel)
              if(comp){
                return comp
              }
            }
          }
      } else return component
    } else{
      if(this.components !== undefined){
        for (let i=0;i<this.components.length;i++){
          if(this.components[i].name !== compName){
            if(this.components[i].children){
              for (let k=0;k<(this.components[i].children as ComponentModel[]).length;k++){
                const comp = this.getComponent(compName,(this.components[i].children as ComponentModel[])[k])
                if(comp){
                  return comp
                }
              }
            }
          } else return this.components[i]
        }
      }
    }
    return undefined
  }
  public getParentComponentWithProperty(compName: string ,property:string, component?:ComponentModel, previousComponent?:ComponentModel): ComponentModel | undefined {
    // todo later string [] variant toevoegen
    if(component){
      if(component.name !== compName){
        if(component.children){
          for (let j=0;j<component.children.length;j++){
            let previousComponent
            if((component.children[j] as ComponentModel).hasOwnProperty(property)){
              previousComponent = component.children[j] as ComponentModel
            }
            const comp = this.getParentComponentWithProperty(compName,property,component.children[j] as ComponentModel,previousComponent)
            if(comp){
              return comp
            }
          }
        }
      } else return previousComponent
    } else{
      if(this.components !== undefined){
        for (let i=0;i<this.components.length;i++){
          if(this.components[i].name !== compName){
            if(this.components[i].children){
              for (let k=0;k<(this.components[i].children as ComponentModel[]).length;k++){
                let previousComponent
                if((this.components[i].children as ComponentModel[])[k].hasOwnProperty(property)){
                  previousComponent = (this.components[i].children as ComponentModel[])[k]
                }
                const comp = this.getParentComponentWithProperty(compName,property,(this.components[i].children as ComponentModel[])[k],previousComponent)
                if(comp){
                  return comp
                }
              }
            }
          } else return previousComponent
        }
      }
    }
    return undefined
  }
  public getParentComponentWithPropertyThroughAttributes(compName: string,property:string,childComp?:ComponentModel,previous?:ComponentModel): ComponentModel | undefined{
    if(childComp){
      if(childComp.name === compName) return previous
      if(childComp.attributes !== undefined){
        const attributes = childComp.attributes as ResponsiveAttributesConfigModel
        for (let [k,v] of Object.entries(attributes)){
          if(v){
            for (let[j,l] of Object.entries(v)){
              if(l instanceof ComponentModel && l.name === compName){
                return previous
              }
              let previousComponent
              if(l instanceof ComponentModel && l.hasOwnProperty(property)){
                previousComponent = l
              }
              if(l instanceof ComponentModel && (l.attributes!==undefined||l.children!==undefined)){
                let component
                if(previousComponent) component = this.getParentComponentWithPropertyThroughAttributes(compName,property,l,previousComponent)
                else component = this.getParentComponentWithPropertyThroughAttributes(compName,property,l,previous)
                if(component){
                  return component
                }
              }
            }
          }
        }
      }
      if(childComp.children!==undefined){
        for (let j = 0; j < (childComp.children as ComponentModel[]).length; j++) {
          let previousComponent
          if((childComp.children as ComponentModel[])[j].hasOwnProperty(property)){
            previousComponent = (childComp.children as ComponentModel[])[j]
          }
          let component
          if(previousComponent) component = this.getParentComponentWithPropertyThroughAttributes(compName,property,(childComp.children as ComponentModel[])[j],previousComponent)
          else component = this.getParentComponentWithPropertyThroughAttributes(compName,property,(childComp.children as ComponentModel[])[j],previous)
          if(component){
            return component
          }
        }
      }
    } else if(this.components!==undefined){
      for (let i=0;i<this.components.length;i++){
        if(this.components[i].attributes !== undefined){
          const attributes = this.components[i].attributes as ResponsiveAttributesConfigModel
          for (let [k,v] of Object.entries(attributes)){
            if(v){
              for (let[j,l] of Object.entries(v)){
                if(l instanceof ComponentModel && l.name === compName){
                  return previous
                }
                let previousComponent
                if(l instanceof ComponentModel && l.hasOwnProperty(property)){
                  previousComponent = l
                }
                if(l instanceof ComponentModel){
                  let component
                  if(previousComponent) component =this.getParentComponentWithPropertyThroughAttributes(compName,property,l,previousComponent)
                  else component = this.getParentComponentWithPropertyThroughAttributes(compName,property,l,previous)
                  if(component) return component
                }
              }
            }
          }
        }
        if(this.components[i].children !== undefined){
          for (let j = 0; j < (this.components[i].children as ComponentModel[]).length; j++) {
            let previousComponent
            if((this.components[i].children as ComponentModel[])[j].hasOwnProperty(property)){
              previousComponent = (this.components[i].children as ComponentModel[])[j]
            }
            let component
            if(previousComponent) component = this.getParentComponentWithPropertyThroughAttributes(compName,property,(this.components[i].children as ComponentModel[])[j],previousComponent)
            else component = this.getParentComponentWithPropertyThroughAttributes(compName,property,(this.components[i].children as ComponentModel[])[j],previous)
            if(component){
              return component
            }
          }
        }
      }
    }
    return undefined
  }
  public getComponentThroughAttributes(compName: string,childComp?:ComponentModel): ComponentModel | undefined{
    if(childComp){
      if(childComp.name === compName) return childComp
      if(childComp.attributes !== undefined){
        const attributes = childComp.attributes as ResponsiveAttributesConfigModel
        for (let [k,v] of Object.entries(attributes)){
          if(v){
            for (let[j,l] of Object.entries(v)){
              // todo het is niet per se een instance omdat het niet met het new keyword werd aangemaakt => maar ik zou
              //      dit dus voorlopig in de constraints wel afdwingen
              if(l instanceof ComponentModel && l.name === compName){
                return l
              }
              if(l instanceof ComponentModel && (l.attributes!==undefined||l.children!==undefined)){
                const component = this.getComponentThroughAttributes(compName,l)
                if(component){
                  return component
                }
              }
            }
          }
        }
      }
      if(childComp.children!==undefined){
        for (let j = 0; j < (childComp.children as ComponentModel[]).length; j++) {
          const component = this.getComponentThroughAttributes(compName,(childComp.children as ComponentModel[])[j])
          if(component){
            return component
          }
        }
      }
    } else if(this.components!==undefined){
      for (let i=0;i<this.components.length;i++){
        if(this.components[i].attributes !== undefined){
          const attributes = this.components[i].attributes as ResponsiveAttributesConfigModel
          for (let [k,v] of Object.entries(attributes)){
            if(v){
              for (let[j,l] of Object.entries(v)){
                if(l instanceof ComponentModel && l.name === compName){
                  return l
                }
              }
            }
          }
        }
        if(this.components[i].children !== undefined){
          for (let j = 0; j < (this.components[i].children as ComponentModel[]).length; j++) {
            const component = this.getComponentThroughAttributes(compName,(this.components[i].children as ComponentModel[])[j])
            if(component){
              return component
            }
          }
        }
      }
    }
    return undefined
  }

  public setRBSState(componentName: string,
                  newState: (PositioningComponentPropsModel |
                    AttributesComponentPropsModel |
                    VisibilityComponentPropsModel) |
                    StylingComponentPropsModel |
                    DimensioningComponentPropsModel |
                    OverflowComponentPropsModel |
                    ChildLayoutComponentsPropsModel |
                    (ComponentModel[])): void {
    if (newState instanceof PositioningComponentPropsModel ||
      newState instanceof AttributesComponentPropsModel ||
      newState instanceof VisibilityComponentPropsModel ||
      newState instanceof StylingComponentPropsModel ||
      newState instanceof DimensioningComponentPropsModel ||
      newState instanceof OverflowComponentPropsModel
    ) {
      for (let [k, v] of Object.entries(newState)) {
        if(k==='dataLink')
        console.log(componentName,(newState as AttributesComponentPropsModel).dataLink,'concrete values',k,v)
        if (v !== ComponentDimensionValueConfigType.Parent) {
          this.getStatePropertySubjects().find(subj => {
            return subj.componentName === componentName && subj.propName === k
          })?.propValue.next(v)
        }
      }
    } else if (newState instanceof ChildLayoutComponentsPropsModel) {
      if (newState.parentProps) {
        for (let [k, v] of Object.entries(newState.parentProps)) {
          this.getStatePropertySubjects().find(subj => {
            return subj.componentName === componentName && subj.propName === k
          })?.propValue.next(v)
        }
      }
      if (newState.childProps) {
        for (let [k, v] of Object.entries(newState.childProps)) {
          let parent = this.getComponent(componentName)
          if(!parent){
            parent = this.getComponentThroughAttributes(componentName)
          }
          if (parent?.children) {
            if (parent.children?.length > 0 && typeof parent.children[0] === 'string') {
              (parent.children as string[]).forEach(childName => {
                this.getStatePropertySubjects().find(subj => {
                  return subj.componentName === childName && subj.propName === k
                })?.propValue.next(v)
              })
            } else {
              (parent.children as ComponentModel[]).forEach(childComp => {
                this.getStatePropertySubjects().find(subj => {
                  return subj.componentName === childComp.name && subj.propName === k
                })?.propValue.next(v)
              })
            }
          }
        }
      }
    } else {
      this.getStatePropertySubjects().find(subj => {
        return subj.componentName === componentName && subj.propName === 'children'
      })?.propValue.next(newState)
    }
  }
  private components: ComponentModel[] | undefined
/*  public addProperty(compName:string,propName:string){
    if(!this.getStatePropertySubjects().find(subj => {
      return subj.componentName === compName && subj.propName === propName
    })){
      const propSubj = new BehaviorSubject<any | undefined>(undefined)
      this.statePropertySubjects.push({
        componentName: compName, propName: propName, propValue:
        propSubj, prop$: propSubj.asObservable()
      })
    }
  }*/
  private createProps(component: ComponentModel) {
    if(component.data){
      const propSubj = new BehaviorSubject<any | undefined>(undefined)
      this.statePropertySubjects.push({
        componentName: component.name, propName: 'dataConcept', propValue:
        propSubj, prop$: propSubj.asObservable()
      })
    }
    if (component.attributes) {
      Object.entries(this.getAttributesComponentProps(component.name, component.attributes, ScreenSize.highResolution)).forEach(([k,v]) => {
        if(k==='dataLink'){
          const propSubj = new BehaviorSubject<any | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: component.name, propName: 'dataAttribute', propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        }
        const propSubj = new BehaviorSubject<any | undefined>(undefined)
        this.statePropertySubjects.push({
          componentName: component.name, propName: k, propValue:
          propSubj, prop$: propSubj.asObservable()
        })
        if(typeof v === 'object' && v.isComponent){
          this.createProps(v)
        }
      })
    }
    if (component.visibility) {
      Object.keys(this.getVisibilityComponentProps(component.name, component.visibility, ScreenSize.highResolution)).forEach(k => {
        const propSubj = new BehaviorSubject<any | undefined>(undefined)
        this.statePropertySubjects.push({
          componentName: component.name, propName: k, propValue:
          propSubj, prop$: propSubj.asObservable()
        })
      })
    }
    if (component.childLayout) {
      const childLayout = this.getChildLayoutComponentProps(component.name, component.childLayout, ScreenSize.highResolution)
      Object.keys(childLayout.parentProps).forEach(propName => {
        const propSubj = new BehaviorSubject<any | undefined>(undefined)
        this.statePropertySubjects.push({
          componentName: component.name, propName: propName, propValue:
          propSubj, prop$: propSubj.asObservable()
        })
      })
      if (childLayout.childProps)
        Object.keys(childLayout.childProps).forEach(propName => {
          if (component.children) {
            if (component.children?.length > 0 && typeof component.children[0] === 'string') {
              (component.children as string[]).forEach(childName => {
                const propSubj = new BehaviorSubject<any | undefined>(undefined)
                this.statePropertySubjects.push({
                  componentName: childName, propName: propName, propValue:
                  propSubj, prop$: propSubj.asObservable()
                })
              })
            } else {
              (component.children as ComponentModel[]).forEach(childComp => {
                const propSubj = new BehaviorSubject<any | undefined>(undefined)
                this.statePropertySubjects.push({
                  componentName: childComp.name, propName: propName, propValue:
                  propSubj, prop$: propSubj.asObservable()
                })
              })
            }
          }
        })
    }
    if (component.position) {
      Object.keys(this.getPositionComponentProps(component.name, component.position, ScreenSize.highResolution)).forEach(k => {
        const propSubj = new BehaviorSubject<any | undefined>(undefined)
        this.statePropertySubjects.push({
          componentName: component.name, propName: k, propValue:
          propSubj, prop$: propSubj.asObservable()
        })
      })
    }
    if (component.dimensions) {
      Object.keys(this.getDimensionsComponentProps(component.name, component.dimensions, ScreenSize.highResolution)).forEach(k => {
        const propSubj = new BehaviorSubject<any | undefined>(undefined)
        this.statePropertySubjects.push({
          componentName: component.name, propName: k, propValue:
          propSubj, prop$: propSubj.asObservable()
        })
      })
    }
    if (component.overflow) {
      Object.keys(this.getOverflowComponentProps(component.name, component.overflow, ScreenSize.highResolution)).forEach(k => {
        const propSubj = new BehaviorSubject<any | undefined>(undefined)
        this.statePropertySubjects.push({
          componentName: component.name, propName: k, propValue:
          propSubj, prop$: propSubj.asObservable()
        })
      })
    }
    if (component.styling) {
      Object.keys(this.getStylingComponentProps(component.name, component.styling, ScreenSize.highResolution)).forEach(k => {
        const propSubj = new BehaviorSubject<any | undefined>(undefined)
        this.statePropertySubjects.push({
          componentName: component.name, propName: k, propValue:
          propSubj, prop$: propSubj.asObservable()
        })
      })
    }
    if (component.children && component.children.length > 0) {
      const propSubj = new BehaviorSubject<ComponentModel[] | undefined>(undefined)
      this.statePropertySubjects.push({
        componentName: component.name, propName: 'children', propValue:
        propSubj, prop$: propSubj.asObservable()
      });
      (component.children as ComponentModel[]).forEach(child => {
        this.createProps(child)
      })
    }
  }
  public createStore(contentContainer: {
    components: ComponentModel[],
    actions: ActionModel[]
  }) {
    this.components = [...contentContainer.components]
    contentContainer.components.forEach(comp => {
      this.createProps(comp)}
    )
    this.actions = [...contentContainer.actions]
  }
  public bindToStateProperty(componentName: string, propName: string):
    Observable<
      PositioningComponentPropsModel |
      AttributesComponentPropsModel |
      VisibilityComponentPropsModel |
      OverflowComponentPropsModel |
      StylingComponentPropsModel |
      string |
      number |
      boolean |
      CalculationModel |
      ComponentModel |
      ComponentModel[]> |
    undefined {
    // todo create a union type to denote this
    return this.statePropertySubjects.find(state => {
      return state.componentName === componentName && state.propName === propName
    })?.prop$
  }

  public hasStateProperty(compName:string,propName:string):boolean{
    return this.statePropertySubjects.find(propSubj=>{
      return propSubj.propName === propName && propSubj.componentName === compName
    }) !== undefined
  }

  public getStatePropertySubjects(): StatePropertySubjectModel[] {
    return this.statePropertySubjects.slice()
  }
  public getStatePropertySubject(compName:string,propName:string): StatePropertySubjectModel|undefined {
    return this.statePropertySubjects.find(ps=>{
      return ps.componentName===compName && ps.propName === propName
    })
  }
  public getActions():ActionModel[]{
    return [...this.actions]
  }
  public getActionsForComponent(name:string):ActionModel[]{
    return this.actions.filter(action=>{
      return action.targetName===name
    })
  }
  public getActionsForEvent(event:EventType){
    return this.actions.filter(action=>{
      return action.on === event
    })
  }

  public getParentConfigModel(){

  }
  public getComponentsConfig():ComponentModel[]{
    if(this.components)
    return [...this.components]
    else return []
  }
}

