import {Injectable, OnInit} from '@angular/core';
import {ResponsivePositioningConfigModel} from "../models/Positioning/self/ResponsivePositioningConfigModel";
import {ResponsiveAttributesConfigModel} from "../models/Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveVisibilityConfigModel} from "../models/Visibility/ResponsiveVisibilityConfigModel";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {StatePropertySubjectModel} from "../models/StatePropertySubject";
import {CalculationModel} from "../models/CalculationModel";
import {ComponentModel} from "../models/ComponentModel";
import {AttributesConfigPropsModel} from "../models/Attributes/AttributesConfigPropsModel";
import {VisibilityConfigPropsModel} from "../models/Visibility/VisibilityConfigPropsModel";
import {PositioningComponentPropsModel} from "../models/Positioning/self/PositioningComponentPropsModel";
import {AttributesComponentPropsModel} from "../models/Attributes/AttributesComponentPropsModel";
import {VisibilityComponentPropsModel} from "../models/Visibility/VisibilityComponentPropsModel";
import {ScreenSize} from "../enums/screenSizes.enum";
import {OverflowComponentPropsModel} from "../models/Overflow/self/OverflowComponentPropsModel";
import {OverflowConfigPropsModel} from "../models/Overflow/self/OverflowConfigPropsModel";
import {ResponsiveOverflowConfigModel} from "../models/Overflow/self/ResponsiveOverflowConfigModel";
import {ResponsiveStylingConfigModel} from "../models/Styling/ResponsiveStylingConfigModel";
import {StylingComponentPropsModel} from "../models/Styling/StylingComponentPropsModel";
import {StylingConfigPropsModel} from "../models/Styling/StylingConfigPropsModel";
import {OverflowValueConfigType} from "../enums/overflowValueConfigTypes.enum";
import {OverflowChildConfigPropsModel} from "../models/Overflow/children/OverflowChildConfigPropsModel";
import {ResponsiveDimensioningConfigModel} from "../models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningComponentPropsModel} from "../models/Dimensioning/self/DimensioningComponentPropsModel";
import {DimensioningConfigPropsModel} from "../models/Dimensioning/self/DimensioningConfigPropsModel";
import {FixedDimensioningConfigModel} from "../models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "../enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "../enums/dimensionUnitConfigTypes.enum";
import {CrossAxisVerticalPositioningConfigType} from "../enums/crossAxisVerticalPositioningConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "../enums/crossAxisHorizontalPositioningConfigTypes.enum";
import {ChildLayoutComponentsPropsModel} from "../models/ChildLayout/ChildLayoutComponentsPropsModel";
import {ResponsiveChildLayoutConfigModel} from "../models/ChildLayout/ResponsiveChildLayoutConfigModel";
import {ChildLayoutConfigPropsModel} from "../models/ChildLayout/ChildLayoutConfigPropsModel";
import {ParentComponentPropsModel} from "../models/ChildLayout/ParentComponentsPropsModel";
import {ChildComponentsPropsModel} from "../models/ChildLayout/ChildComponentsPropsModel";
import {DynamicDimensioningConfigModel} from "../models/Dimensioning/self/DynamicDimensioningConfigModel";
import {HeightConfigPropsModel} from "../models/Dimensioning/self/HeightConfigPropsModel";
import {WidthConfigPropsModel} from "../models/Dimensioning/self/WidthConfigPropsModel";
import {ComponentDimensionValueConfigType} from "../enums/componentDimensionValueConfigTypes.enum";
import {FixedDimensionValueConfigType} from "../enums/FixedDimensionValueConfigTypes.enum";
import {DynamicDimensionValueConfigType} from "../enums/DynamicDimensionValueConfigTypes.enum";
import {GrowValueConfigType} from "../enums/GrowValueConfigTypes.enum";
import {ShrinkValueConfigType} from "../enums/ShrinkValueConfigTypes.enum";
import {ActionsService} from "./actions.service";
import {ActionSubType} from "../enums/actionSubTypes.enum";
import {ActionType} from "../enums/actionTypes.enum";
import {ConfigService} from "./config.service";
import {NoValueType} from "../enums/no_value_type";
import {StateService} from "./state.service";
import {PositioningConfigPropsModel} from "../models/Positioning/self/PositioningConfigPropsModel";

@Injectable({
  providedIn: 'root'
})
export class StoreService implements OnInit {

  public actionFinished = new Subject()

  constructor(private actionsService: ActionsService, private configService: ConfigService,private stateService:StateService) {
    this.actionsService.bindToActionsEmitter.subscribe(res => {
      this.bindActions()
    })
  }

  ngOnInit(): void {
    // vervang behavioursubject indien nodig door iets dat maximaal 1 keer vuurt zodat je kan garanderen dat de store maar 1 keer wordt aangemaakt ,
    // al denk ik dan dit misschien best in het begin al kan gebeuren zonder action

  }

  public bindActions() {
    this.actionsService.bindToAction(ActionType.Client, ActionSubType.SetResponsiveBehaviour)?.subscribe(res => {
      this.createStore()
    })
  }

  private statePropertySubjects: StatePropertySubjectModel[] = []

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
      (positionConfig: PositioningConfigPropsModel): PositioningComponentPropsModel => {
        return new PositioningComponentPropsModel(
          positionConfig.selfAlign === CrossAxisVerticalPositioningConfigType.Top || positionConfig === CrossAxisHorizontalPositioningConfigType.Left,
          positionConfig.selfAlign === CrossAxisVerticalPositioningConfigType.Center || positionConfig === CrossAxisHorizontalPositioningConfigType.Center,
          positionConfig.selfAlign === CrossAxisVerticalPositioningConfigType.Bottom || positionConfig === CrossAxisHorizontalPositioningConfigType.Right,
          positionConfig.selfAlign === CrossAxisVerticalPositioningConfigType.Baseline || positionConfig === CrossAxisHorizontalPositioningConfigType.Baseline,
          positionConfig.display)
      }
    if (this.hasScreenSizeProperty(stateModel, 'selfAlign')||this.hasScreenSizeProperty(stateModel, 'display')) {
      let lastScreenSize = screenSize
      const stateModelObj = Object.create(stateModel)
      while (lastScreenSize >= 0) {
        if (stateModelObj[ScreenSize[lastScreenSize]]) {
          return translateToPositioningComponentProps(stateModelObj[ScreenSize[lastScreenSize]])
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
          stylingConfig.fontWeight,
          stylingConfig.textColor,
          stylingConfig.textDecoration,
          stylingConfig.fontSize,
          stylingConfig.fontStyle,
          stylingConfig.tableStyle,
          stylingConfig.responsiveTableLayout,
          stylingConfig.tableBreakpoint,
          stylingConfig.buttonSize,
          stylingConfig.buttonMeaning,
          stylingConfig.buttonAppearance,
          stylingConfig.buttonForm,
          stylingConfig.iconSize,
          stylingConfig.iconMeaning
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
    const translateToAttributesComponentProps = (attributesConfig: AttributesConfigPropsModel): AttributesComponentPropsModel => {
      const compPropsObj = new AttributesComponentPropsModel(
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        false,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        false,
        false,
        false,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA,
        NoValueType.NA
      )
      Object.entries(attributesConfig).forEach(([k, v]) => {
        compPropsObj.setProperty(k, v)
      })
      let copy = Object.create(compPropsObj)
      Object.entries(compPropsObj).forEach(([k, v]) => {
        if (v !== undefined && (v instanceof Array || typeof v !== 'object')) copy[k] = v
        else if (v && typeof v === 'object') {
          copy[k] = new ComponentModel(v.name, v.type, v.childLayout, v.position, v.dimensions, v.attributes, v.visibility, v.overflow, v.children, v.styling, v.data)
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
          let parent = this.configService.getComponentConfig(componentName)
          if (!parent) {
            parent = this.configService.getComponentConfigThroughAttributes(componentName)
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
  private createProps(component: ComponentModel){
    this.stateService.getProperties(component.type)?.forEach((v,k)=>{
      const propSubj = new BehaviorSubject<any | undefined>(v)
      this.statePropertySubjects.push({
        componentName: component.name,
        propName: k,
        propValue:propSubj,
        prop$: propSubj.asObservable()
      })
    })
    if(component.children && component.children.length > 0){
      component.children.forEach(child=>{
        if(child instanceof ComponentModel || this.configService.isComponentObjectModel(child)){
          const compT = this.configService.convertToComponentModel(child)
          if(compT)
          this.createProps(compT)
        } else{
          // string!
          throw new Error('string components not implemented yet')
        }
      })
    }
    if(component.attributes){
      for (let [k,v] of Object.entries(component.attributes)){
        if(v){
          for (let[j,l] of Object.entries(v)){
            if(l instanceof ComponentModel || this.configService.isComponentObjectModel(l)){
              const compT = this.configService.convertToComponentModel(l)
              if(compT)
              this.createProps(compT)
            }
            if(l instanceof Array){
              for (let i=0;i<l.length;i++){
                if(l[i] instanceof ComponentModel || this.configService.isComponentObjectModel(l[i])){
                  const compT = this.configService.convertToComponentModel(l[i])
                  if(compT)
                    this.createProps(compT)
                }
              }
            }
          }
        }
      }
    }
  }
  public createStore() {
    this.configService.appConfig?.userConfig.components.forEach(comp => {
      const compT = this.configService.convertToComponentModel(comp)
      if(compT)
        this.createProps(compT)
      }
    )
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
      number[] |
      CalculationModel |
      ComponentModel |
      ComponentModel[]> |
    undefined {
    // todo create a union type to denote this
    return this.statePropertySubjects.find(state => {
      return state.componentName === componentName && state.propName === propName
    })?.prop$
  }

  public hasStateProperty(compName: string, propName: string): boolean {
    return this.statePropertySubjects.find(propSubj => {
      return propSubj.propName === propName && propSubj.componentName === compName
    }) !== undefined
  }

  public getStatePropertySubjects(): StatePropertySubjectModel[] {
    return this.statePropertySubjects.slice()
  }

  public getStatePropertySubject(compName: string, propName: string): StatePropertySubjectModel | undefined {
    return this.statePropertySubjects.find(ps => {
      return ps.componentName === compName && ps.propName === propName
    })
  }

}

