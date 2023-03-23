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
import {ResponsiveDimensioningConfigModel} from "./models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {DimensioningComponentPropsModel} from "./models/Dimensioning/self/DimensioningComponentPropsModel";
import {DimensioningConfigPropsModel} from "./models/Dimensioning/self/DimensioningConfigPropsModel";
import {FixedDimensioningConfigModel} from "./models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "./enums/dimensionValueConfigTypes.enum";
import {DimensionUnitConfigType} from "./enums/dimensionUnitConfigTypes.enum";
import {
  DimensioningChildComponentsPropsModel
} from "./models/Dimensioning/children/DimensioningChildComponentsPropsModel";
import {DimensioningChildConfigPropsModel} from "./models/Dimensioning/children/DimensioningChildConfigPropsModel";
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
      (positionConfig: CrossAxisRowPositioningConfigType | CrossAxisColumnPositioningConfigType): PositioningComponentPropsModel => {
        return new PositioningComponentPropsModel(
          positionConfig === CrossAxisRowPositioningConfigType.Top || positionConfig === CrossAxisColumnPositioningConfigType.Left,
          positionConfig === CrossAxisRowPositioningConfigType.Center || positionConfig === CrossAxisColumnPositioningConfigType.Center,
          positionConfig === CrossAxisRowPositioningConfigType.Bottom || positionConfig === CrossAxisColumnPositioningConfigType.Right,
          positionConfig === CrossAxisRowPositioningConfigType.Baseline || positionConfig === CrossAxisColumnPositioningConfigType.Baseline)
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
  public getPositionChildComponentsProps(componentName: string,
                                         stateModel: ResponsivePositioningConfigModel,
                                         screenSize: number): PositioningChildComponentsPropsModel {
    /*
    *           PositionDirectionConfigType.Row,
          true,
            HorizontalPositioningConfigType.Right,
      {lanes: VerticalPositioningConfigType.Center, children: CrossAxisRowPositioningConfigType.Center},
    * */
    const translateToPositioningChildComponentsProps =
      (positionConfig: PositioningChildrenConfigPropsModel): PositioningChildComponentsPropsModel => {
      return new PositioningChildComponentsPropsModel(
        positionConfig.direction === PositionDirectionConfigType.Row,
        positionConfig.direction === PositionDirectionConfigType.Column,
        positionConfig.wrap === true,
        positionConfig.horPos === HorizontalPositioningConfigType.Left || positionConfig.verPos === VerticalPositioningConfigType.Top,
        positionConfig.horPos === HorizontalPositioningConfigType.Center || positionConfig.verPos === VerticalPositioningConfigType.Center,
        positionConfig.horPos === HorizontalPositioningConfigType.Right || positionConfig.verPos === VerticalPositioningConfigType.Bottom,
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
      if(this.hasScreenSizeProperty(stateModel,'childPositioning')){
        let lastScreenSize = screenSize
        const stateModelObj = Object.create(stateModel)
        while (lastScreenSize >= 0) {
          if (stateModelObj[ScreenSize[lastScreenSize]]?.childPositioning) {
            return translateToPositioningChildComponentsProps(stateModelObj[ScreenSize[lastScreenSize]]?.childPositioning)
          }
          lastScreenSize--
        }
        throw new Error('No screensize child components configuration was found for given ResponsivePositioningConfigModel and screen ' + ScreenSize[screenSize])
      } else return new PositioningChildComponentsPropsModel()
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
    // todo fix this again
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
          if (dimensionsConfig.height.grow) {
            compPropsObj.grow = dimensionsConfig.height.grow
          }
          if (dimensionsConfig.height.shrink) {
            compPropsObj.shrink = dimensionsConfig.height.shrink
          }
          if (dimensionsConfig.height.followContent) {
            compPropsObj.fitContentHeight = true
          }
          if (dimensionsConfig.height.stretch) {
            compPropsObj.alignSelfStretch = true
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
          if (dimensionsConfig.width.grow) {
            compPropsObj.grow = dimensionsConfig.width.grow
          }
          if (dimensionsConfig.width.shrink) {
            compPropsObj.shrink = dimensionsConfig.width.shrink
          }
          if (dimensionsConfig.width.followContent) {
            compPropsObj.fitContentWidth = true
          }
          if (dimensionsConfig.width.stretch) {
            compPropsObj.alignSelfStretch = true
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
  public getDimensionsChildComponentsProps(componentName: string, stateModel: ResponsiveDimensioningConfigModel, screenSize: number): DimensioningChildComponentsPropsModel {
    const translateToDimensioningChildComponentsProps = (dimensionsChildComponentsConfig: DimensioningChildConfigPropsModel): DimensioningChildComponentsPropsModel => {
      if(dimensionsChildComponentsConfig.stretch){
        return new DimensioningChildComponentsPropsModel(true)
      }
      return new DimensioningChildComponentsPropsModel()
    }
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]?.childDimensioning) {
        return translateToDimensioningChildComponentsProps(stateModelObj[ScreenSize[lastScreenSize]].childDimensioning)
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
  public setState(componentName: string,
                  newState:(PositioningComponentPropsModel |
                    PositioningChildComponentsPropsModel |
                    AttributesComponentPropsModel |
                    VisibilityComponentPropsModel) |
                    StylingComponentPropsModel |
                    DimensioningComponentPropsModel|
                    DimensioningChildComponentsPropsModel |
                    OverflowComponentPropsModel|
                    (ComponentModel[])): void {
    if(newState instanceof PositioningComponentPropsModel ||
      newState instanceof PositioningChildComponentsPropsModel ||
      newState instanceof AttributesComponentPropsModel ||
      newState instanceof VisibilityComponentPropsModel ||
      newState instanceof StylingComponentPropsModel ||
      newState instanceof DimensioningComponentPropsModel||
      newState instanceof DimensioningChildComponentsPropsModel||
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
      // todo: zie dat styling geupdate wordt alsook de justify content stuff van de container alsook row en wrap en zo
      if (comp.position) {
        // todo volgens mij is dit niet correct, maar zal dit wel werken
        //  qua type moet hier komen volgens mij: string |
        //       number |
        //       boolean |
        //       CalculationModel
        Object.keys(this.getPositionComponentProps(comp.name, comp.position, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<PositioningConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
        if (comp.children && comp.children.length > 0) {
          Object.keys(this.getPositionChildComponentsProps(comp.name, comp.position, ScreenSize.highResolution)).forEach(k => {
                const propSubj = new BehaviorSubject<PositioningConfigPropsModel | undefined>(undefined)
                this.statePropertySubjects.push({
                  componentName: comp.name, propName: k, propValue:
                  propSubj, prop$: propSubj.asObservable()
                })
          })
        }
        // todo!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! NOW NOW NOW
        //  je moet ook eventuele kinderen zetten indien deze volledig in de array zitten (wat voorlopig dan de enige optie is)
        //   de bedoeling is dat je kinderen maar 1 diep mag nesten vanaf dan MOET je met strings werken
      }
      if (comp.dimensions){
        Object.keys(this.getDimensionsComponentProps(comp.name, comp.dimensions, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<DimensioningConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
        if (comp.children && comp.children.length > 0) {
          Object.keys(this.getDimensionsChildComponentsProps(comp.name, comp.dimensions, ScreenSize.highResolution)).forEach(k => {
            const propSubj = new BehaviorSubject<DimensioningConfigPropsModel | undefined>(undefined)
            this.statePropertySubjects.push({
              componentName: comp.name, propName: k, propValue:
              propSubj, prop$: propSubj.asObservable()
            })
          })
        }
        // todo je moet ook eventuele kinderen zetten indien deze volledig in de array zitten (wat voorlopig dan de enige optie is)
      }
      if (comp.overflow) {
        Object.keys(this.getOverflowComponentProps(comp.name, comp.overflow, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<OverflowConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
        if (comp.children && comp.children.length > 0) {
          debugger
          Object.keys(this.getOverflowChildComponentsProps(comp.name, comp.overflow, ScreenSize.highResolution)).forEach(k => {
            console.log(k)
            debugger
            const propSubj = new BehaviorSubject<OverflowChildConfigPropsModel | undefined>(undefined)
            this.statePropertySubjects.push({
              componentName: comp.name, propName: k, propValue:
              propSubj, prop$: propSubj.asObservable()
            })
          })
        }
        // todo je moet ook eventuele kinderen zetten indien deze volledig in de array zitten (wat voorlopig dan de enige optie is)
      }
      if (comp.attributes) {
        Object.keys(this.getAttributesComponentProps(comp.name, comp.attributes, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<AttributesConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
        // todo je moet ook eventuele kinderen zetten indien deze volledig in de array zitten (wat voorlopig dan de enige optie is)
      }
      if (comp.visibility) {
        Object.keys(this.getVisibilityComponentProps(comp.name, comp.visibility, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<VisibilityConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
        if (comp.children && comp.children.length > 0) {
          comp.children.forEach(child => {
            if(typeof child === 'string'){
              // todo
            } else{
              if(child.visibility)
                Object.keys(this.getVisibilityComponentProps(child.name, child.visibility, ScreenSize.highResolution)).forEach(k => {
                  const propSubj = new BehaviorSubject<VisibilityConfigPropsModel | undefined>(undefined)
                  this.statePropertySubjects.push({
                    componentName: child.name, propName: k, propValue:
                    propSubj, prop$: propSubj.asObservable()
                  })
                })
            }
          })
        }
      }
      if (comp.styling) {
        Object.keys(this.getStylingComponentProps(comp.name, comp.styling, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<StylingConfigPropsModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
        if (comp.children && comp.children.length > 0) {
          comp.children.forEach(child => {
            if(typeof child === 'string'){
              // todo => dan moet je eigenlijk niets doen!
            } else{
              if(child.styling){
                Object.keys(this.getStylingComponentProps(child.name, child.styling, ScreenSize.highResolution)).forEach(k => {
                  const propSubj = new BehaviorSubject<StylingConfigPropsModel | undefined>(undefined)
                  this.statePropertySubjects.push({
                    componentName: child.name, propName: k, propValue:
                    propSubj, prop$: propSubj.asObservable()
                  })
                })
              }
            }
          })
        }
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
      PositioningChildComponentsPropsModel |
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
