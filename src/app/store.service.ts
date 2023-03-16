import {Injectable} from '@angular/core';
import {ResponsivePositioningConfigModel} from "./models/Positioning/self/ResponsivePositioningConfigModel";
import {PositioningConfigPropsModel} from "./models/Positioning/self/PositioningConfigPropsModel";
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
import {PositioningChildComponentsPropsModel} from "./models/Positioning/children/PositioningChildComponentsPropsModel";
import {OverflowComponentPropsModel} from "./models/Overflow/self/OverflowComponentPropsModel";
import {OverflowConfigPropsModel} from "./models/Overflow/self/OverflowConfigPropsModel";
import {ResponsiveOverflowConfigModel} from "./models/Overflow/self/ResponsiveOverflowConfigModel";
import {CrossAxisRowPositioningConfigType} from "./enums/crossAxisRowPositioningConfigTypes.enum";
import {CrossAxisColumnPositioningConfigType} from "./enums/crossAxisColumnPositioningConfigTypes.enum";
import {PositioningChildrenConfigPropsModel} from "./models/Positioning/children/PositioningChildrenConfigPropsModel";
import {PositionDirectionConfigType} from "./enums/positionDirectionConfigTypes.enum";
import {HorizontalPositioningConfigType} from "./enums/horizontalPositioningConfigTypes.enum";
import {VerticalPositioningConfigType} from "./enums/verticalPositioningConfigTypes.enum";
import {ResponsiveStylingConfigModel} from "./models/Styling/ResponsiveStylingConfigModel";
import {StylingComponentPropsModel} from "./models/Styling/StylingComponentPropsModel";
import {StylingConfigPropsModel} from "./models/Styling/StylingConfigPropsModel";
import {OverflowValueConfigType} from "./enums/overflowValueConfigTypes.enum";
import {OverflowChildConfigPropsModel} from "./models/Overflow/children/OverflowChildConfigPropsModel";
import {ColorType} from "./enums/colorType.enum";
import {ResponsiveDimensioningConfigModel} from "./models/Dimensioning/ResponsiveDimensioningConfigModel";
import {DimensioningComponentPropsModel} from "./models/Dimensioning/DimensioningComponentPropsModel";
import {DimensioningConfigPropsModel} from "./models/Dimensioning/DimensioningConfigPropsModel";
import {FixedDimensioningConfigModel} from "./models/Dimensioning/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "./enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "./enums/dimensionUnitConfigTypes.enum";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() {
  }
  /*const getConfigPropValue = (layoutType: number, configPropName: string): any => {
      let latestSize = screenSize
      while (latestSize >= 0) {
        if (stateModelObj[ScreenSize[latestSize]].selfAlign.hasOwnProperty(configPropName)) {
          return stateModelObj[ScreenSize[latestSize]].selfAlign[configPropName]
        }
        latestSize--
      }
      return undefined
  } */
  private statePropertySubjects: StatePropertySubjectModel[] = []
  public getPositionComponentProps(componentName: string,
                                   stateModel: ResponsivePositioningConfigModel,
                                   screenSize: number): PositioningComponentPropsModel {
    const translateToPositioningComponentProps =
      (positionConfig: CrossAxisRowPositioningConfigType | CrossAxisColumnPositioningConfigType): PositioningComponentPropsModel => {
        return new PositioningComponentPropsModel(
          positionConfig === CrossAxisRowPositioningConfigType.Top || positionConfig === CrossAxisColumnPositioningConfigType.Left,
          positionConfig === CrossAxisRowPositioningConfigType.Center || positionConfig === CrossAxisColumnPositioningConfigType.Center,
          positionConfig === CrossAxisRowPositioningConfigType.Bottom || positionConfig === CrossAxisColumnPositioningConfigType.Right,
          positionConfig === CrossAxisRowPositioningConfigType.Stretch || positionConfig === CrossAxisColumnPositioningConfigType.Stretch,
          positionConfig === CrossAxisRowPositioningConfigType.Baseline || positionConfig === CrossAxisColumnPositioningConfigType.Baseline)
      }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]?.selfAlign) {
        return translateToPositioningComponentProps(stateModelObj[ScreenSize[lastScreenSize]]?.selfAlign)
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsivePositioningConfigModel and screen ' + ScreenSize[screenSize])
  }
  public getPositionChildComponentsProps(componentName: string,
                                         stateModel: ResponsivePositioningConfigModel,
                                         screenSize: number): PositioningChildComponentsPropsModel {
    const translateToPositioningChildComponentsProps =
      (positionConfig: PositioningChildrenConfigPropsModel): PositioningChildComponentsPropsModel => {
        return new PositioningChildComponentsPropsModel(
          positionConfig.direction === PositionDirectionConfigType.Row,
          positionConfig.direction === PositionDirectionConfigType.Column,
          positionConfig.wrap === true,
          positionConfig.horPos === HorizontalPositioningConfigType.Left || positionConfig.verPos === VerticalPositioningConfigType.Top,
          positionConfig.horPos === HorizontalPositioningConfigType.Center || positionConfig.verPos === VerticalPositioningConfigType.Center,
          positionConfig.horPos === HorizontalPositioningConfigType.Center || positionConfig.verPos === VerticalPositioningConfigType.Center,
          positionConfig.horPos === HorizontalPositioningConfigType.Between || positionConfig.verPos === VerticalPositioningConfigType.Between,
          positionConfig.horPos === HorizontalPositioningConfigType.Evenly || positionConfig.verPos === VerticalPositioningConfigType.Evenly,
          positionConfig.horPos === HorizontalPositioningConfigType.Around || positionConfig.verPos === VerticalPositioningConfigType.Around,
          (typeof positionConfig.horPos === 'object' && positionConfig.horPos.children === CrossAxisColumnPositioningConfigType.Left) ||
          (typeof positionConfig.verPos === 'object' && positionConfig.verPos.children === CrossAxisRowPositioningConfigType.Top),
          (typeof positionConfig.horPos === 'object' && positionConfig.horPos.children === CrossAxisColumnPositioningConfigType.Center) ||
          (typeof positionConfig.verPos === 'object' && positionConfig.verPos.children === CrossAxisRowPositioningConfigType.Center),
          (typeof positionConfig.horPos === 'object' && positionConfig.horPos.children === CrossAxisColumnPositioningConfigType.Right) ||
          (typeof positionConfig.verPos === 'object' && positionConfig.verPos.children === CrossAxisRowPositioningConfigType.Bottom),
          (typeof positionConfig.horPos === 'object' && positionConfig.horPos.lanes === HorizontalPositioningConfigType.Left) ||
          (typeof positionConfig.verPos === 'object' && positionConfig.verPos.lanes === VerticalPositioningConfigType.Top),
          (typeof positionConfig.horPos === 'object' && positionConfig.horPos.lanes === HorizontalPositioningConfigType.Center) ||
          (typeof positionConfig.verPos === 'object' && positionConfig.verPos.lanes === VerticalPositioningConfigType.Center),
          (typeof positionConfig.horPos === 'object' && positionConfig.horPos.lanes === HorizontalPositioningConfigType.Right) ||
          (typeof positionConfig.verPos === 'object' && positionConfig.verPos.lanes === VerticalPositioningConfigType.Bottom),
          (typeof positionConfig.horPos === 'object' && positionConfig.horPos.lanes === HorizontalPositioningConfigType.Between) ||
          (typeof positionConfig.verPos === 'object' && positionConfig.verPos.lanes === VerticalPositioningConfigType.Between),
          (typeof positionConfig.horPos === 'object' && positionConfig.horPos.lanes === HorizontalPositioningConfigType.Evenly) ||
          (typeof positionConfig.verPos === 'object' && positionConfig.verPos.lanes === VerticalPositioningConfigType.Evenly),
          (typeof positionConfig.horPos === 'object' && positionConfig.horPos.lanes === HorizontalPositioningConfigType.Around) ||
          (typeof positionConfig.verPos === 'object' && positionConfig.verPos.lanes === VerticalPositioningConfigType.Around)
        )
      }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]?.childPositioning) {
        return translateToPositioningChildComponentsProps(stateModelObj[ScreenSize[lastScreenSize]]?.childPositioning)
      }
      lastScreenSize--
    }
    throw new Error('No screensize child components configuration was found for given ResponsivePositioningConfigModel and screen ' + ScreenSize[screenSize])
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
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]) {
        return translateToOverflowComponentProps(stateModelObj[ScreenSize[lastScreenSize]].childOverflowConfig)
      }
      lastScreenSize--
    }
    throw new Error('No screensize configuration was found for given ResponsiveOverflowConfigModel and screen ' + ScreenSize[screenSize])
  }
  public getStylingComponentProps(componentName: string, stateModel: ResponsiveStylingConfigModel, screenSize: number): StylingComponentPropsModel {
    const translateToStylingComponentProps =
      (stylingConfig: StylingConfigPropsModel): StylingComponentPropsModel => {
        return new StylingComponentPropsModel(
          stylingConfig.backgroundColor === ColorType.primary)
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
  //FixedDimensioningConfigModel|DynamicDimensioningConfigModel
  public getDimensionsComponentProps(componentName: string, stateModel: ResponsiveDimensioningConfigModel, screenSize: number): DimensioningComponentPropsModel {
    const translateToDimensioningComponentProps =
      (dimensionsConfig: DimensioningConfigPropsModel): DimensioningComponentPropsModel => {
      const compPropsObj = new DimensioningComponentPropsModel()
      if(dimensionsConfig.height){
        if(dimensionsConfig.height instanceof FixedDimensioningConfigModel){
          switch (dimensionsConfig.height.type){
            case DimensionValueConfigType.Hardcoded:
              switch (dimensionsConfig.height.unit){
                case DimensionUnitConfigType.REM:
                  compPropsObj.height = dimensionsConfig.height.value+'rem'
                  compPropsObj.calcHeight = undefined
                  break
                case DimensionUnitConfigType.PX:
                  compPropsObj.height = dimensionsConfig.height.value+'px'
                  compPropsObj.calcHeight = undefined
                  break
                case DimensionUnitConfigType.Percentage:
                  compPropsObj.height = dimensionsConfig.height.value+'%'
                  compPropsObj.calcHeight = undefined
                  break
              }
              break
            case DimensionValueConfigType.Calculated:
              if(typeof dimensionsConfig.height.value === 'string')
              compPropsObj.calcHeight = dimensionsConfig.height.value
              compPropsObj.height = undefined
              break
            case DimensionValueConfigType.Content:
              // todo dit is misschien niet nodig maar misschien wel bv. om een vorige waarde te resetten
              //  wanneer de hoogte on the fly bepaald wordt
              compPropsObj.height=true
              compPropsObj.calcHeight = undefined
              break
          }

        } else{
          // height is dynamic

        }
      }
        if(dimensionsConfig.width){
          if(dimensionsConfig.width instanceof FixedDimensioningConfigModel){

          } else{

          }
        }
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
    const newStateObj: AttributesComponentPropsModel = {}
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize > 0) {
      if (stateModelObj[ScreenSize[screenSize]]) {
        Object.keys(stateModelObj[ScreenSize[screenSize]]).forEach(configKey => {
          const propsObj = Object.create(this.translateToAttributesComponentProps(stateModel, configKey, lastScreenSize))
          Object.keys(this.translateToAttributesComponentProps(stateModel, configKey, lastScreenSize)).forEach((k) => {
            if (newStateObj.hasOwnProperty(k)) {
              delete propsObj[k]
            }
          })
          if (Object.keys(propsObj).length > 0)
            Object.assign(newStateObj, propsObj)
        })
      }
      lastScreenSize--
    }
    return newStateObj
  }

  private translateToAttributesComponentProps(stateModel: ResponsiveAttributesConfigModel, configKey: string, screenSize: ScreenSize): AttributesComponentPropsModel {
    // todo
    return {}
  }

  public getVisibilityComponentProps(componentName: string, stateModel: ResponsiveVisibilityConfigModel, screenSize: number): VisibilityComponentPropsModel {
    const newStateObj: VisibilityComponentPropsModel = {}
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize > 0) {
      if (stateModelObj[ScreenSize[screenSize]]) {
        Object.keys(stateModelObj[ScreenSize[screenSize]]).forEach(configKey => {
          const propsObj = Object.create(this.translateToVisibilityComponentProps(stateModel, configKey, lastScreenSize))
          Object.keys(this.translateToVisibilityComponentProps(stateModel, configKey, lastScreenSize)).forEach((k) => {
            if (newStateObj.hasOwnProperty(k)) {
              delete propsObj[k]
            }
          })
          if (Object.keys(propsObj).length > 0)
            Object.assign(newStateObj, propsObj)
        })
      }
      lastScreenSize--
    }
    return newStateObj
  }
  private translateToVisibilityComponentProps(stateModel: ResponsiveVisibilityConfigModel, configKey: string, screenSize: ScreenSize): VisibilityComponentPropsModel {
    // todo
    return {}
  }
  public setState(componentName: string,
                  newState:
                    PositioningComponentPropsModel |
                    PositioningChildComponentsPropsModel |
                    AttributesComponentPropsModel |
                    VisibilityComponentPropsModel): void {
    for (let [k, v] of Object.entries(newState)) {
      this.getStatePropertySubjects().find(subj => {
        return subj.componentName === componentName && subj.propName === k
      })?.propValue.next(v)
    }
  }
  public createStore(contentContainer: {
    components: ComponentModel[],
    actions: ActionModel[]
  }) {
    contentContainer.components.forEach(comp => {
      if (comp.position) {
        Object.keys(this.getPositionComponentProps(comp.name, comp.position, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<PositioningConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
        Object.keys(this.getPositionChildComponentsProps(comp.name, comp.position, ScreenSize.highResolution)).forEach(k => {
          if (comp.children && comp.children.length > 0) {
            comp.children.forEach(child => {
              const propSubj = new BehaviorSubject<PositioningConfigPropsModel | undefined>(undefined)
              this.statePropertySubjects.push({
                componentName: typeof child === 'string' ? child : child.name, propName: k, propValue:
                propSubj, prop$: propSubj.asObservable()
              })
            })
          }
        })
      }
      if (comp.overflow) {
        Object.keys(this.getOverflowComponentProps(comp.name, comp.overflow, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<OverflowConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
        Object.keys(this.getOverflowChildComponentsProps(comp.name, comp.overflow, ScreenSize.highResolution)).forEach(k => {
          if (comp.children && comp.children.length > 0) {
            comp.children.forEach(child => {
              const propSubj = new BehaviorSubject<OverflowConfigPropsModel | undefined>(undefined)
              this.statePropertySubjects.push({
                componentName: typeof child === 'string' ? child : child.name, propName: k, propValue:
                propSubj, prop$: propSubj.asObservable()
              })
            })
          }
        })
      }
      if (comp.attributes) {
        Object.keys(this.getAttributesComponentProps(comp.name, comp.attributes, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<AttributesConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
      if (comp.visibility) {
        Object.keys(this.getVisibilityComponentProps(comp.name, comp.visibility, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<VisibilityConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
      if (comp.styling){
        Object.keys(this.getStylingComponentProps(comp.name, comp.styling, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<StylingConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
    })
  }
  public bindToStateProperty(componentName: string, propName: string):
    Observable<PositioningComponentPropsModel |
      PositioningChildComponentsPropsModel |
      AttributesComponentPropsModel |
      VisibilityComponentPropsModel |
      OverflowComponentPropsModel |
      StylingComponentPropsModel |
      string |
      number |
      boolean |
      CalculationModel> |
    undefined {
    return this.statePropertySubjects.find(state => {
      return state.componentName === componentName && state.propName === propName
    })?.prop$
  }
  public getStatePropertySubjects(): StatePropertySubjectModel[] {
    return this.statePropertySubjects.slice()
  }
}
