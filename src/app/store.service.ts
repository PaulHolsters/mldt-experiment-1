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
import {MainAxisHorizontalPositioningConfigType} from "./enums/mainAxisHorizontalPositioningConfigTypes.enum";
import {MainAxisVerticalPositioningConfigType} from "./enums/mainAxisVerticalPositioningConfigTypes.enum";
import {ResponsiveStylingConfigModel} from "./models/Styling/ResponsiveStylingConfigModel";
import {StylingComponentPropsModel} from "./models/Styling/StylingComponentPropsModel";
import {StylingConfigPropsModel} from "./models/Styling/StylingConfigPropsModel";
import {OverflowValueConfigType} from "./enums/overflowValueConfigTypes.enum";
import {OverflowChildConfigPropsModel} from "./models/Overflow/children/OverflowChildConfigPropsModel";
import {ColorType} from "./enums/colorType.enum";
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
import {HorizontalLayoutConfigPropsModel} from "./models/ChildLayout/HorizontalLayoutConfigPropsModel";
import {VerticalLayoutConfigPropsModel} from "./models/ChildLayout/VerticalLayoutConfigPropsModel";
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() {
  }
  private statePropertySubjects: StatePropertySubjectModel[] = []
  private hasScreenSizeProperty(stateModel:
                                  ResponsivePositioningConfigModel|ResponsiveOverflowConfigModel|ResponsiveStylingConfigModel|ResponsiveDimensioningConfigModel|ResponsiveAttributesConfigModel
                                |ResponsiveVisibilityConfigModel,property:string):boolean{
    let lastScreenSize = ScreenSize.highResolution
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]
        && stateModelObj[ScreenSize[lastScreenSize]].hasOwnProperty(property)
        && stateModelObj[ScreenSize[lastScreenSize]][property]!==undefined) {
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
      (positionConfig: CrossAxisVerticalPositioningConfigType|CrossAxisHorizontalPositioningConfigType): PositioningComponentPropsModel => {
        return new PositioningComponentPropsModel(
          positionConfig === CrossAxisVerticalPositioningConfigType.Top || positionConfig === CrossAxisHorizontalPositioningConfigType.Left,
          positionConfig === CrossAxisVerticalPositioningConfigType.Center || positionConfig === CrossAxisHorizontalPositioningConfigType.Center,
          positionConfig === CrossAxisVerticalPositioningConfigType.Bottom || positionConfig === CrossAxisHorizontalPositioningConfigType.Right,
          positionConfig === CrossAxisVerticalPositioningConfigType.Baseline || positionConfig === CrossAxisHorizontalPositioningConfigType.Baseline)
      }
    if(this.hasScreenSizeProperty(stateModel,'selfAlign')){
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
          overflowConfig.overflow === OverflowValueConfigType.Scroll,
          overflowConfig.overflow === OverflowValueConfigType.Hidden,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Hidden,
          overflowConfig.verticalOverflow === OverflowValueConfigType.Hidden,
          overflowConfig.horizontalOverflow === OverflowValueConfigType.Scroll,
          overflowConfig.verticalOverflow === OverflowValueConfigType.Scroll)
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
    if(this.hasScreenSizeProperty(stateModel,'childOverflowConfig')){
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
          stylingConfig.backgroundColor === ColorType.primary,
          stylingConfig.backgroundColor === ColorType.white)
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
      if (dimensionsConfig.height) {
        if (dimensionsConfig.height instanceof FixedDimensioningConfigModel) {
          switch (dimensionsConfig.height.type) {
            case DimensionValueConfigType.Hardcoded:
              switch (dimensionsConfig.height.unit) {
                case DimensionUnitConfigType.REM:
                  compPropsObj.height = dimensionsConfig.height.value + 'rem'
                  break
                case DimensionUnitConfigType.PX:
                  compPropsObj.height = dimensionsConfig.height.value + 'px'
                  break
                case DimensionUnitConfigType.Percentage:
                  compPropsObj.height = dimensionsConfig.height.value + '%'
                  break
              }
              break
            case DimensionValueConfigType.Calculated:
              if (typeof dimensionsConfig.height.value === 'string')
                compPropsObj.calcHeight = dimensionsConfig.height.value
              break
          }
        } else {
          if (dimensionsConfig.height.grow && !isNaN(dimensionsConfig.height.grow)) {
            compPropsObj.grow = dimensionsConfig.height.grow
          }
          if (dimensionsConfig.height.shrink && !isNaN(dimensionsConfig.height.shrink)) {
            compPropsObj.shrink = dimensionsConfig.height.shrink
          }
        }
      }
      if (dimensionsConfig.width) {
        if (dimensionsConfig.width instanceof FixedDimensioningConfigModel) {
          switch (dimensionsConfig.width.type) {
            case DimensionValueConfigType.Hardcoded:
              switch (dimensionsConfig.width.unit) {
                case DimensionUnitConfigType.REM:
                  compPropsObj.width = dimensionsConfig.width.value + 'rem'
                  break
                case DimensionUnitConfigType.PX:
                  compPropsObj.width = dimensionsConfig.width.value + 'px'
                  break
                case DimensionUnitConfigType.Percentage:
                  compPropsObj.width = dimensionsConfig.width.value + '%'
                  break
              }
              break
            case DimensionValueConfigType.Calculated:
              if (typeof dimensionsConfig.width.value === 'string')
                compPropsObj.calcWidth = dimensionsConfig.width.value
              break
          }
        } else {
          if (dimensionsConfig.width.grow && !isNaN(dimensionsConfig.width.grow)) {
            compPropsObj.grow = dimensionsConfig.width.grow
          }
          if (dimensionsConfig.width.shrink && !isNaN(dimensionsConfig.width.shrink)) {
            compPropsObj.shrink = dimensionsConfig.width.shrink
          }
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
      const compPropsObj = new AttributesComponentPropsModel()
      Object.entries(attributesConfig).forEach(([k,v])=>{
        compPropsObj.setProperty(k,v)
      })
      return compPropsObj
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
      Object.entries(visibilityConfig).forEach(([k,v])=>{
        compPropsObj.setProperty(k,v)
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

      // todo het probleem hier is nu dat de verticale mapping de horizontal mapping kan gaan overschrijven!!

      Object.entries(childLayoutConfig.horizontalLayout).forEach(([k])=>{
        if(childLayoutConfig.horizontalLayout.isParent(k)){
          childLayoutConfig.horizontalLayout.getComponentProperties(k).forEach(v=>{
            parentPropsObj.setProperty(v)
          })
        } else{
          childLayoutConfig.horizontalLayout.getComponentProperties(k).forEach(v=>{
            childPropsObj.setProperty(v)
          })
        }
      })
      Object.entries(childLayoutConfig.verticalLayout).forEach(([k])=>{
        if(childLayoutConfig.verticalLayout.isParent(k)){
          childLayoutConfig.verticalLayout.getComponentProperties(k).forEach(v=>{
            parentPropsObj.setProperty(v)
          })
        } else{
          childLayoutConfig.verticalLayout.getComponentProperties(k).forEach(v=>{
            childPropsObj.setProperty(v)
          })
        }
      })
      return new ChildLayoutComponentsPropsModel(parentPropsObj,childPropsObj)
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
  public setState(componentName: string,
                  newState:(PositioningComponentPropsModel |
                    AttributesComponentPropsModel |
                    VisibilityComponentPropsModel) |
                    StylingComponentPropsModel |
                    DimensioningComponentPropsModel|
                    OverflowComponentPropsModel|
                    (ComponentModel[])): void {
    if(newState instanceof PositioningComponentPropsModel ||
      newState instanceof AttributesComponentPropsModel ||
      newState instanceof VisibilityComponentPropsModel ||
      newState instanceof StylingComponentPropsModel ||
      newState instanceof DimensioningComponentPropsModel||
      newState instanceof OverflowComponentPropsModel
      ){
      for (let [k, v] of Object.entries(newState)) {
        this.getStatePropertySubjects().find(subj => {
          return subj.componentName === componentName && subj.propName === k
        })?.propValue.next(v)
      }
    } else{
      this.getStatePropertySubjects().find(subj => {
        return subj.componentName === componentName && subj.propName === 'children'
      })?.propValue.next(newState)
    }
  }
  public createStore(contentContainer: {
    components: ComponentModel[],
    actions: ActionModel[]
  }) {
    contentContainer.components.forEach(comp => {
      // children: indien child components inlined zijn zodat ze niet vergeten worden om te initialisezeren
      if(comp.children && comp.children.length>0){
        (comp.children as ComponentModel[]).forEach(child=>{
          if(child.childLayout){
            // voorlopig in het configObject niet het geval
          }
          if(child.visibility){
            Object.keys(this.getVisibilityComponentProps(child.name, child.visibility, ScreenSize.highResolution)).forEach(k => {
              const propSubj = new BehaviorSubject<any | undefined>(undefined)
              this.statePropertySubjects.push({
                componentName: child.name, propName: k, propValue:
                propSubj, prop$: propSubj.asObservable()
              })
            })
          }
          if(child.styling){
            Object.keys(this.getStylingComponentProps(child.name, child.styling, ScreenSize.highResolution)).forEach(k => {
              const propSubj = new BehaviorSubject<any | undefined>(undefined)
              this.statePropertySubjects.push({
                componentName: child.name, propName: k, propValue:
                propSubj, prop$: propSubj.asObservable()
              })
            })
          }
          if(child.position){
            Object.keys(this.getPositionComponentProps(child.name, child.position, ScreenSize.highResolution)).forEach(k => {
              const propSubj = new BehaviorSubject<any | undefined>(undefined)
              this.statePropertySubjects.push({
                componentName: child.name, propName: k, propValue:
                propSubj, prop$: propSubj.asObservable()
              })
            })
          }
          if (child.dimensions){
            Object.keys(this.getDimensionsComponentProps(child.name, child.dimensions, ScreenSize.highResolution)).forEach(k => {
              const propSubj = new BehaviorSubject<any | undefined>(undefined)
              this.statePropertySubjects.push({
                componentName: child.name, propName: k, propValue:
                propSubj, prop$: propSubj.asObservable()
              })
            })
          }
          if (child.overflow) {
            Object.keys(this.getOverflowComponentProps(child.name, child.overflow, ScreenSize.highResolution)).forEach(k => {
              const propSubj = new BehaviorSubject<any | undefined>(undefined)
              this.statePropertySubjects.push({
                componentName: child.name, propName: k, propValue:
                propSubj, prop$: propSubj.asObservable()
              })
            })
            // todo dit moet in een aparte config prop komen childOverflow
            if (child.children && child.children.length > 0) {
              Object.keys(this.getOverflowChildComponentsProps(child.name, child.overflow, ScreenSize.highResolution)).forEach(k => {
                const propSubj = new BehaviorSubject<any | undefined>(undefined)
                this.statePropertySubjects.push({
                  componentName: child.name, propName: k, propValue:
                  propSubj, prop$: propSubj.asObservable()
                })
              })
            }
          }
        })
      }
      // self
      if(comp.childLayout){
        Object.keys(this.getChildLayoutComponentProps(comp.name, comp.childLayout, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<any | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
      if (comp.position) {
        Object.keys(this.getPositionComponentProps(comp.name, comp.position, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<any | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
      if (comp.dimensions){
        Object.keys(this.getDimensionsComponentProps(comp.name, comp.dimensions, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<any | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
      if (comp.overflow) {
        Object.keys(this.getOverflowComponentProps(comp.name, comp.overflow, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<any | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
        // todo dit moet in een aparte config prop komen childOverflow
        if (comp.children && comp.children.length > 0) {
          Object.keys(this.getOverflowChildComponentsProps(comp.name, comp.overflow, ScreenSize.highResolution)).forEach(k => {
            const propSubj = new BehaviorSubject<any | undefined>(undefined)
            this.statePropertySubjects.push({
              componentName: comp.name, propName: k, propValue:
              propSubj, prop$: propSubj.asObservable()
            })
          })
        }
      }
      if (comp.attributes) {
        Object.keys(this.getAttributesComponentProps(comp.name, comp.attributes, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<any | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
      if (comp.visibility) {
        Object.keys(this.getVisibilityComponentProps(comp.name, comp.visibility, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<any | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
      if (comp.styling) {
        Object.keys(this.getStylingComponentProps(comp.name, comp.styling, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<any | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
      if(comp.children && comp.children.length > 0){
        const propSubj = new BehaviorSubject<ComponentModel[] | undefined>(undefined)
        this.statePropertySubjects.push({
          componentName: comp.name, propName: 'children', propValue:
          propSubj, prop$: propSubj.asObservable()
        })
      }
    })
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
      ComponentModel[]> |
    undefined {
    // todo create a union type to denote this
    return this.statePropertySubjects.find(state => {
      return state.componentName === componentName && state.propName === propName
    })?.prop$
  }
  public getStatePropertySubjects(): StatePropertySubjectModel[] {
    return this.statePropertySubjects.slice()
  }
}

//selfAlignStart,width, height, grow, shrink
