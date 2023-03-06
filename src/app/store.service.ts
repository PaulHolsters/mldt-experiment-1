import {Injectable} from '@angular/core';
import {ResponsiveLayoutStateModel} from "./models/ResponsiveLayoutStateModel";
import {LayoutModel} from "./models/LayoutModel";
import {ResponsiveAttributesStateModel} from "./models/ResponsiveAttributesStateModel";
import {ResponsiveVisibilityStateModel} from "./models/ResponsiveVisibilityStateModel";
import {BehaviorSubject, from, Observable} from "rxjs";
import {StatePropertySubjectModel} from "./models/StatePropertySubject";
import {CalculationModel} from "./models/CalculationModel";
import {ComponentModel} from "./models/ComponentModel";
import {ActionModel} from "./models/ActionModel";
import {AttributesModel} from "./models/AttributesModel";
import {VisibilityModel} from "./models/VisibilityModel";
import {LayoutStateModel} from "./models/LayoutStateModel";
import {AttributesStateModel} from "./models/AttributesStateModel";
import {VisibilityStateModel} from "./models/VisibilityStateModel";
import {State} from "./enums/states.enum"
import {ScreenSize} from "./enums/screenSizes.enum";
import {LayoutType} from "./enums/layoutType.enum";
import {ChildLayoutModel} from "./models/ChildLayoutModel";
import {ContainerLayoutModel} from "./models/ContainerLayoutModel";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() {
  }
  private statePropertySubjects: StatePropertySubjectModel[] = []
  /*
  private getPropsFromLayout(layout: ResponsiveLayoutStateModel): string[] {
    const props: string[] = []
    for (let v of Object.values(layout) as LayoutModel[]) {
      for (let [k2, v2] of Object.entries(v.childLayout)) {
        switch (k2) {
          case 'selfAlignment':
            if (v2.horPos) {
              if (!props.includes('marginLeftAuto')) {
                props.push('marginLeftAuto')
                props.push('marginRightAuto')
              }
            }
            if (v2.verPos) {
              if (!props.includes('alignSelfCenter')) {
                props.push('alignSelfCenter')
                props.push('alignSelfEnd')
              }
            }
            break
          case 'height':
            if (!props.includes('height'))
              props.push('height')
            break
          case 'width':
            if (!props.includes('width'))
              props.push('width')
            break
          case 'shrink':
            break
          case 'grow':
            break
          case 'order':
            break
          default:
            throw new Error('Not implemented')
        }
      }
      if (v.containerLayout) {
        for (let [k2, v2] of Object.entries(v.containerLayout)) {
          switch (k2) {
            case 'direction':

              break
            case 'wrap':

              break
            case 'horPos':

              break
            case 'verPos':

              break
            case 'overflow':

              break
          }
          if (!props.includes(k2))
            props.push(k2)
        }
      }
    }
    return props
  }

  private getPropsFromAttributes(attributes: ResponsiveAttributesStateModel | undefined): string[] {
    if (!attributes) return []
    const props: string[] = []
    for (let v of Object.values(attributes) as AttributesModel[]) {
      if (v) {
        for (let k of Object.keys(v)) {
          if (!props.includes(k))
            props.push(k)
        }
      }
    }
    return props
  }

  private getPropsFromVisibility(visibility: ResponsiveVisibilityStateModel | undefined): string[] {
    if (!visibility) return []
    const props: string[] = []
    for (let v of Object.values(visibility) as VisibilityModel[]) {
      if (v) {
        for (let k of Object.keys(v)) {
          if (!props.includes(k))
            props.push(k)
        }
      }
    }
    return props
  }
  private generateNewLayoutState(layout: LayoutModel): LayoutModel {
    // dit geeft de verschillende props terug die in de component via de async pipe gerendered zullen worden
    // dit verschilt of het gaat om een "simple component" dan wel om een "container component" (met child components in).
    // een verzameling props zit steeds in een responsive state model bv  in smartphone todo
    const stateModel: LayoutModel = {childLayout:{}}
    if (layout.childLayout.selfAlignment) {
      if (layout.childLayout.selfAlignment.horPos) {
        if (!layout.containerLayout) {
          if (layout.childLayout.selfAlignment.horPos === 'right') {
            Object.assign(stateModel, {marginLeftAuto: true})
          }
        } else {
          // todo indien er een echte parent is zou het kunnen dat dit allemaal anders moet => is best de volgende stap!!!
        }
      }
      if (layout.childLayout.selfAlignment.verPos) {
        if (!layout.containerLayout) {
          switch (layout.childLayout.selfAlignment.verPos) {
            case 'center':
              Object.assign(stateModel, {alignSelfCenter: true})
              break
            case 'bottom':
              Object.assign(stateModel, {alignSelfEnd: true})
              break
          }
        } else {

        }
      }
    }
    if (layout.childLayout.height) {
      Object.assign(stateModel, {height: `${layout.childLayout?.height.value}${layout.childLayout?.height.unit}`})
    }

    return stateModel
  }
  private generateNewVisibilityState(visibility: VisibilityModel): VisibilityModel {
    //const stateModel: VisibilityStateModel = visibility
    return visibility
  }
  private generateNewAttributesState(attributes: AttributesModel): AttributesModel {
    //const stateModel: AttributesStateModel = attributes
    return attributes
  }


  private getResponsiveLayoutState(stateModel: ResponsiveLayoutStateModel | undefined,
                                   model: string): LayoutModel | undefined {
    switch (model) {
      case 'smartphone':
        if (stateModel?.smartphone) {
          return stateModel?.smartphone
        } else return undefined
      case 'portraitTablet':
        if (stateModel?.portraitTablet) {
          return stateModel?.portraitTablet
        } else return this.getResponsiveLayoutState(stateModel, 'smartphone')
      case 'tablet':
        if (stateModel?.tablet) {
          return stateModel?.tablet
        } else return this.getResponsiveLayoutState(stateModel, 'portraitTablet')
      case 'laptop':
        if (stateModel?.laptop) {
          return stateModel?.laptop
        } else return this.getResponsiveLayoutState(stateModel, 'tablet')
      case 'high-resolution':
        if (stateModel?.highResolution) {
          return stateModel?.highResolution
        } else return this.getResponsiveLayoutState(stateModel, 'laptop')
      default:
        throw new Error('not implemented')
    }
  }
  private getResponsiveVisibilityState(stateModel: ResponsiveVisibilityStateModel | undefined,
                                       model: string): VisibilityModel | undefined {
    switch (model) {
      case 'smartphone':
        if (stateModel?.smartphone) {
          return stateModel?.smartphone
        } else return undefined
      case 'portraitTablet':
        if (stateModel?.portraitTablet) {
          return stateModel?.portraitTablet
        } else return this.getResponsiveVisibilityState(stateModel, 'smartphone')
      case 'tablet':
        if (stateModel?.tablet) {
          return stateModel?.tablet
        } else return this.getResponsiveVisibilityState(stateModel, 'portraitTablet')
      case 'laptop':
        if (stateModel?.laptop) {
          return stateModel?.laptop
        } else return this.getResponsiveVisibilityState(stateModel, 'tablet')
      case 'high-resolution':
        if (stateModel?.highResolution) {
          return stateModel?.highResolution
        } else return this.getResponsiveVisibilityState(stateModel, 'laptop')
      default:
        throw new Error('not implemented')
    }
  }
  private getResponsiveAttributesState(stateModel: ResponsiveAttributesStateModel | undefined,
                                       model: string): AttributesModel | undefined {
    switch (model) {
      case 'smartphone':
        if (stateModel?.smartphone) {
          return stateModel?.smartphone
        } else return undefined
      case 'portraitTablet':
        if (stateModel?.portraitTablet) {
          return stateModel?.portraitTablet
        } else return this.getResponsiveAttributesState(stateModel, 'smartphone')
      case 'tablet':
        if (stateModel?.tablet) {
          return stateModel?.tablet
        } else return this.getResponsiveAttributesState(stateModel, 'portraitTablet')
      case 'laptop':
        if (stateModel?.laptop) {
          return stateModel?.laptop
        } else return this.getResponsiveAttributesState(stateModel, 'tablet')
      case 'high-resolution':
        if (stateModel?.highResolution) {
          return stateModel?.highResolution
        } else return this.getResponsiveAttributesState(stateModel, 'laptop')
      default:
        throw new Error('not implemented')
    }
  }
*/

  private translateToLayoutState(stateModel: ResponsiveLayoutStateModel, configKey: string, screenSize: ScreenSize,layoutType:number): LayoutStateModel {
    //strategie
    /*
    * elk stateModel heeft per screensize een configuratie voor deze screensize
    * deze configuratie is een object met configuratie props toegangelijk voor een bepaalde configprop via de configKey,
    * elke configprop zelf kan al dan niet uit subprops bestaan of qua werking afhankelijk zijn van de overige configprops
    * op basis van deze informatie gaat deze functie zo'n configprop Object omzetten in een outputProp Object
    * Het kan ook zijn dat deze output afhankelijk is van configProps die niet in het statemodel zitten van de huidige screensize
    * maar wel in het statemodel van een kleinere screensize
    * voor de omzetting moet je dus eerst een totaal statemodel config prop object maken en de translate vervolgens enkel nog doen op basis van dit
    * object.
    * */
    // stap 1: construeer het totale configObject
    const stateModelObj = Object.create(stateModel)
    function getConfigPropValue(layoutType:number,configPropName:string):any {
      if(layoutType === 0){
        throw new Error('childlayout not implemented yet')
      } else{
        let latestSize = screenSize
        while(latestSize >= 0){
          if(stateModelObj[ScreenSize[latestSize]].containerLayout.hasOwnProperty(configPropName)){
            return stateModelObj[ScreenSize[latestSize]].containerLayout[configPropName]
          } else{
            latestSize--
          }
        }
        return undefined
      }
    }
    if(layoutType===0){
      // todo
      return {}
    } else{
      // todo fix the same kind of bug also here
      let latestSize = screenSize
      switch (configKey){
        case 'direction':
          while(latestSize >= 0){
            if(stateModelObj[ScreenSize[latestSize]].containerLayout.direction){
              if(stateModelObj[ScreenSize[latestSize]].containerLayout.direction === 'row'){
                return {row:true, column:false}
              }
              return {row:false,column:true}
            } else{
              latestSize--
            }
          }
          throw new Error('direction not configured')
        case 'wrap':
          while(latestSize >= 0){
            if(stateModelObj[ScreenSize[latestSize]].containerLayout.wrap){
              if(stateModelObj[ScreenSize[latestSize]].containerLayout.wrap === true){
                return {wrap:true}
              }
              return {wrap:false}
            } else{
              latestSize--
            }
          }
          throw new Error('wrap not configured')
        case 'horPos':
          while(latestSize >= 0){
            if(stateModelObj[ScreenSize[latestSize]].containerLayout.horPos){
              if(getConfigPropValue(1,'direction')==='row'){
                if(typeof stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'string'){
                  return  {
                    justifyContentStart:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos==='left',
                    justifyContentCenter:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos==='center',
                    justifyContentEnd:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos==='right',
                    justifyContentBetween:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos==='between',
                    justifyContentEvenly:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos==='evenly',
                    justifyContentAround:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos==='around',
                  }
                }
                throw new Error('horPos not configured correctly 1')
              }
              if(getConfigPropValue(1,'wrap')){
                if(typeof stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'object'){
                  return  {
                    alignItemsStart:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.children==='left',
                    alignItemsCenter:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.children==='center',
                    alignItemsEnd:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.children==='right',
                    alignContentStart:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines==='left',
                    alignContentCenter:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines==='center',
                    alignContentEnd:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines==='right',
                    alignContentEvenly:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines==='evenly',
                    alignContentAround:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines==='around',
                    alignContentBetween:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos.lines==='between',
                  }
                }
                throw new Error('horPos not configured correctly 2')
              }
              if(typeof stateModelObj[ScreenSize[latestSize]].containerLayout.horPos === 'string'){
                return  {
                  alignItemsStart:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos==='left',
                  alignItemsCenter:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos==='center',
                  alignItemsEnd:stateModelObj[ScreenSize[latestSize]].containerLayout.horPos==='right',
                  alignContentStart:false,
                  alignContentCenter:false,
                  alignContentEnd:false,
                  alignContentEvenly:false,
                  alignContentAround:false,
                  alignContentBetween:false
                }
              }
              throw new Error('horPos not configured correctly 3')
            } else{
              latestSize--
            }
          }
          throw new Error('horPos not configured') // in principe kan dit niet voorvallen ....
        case 'verPos':
          // to do fix this => doesn t work
          while(latestSize >= 0){
            if(stateModelObj[ScreenSize[latestSize]].containerLayout.verPos){
              if(getConfigPropValue(1,'direction')==='column'){
                if(typeof stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'string'){
                  return  {
                    justifyContentStart:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos==='top',
                    justifyContentCenter:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos==='center',
                    justifyContentEnd:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos==='bottom',
                    justifyContentBetween:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos==='between',
                    justifyContentEvenly:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos==='evenly',
                    justifyContentAround:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos==='around',
                  }
                }
                throw new Error('verPos not configured correctly')
              }
              if(getConfigPropValue(1,'wrap')){
                if(typeof stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'object'){
                  return  {
                    alignItemsStart:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.children==='top',
                    alignItemsCenter:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.children==='center',
                    alignItemsEnd:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.children==='bottom',
                    alignContentStart:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines==='top',
                    alignContentCenter:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines==='center',
                    alignContentEnd:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines==='bottom',
                    alignContentEvenly:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines==='evenly',
                    alignContentAround:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines==='around',
                    alignContentBetween:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos.lines==='between',
                  }
                }
                throw new Error('verPos not configured correctly')
              }
              if(typeof stateModelObj[ScreenSize[latestSize]].containerLayout.verPos === 'string'){
                return  {
                  alignItemsStart:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos==='top',
                  alignItemsCenter:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos==='center',
                  alignItemsEnd:stateModelObj[ScreenSize[latestSize]].containerLayout.verPos==='bottom',
                  alignContentStart:false,
                  alignContentCenter:false,
                  alignContentEnd:false,
                  alignContentEvenly:false,
                  alignContentAround:false,
                  alignContentBetween:false
                }
              }
              throw new Error('verPos not configured correctly')
            } else{
              latestSize--
            }
          }
          throw new Error('verPos not configured') // in principe kan dit niet voorvallen ....
        case 'overflow':
          while(latestSize >= 0){
            if(stateModelObj[ScreenSize[latestSize]].containerLayout.overflow){
              return {
                overflowHidden: stateModelObj[ScreenSize[latestSize]].containerLayout.overflow === 'hidden',
                overflowXHidden: stateModelObj[ScreenSize[latestSize]].containerLayout.overflow.x === 'hidden',
                overflowYHidden: stateModelObj[ScreenSize[latestSize]].containerLayout.overflow.y === 'hidden',
                overflowAuto: stateModelObj[ScreenSize[latestSize]].containerLayout.overflow === 'scroll',
                overflowXAuto:  stateModelObj[ScreenSize[latestSize]].containerLayout.overflow.x === 'scroll',
                overflowYAuto:  stateModelObj[ScreenSize[latestSize]].containerLayout.overflow.y === 'scroll'
              }
            } else{
              latestSize--
            }
          }
          throw new Error('overflow not configured') // in principe kan dit niet voorvallen ....
      }
    }
    throw new Error('ContainerLayoutModel property not implemented/configured (properly)')
  }
  private translateToAttributesState(stateModel: ResponsiveAttributesStateModel,configKey: string, screenSize: ScreenSize): AttributesStateModel {
    // todo
    return {}
  }
  private translateToVisibilityState(stateModel: ResponsiveVisibilityStateModel, configKey: string, screenSize: ScreenSize): VisibilityStateModel {
    // todo
    return {}
  }
  public getLayoutState(state: State, componentName: string, stateModel: ResponsiveLayoutStateModel, screenSize: number): LayoutStateModel {
    const newStateObj = Object.create({})
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize >= 0) {
      if (stateModelObj[ScreenSize[lastScreenSize]]){
        Object.keys(stateModelObj[ScreenSize[lastScreenSize]].childLayout).forEach(configKey => {
          const stateObj = this.translateToLayoutState(stateModel, configKey, lastScreenSize,LayoutType.ChildLayout)
          for (let [k,v] of Object.entries(stateObj)){
            if (!newStateObj.hasOwnProperty(k)) {
              newStateObj[k] = v
            }
          }
        })
        if(stateModelObj[ScreenSize[lastScreenSize]].containerLayout){
          Object.keys(stateModelObj[ScreenSize[lastScreenSize]].containerLayout).forEach(configKey => {
            const stateObj = this.translateToLayoutState(stateModel, configKey, lastScreenSize,LayoutType.ContainerLayout)
            for (let [k,v] of Object.entries(stateObj)){
              if (!newStateObj.hasOwnProperty(k)) {
                newStateObj[k] = v
              }
            }
          })
        }
      }
      lastScreenSize--
    }
    return newStateObj
  }
  public getAttributesState(state: State, componentName: string, stateModel: ResponsiveAttributesStateModel, screenSize: number): AttributesStateModel {
    const newStateObj: AttributesStateModel = {}
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize > 0) {
      if (stateModelObj[ScreenSize[screenSize]]){
        Object.keys(stateModelObj[ScreenSize[screenSize]]).forEach(configKey => {
          const propsObj = Object.create(this.translateToAttributesState(stateModel, configKey, lastScreenSize))
          Object.keys(this.translateToAttributesState(stateModel, configKey, lastScreenSize)).forEach((k) => {
            if (newStateObj.hasOwnProperty(k)) {
              delete propsObj[k]
            }
          })
          if(Object.keys(propsObj).length>0)
            Object.assign(newStateObj, propsObj)
        })
      }
      lastScreenSize--
    }
    return newStateObj
  }
  public getVisibilityState(state: State, componentName: string, stateModel: ResponsiveVisibilityStateModel, screenSize: number): VisibilityStateModel {
    const newStateObj: VisibilityStateModel = {}
    let lastScreenSize = screenSize
    const stateModelObj = Object.create(stateModel)
    while (lastScreenSize > 0) {
      if (stateModelObj[ScreenSize[screenSize]]){
        Object.keys(stateModelObj[ScreenSize[screenSize]]).forEach(configKey => {
          const propsObj = Object.create(this.translateToVisibilityState(stateModel, configKey, lastScreenSize))
          Object.keys(this.translateToVisibilityState(stateModel, configKey, lastScreenSize)).forEach((k) => {
            if (newStateObj.hasOwnProperty(k)) {
              delete propsObj[k]
            }
          })
          if(Object.keys(propsObj).length>0)
            Object.assign(newStateObj, propsObj)
        })
      }
      lastScreenSize--
    }
    return newStateObj
  }
  public setState(componentName: string, newState: LayoutStateModel|AttributesStateModel|VisibilityStateModel): void {
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
      Object.keys(this.getLayoutState(State.layout, comp.name, comp.layoutState, ScreenSize.highResolution)).forEach(k => {
        // todo misschien beter een initiële waarde meegeven dan "undefined"?
        const propSubj = new BehaviorSubject<LayoutModel | undefined>(undefined)
        this.statePropertySubjects.push({
          componentName: comp.name, propName: k, propValue:
          propSubj, prop$: propSubj.asObservable()
        })
      })
      if (comp.attributesState) {
        Object.keys(this.getAttributesState(State.attributes, comp.name, comp.attributesState, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<AttributesModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
      if (comp.visibilityState) {
        Object.keys(this.getVisibilityState(State.visibility, comp.name, comp.visibilityState, ScreenSize.highResolution)).forEach(k => {
          const propSubj = new BehaviorSubject<VisibilityModel | undefined>(undefined)
          this.statePropertySubjects.push({
            componentName: comp.name, propName: k, propValue:
            propSubj, prop$: propSubj.asObservable()
          })
        })
      }
    })
  }
  public bindToStateProperty(componentName: string, propName: string):
    Observable<LayoutModel| string | number | boolean | ResponsiveLayoutStateModel | CalculationModel> | undefined {
    return this.statePropertySubjects.find(state => {
      return state.componentName === componentName && state.propName === propName
    })?.prop$
  }
  public getStatePropertySubjects(): StatePropertySubjectModel[] {
    return this.statePropertySubjects.slice()
  }
}
