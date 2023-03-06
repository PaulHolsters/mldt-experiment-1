import {Injectable} from '@angular/core';
import {ResponsiveLayoutStateModel} from "./models/ResponsiveLayoutStateModel";
import {LayoutModel} from "./models/LayoutModel";
import {ResponsiveAttributesStateModel} from "./models/ResponsiveAttributesStateModel";
import {ResponsiveVisibilityStateModel} from "./models/ResponsiveVisibilityStateModel";
import {BehaviorSubject, Observable} from "rxjs";
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

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() {
  }
  private statePropertySubjects: StatePropertySubjectModel[] = []
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
