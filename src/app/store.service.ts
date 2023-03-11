import {Injectable} from '@angular/core';
import {ResponsivePositioningConfigModel} from "./models/Positioning/self/ResponsivePositioningConfigModel";
import {PositioningConfigPropsModel} from "./models/Positioning/self/PositioningConfigPropsModel";
import {ResponsiveAttributesConfigModel} from "./models/Attributes/ResponsiveAttributesConfigModel";
import {ResponsiveVisibilityConfigModel} from "./models/Visibility/ResponsiveVisibilityConfigModel";
import {BehaviorSubject, config, Observable} from "rxjs";
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
    /*
    *       switch (configKey) {
        case 'direction':
          while (latestSize >= 0) {
            if (stateModelObj[ScreenSize[latestSize]].containerLayout.direction) {
              if (stateModelObj[ScreenSize[latestSize]].containerLayout.direction === 'row') {
                return {row: true, column: false}
              }
              return {row: false, column: true}
            } else {
              latestSize--
            }
          }
          throw new Error('direction not configured')
        case 'wrap':
          while (latestSize >= 0) {
            if (stateModelObj[ScreenSize[latestSize]].containerLayout.wrap) {
              if (stateModelObj[ScreenSize[latestSize]].containerLayout.wrap === true) {
                return {wrap: true}
              }
              return {wrap: false}
            } else {
              latestSize--
            }
          }
          throw new Error('wrap not configured')
        case 'horPos':
          while (latestSize >= 0) {
            if (stateModelObj[ScreenSize[latestSize]].containerLayout.horPos) {
              if (getConfigPropValue(1, 'direction') === 'row') {
                if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'string') {
                  return {
                    justifyContentStart: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'left',
                    justifyContentCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'center',
                    justifyContentEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'right',
                    justifyContentBetween: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'between',
                    justifyContentEvenly: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'evenly',
                    justifyContentAround: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'around',
                  }
                }
                throw new Error('horPos not configured correctly 1')
              }
              if (getConfigPropValue(1, 'wrap')) {
                if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'object') {
                  return {
                    alignItemsStart: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.children === 'left',
                    alignItemsCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.children === 'center',
                    alignItemsEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.children === 'right',
                    alignContentStart: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'left',
                    alignContentCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'center',
                    alignContentEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'right',
                    alignContentEvenly: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'evenly',
                    alignContentAround: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'around',
                    alignContentBetween: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'between',
                  }
                }
                throw new Error('horPos not configured correctly 2')
              }
              if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'string') {
                return {
                  alignItemsStart: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'left',
                  alignItemsCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'center',
                  alignItemsEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'right',
                  alignContentStart: false,
                  alignContentCenter: false,
                  alignContentEnd: false,
                  alignContentEvenly: false,
                  alignContentAround: false,
                  alignContentBetween: false
                }
              }
              throw new Error('horPos not configured correctly 3')
            } else {
              latestSize--
            }
          }
          throw new Error('horPos not configured') // in principe kan dit niet voorvallen ....
        case 'verPos':
          // to do fix this => doesn t work
          while (latestSize >= 0) {
            if (stateModelObj[ScreenSize[latestSize]].containerLayout.verPos) {
              if (getConfigPropValue(1, 'direction') === 'column') {
                if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'string') {
                  return {
                    justifyContentStart: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'top',
                    justifyContentCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'center',
                    justifyContentEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'bottom',
                    justifyContentBetween: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'between',
                    justifyContentEvenly: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'evenly',
                    justifyContentAround: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'around',
                  }
                }
                throw new Error('verPos not configured correctly')
              }
              if (getConfigPropValue(1, 'wrap')) {
                if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'object') {
                  return {
                    alignItemsStart: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.children === 'top',
                    alignItemsCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.children === 'center',
                    alignItemsEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.children === 'bottom',
                    alignContentStart: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'top',
                    alignContentCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'center',
                    alignContentEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'bottom',
                    alignContentEvenly: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'evenly',
                    alignContentAround: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'around',
                    alignContentBetween: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'between',
                  }
                }
                throw new Error('verPos not configured correctly')
              }
              if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'string') {
                return {
                  alignItemsStart: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'top',
                  alignItemsCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'center',
                  alignItemsEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'bottom',
                  alignContentStart: false,
                  alignContentCenter: false,
                  alignContentEnd: false,
                  alignContentEvenly: false,
                  alignContentAround: false,
                  alignContentBetween: false
                }
              }
              throw new Error('verPos not configured correctly')
            } else {
              latestSize--
            }
          }
          throw new Error('verPos not configured') // in principe kan dit niet voorvallen ....
      }
    * */
    return {}
  }
  private translateToPositioningChildComponentsProps(stateModel: ResponsivePositioningConfigModel,
                                                     configKey: string,
                                                     screenSize: ScreenSize): PositioningChildComponentsPropsModel {

    const PositioningChildComponentsPropsObj = Object.create(stateModel)

    // configKey = direction etc.:stateModel=>smartphone=>childPositioning.direction of selfAlign
    function getConfigPropValue(layoutType: number, configPropName: string): any {
      if (layoutType === 0) {
        throw new Error('childlayout not implemented yet')
      } else {
        let latestSize = screenSize
        while (latestSize >= 0) {
          if (stateModelObj[ScreenSize[latestSize]].containerLayout.hasOwnProperty(configPropName)) {
            return stateModelObj[ScreenSize[latestSize]].containerLayout[configPropName]
          } else {
            latestSize--
          }
        }
        return undefined
      }
    }

    if (layoutType === 0) {
      // todo
      return {}
    } else {
      let latestSize = screenSize
      switch (configKey) {
        case 'direction':
          while (latestSize >= 0) {
            if (stateModelObj[ScreenSize[latestSize]].containerLayout.direction) {
              if (stateModelObj[ScreenSize[latestSize]].containerLayout.direction === 'row') {
                return {row: true, column: false}
              }
              return {row: false, column: true}
            } else {
              latestSize--
            }
          }
          throw new Error('direction not configured')
        case 'wrap':
          while (latestSize >= 0) {
            if (stateModelObj[ScreenSize[latestSize]].containerLayout.wrap) {
              if (stateModelObj[ScreenSize[latestSize]].containerLayout.wrap === true) {
                return {wrap: true}
              }
              return {wrap: false}
            } else {
              latestSize--
            }
          }
          throw new Error('wrap not configured')
        case 'horPos':
          while (latestSize >= 0) {
            if (stateModelObj[ScreenSize[latestSize]].containerLayout.horPos) {
              if (getConfigPropValue(1, 'direction') === 'row') {
                if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'string') {
                  return {
                    justifyContentStart: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'left',
                    justifyContentCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'center',
                    justifyContentEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'right',
                    justifyContentBetween: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'between',
                    justifyContentEvenly: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'evenly',
                    justifyContentAround: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'around',
                  }
                }
                throw new Error('horPos not configured correctly 1')
              }
              if (getConfigPropValue(1, 'wrap')) {
                if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'object') {
                  return {
                    alignItemsStart: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.children === 'left',
                    alignItemsCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.children === 'center',
                    alignItemsEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.children === 'right',
                    alignContentStart: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'left',
                    alignContentCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'center',
                    alignContentEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'right',
                    alignContentEvenly: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'evenly',
                    alignContentAround: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'around',
                    alignContentBetween: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines === 'between',
                  }
                }
                throw new Error('horPos not configured correctly 2')
              }
              if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'string') {
                return {
                  alignItemsStart: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'left',
                  alignItemsCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'center',
                  alignItemsEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'right',
                  alignContentStart: false,
                  alignContentCenter: false,
                  alignContentEnd: false,
                  alignContentEvenly: false,
                  alignContentAround: false,
                  alignContentBetween: false
                }
              }
              throw new Error('horPos not configured correctly 3')
            } else {
              latestSize--
            }
          }
          throw new Error('horPos not configured') // in principe kan dit niet voorvallen ....
        case 'verPos':
          // to do fix this => doesn t work
          while (latestSize >= 0) {
            if (stateModelObj[ScreenSize[latestSize]].containerLayout.verPos) {
              if (getConfigPropValue(1, 'direction') === 'column') {
                if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'string') {
                  return {
                    justifyContentStart: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'top',
                    justifyContentCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'center',
                    justifyContentEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'bottom',
                    justifyContentBetween: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'between',
                    justifyContentEvenly: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'evenly',
                    justifyContentAround: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'around',
                  }
                }
                throw new Error('verPos not configured correctly')
              }
              if (getConfigPropValue(1, 'wrap')) {
                if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'object') {
                  return {
                    alignItemsStart: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.children === 'top',
                    alignItemsCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.children === 'center',
                    alignItemsEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.children === 'bottom',
                    alignContentStart: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'top',
                    alignContentCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'center',
                    alignContentEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'bottom',
                    alignContentEvenly: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'evenly',
                    alignContentAround: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'around',
                    alignContentBetween: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines === 'between',
                  }
                }
                throw new Error('verPos not configured correctly')
              }
              if (typeof stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'string') {
                return {
                  alignItemsStart: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'top',
                  alignItemsCenter: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'center',
                  alignItemsEnd: stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'bottom',
                  alignContentStart: false,
                  alignContentCenter: false,
                  alignContentEnd: false,
                  alignContentEvenly: false,
                  alignContentAround: false,
                  alignContentBetween: false
                }
              }
              throw new Error('verPos not configured correctly')
            } else {
              latestSize--
            }
          }
          throw new Error('verPos not configured') // in principe kan dit niet voorvallen ....
      }
    }
    throw new Error('ContainerLayoutModel property not implemented/configured (properly)')
  }

  public getOverflowComponentProps(componentName: string, stateModel: ResponsiveOverflowConfigModel, screenSize: number): OverflowComponentPropsModel {
    // todo
    return {}
  }

  public getOverflowChildComponentsProps(componentName: string, stateModel: ResponsiveOverflowConfigModel, screenSize: number): OverflowComponentPropsModel {
    // todo
    return {}
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
    })
  }

  public bindToStateProperty(componentName: string, propName: string):
    Observable<PositioningComponentPropsModel |
      PositioningChildComponentsPropsModel |
      AttributesComponentPropsModel |
      VisibilityComponentPropsModel |
      OverflowComponentPropsModel |
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
