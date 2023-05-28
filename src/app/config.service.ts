import {Injectable} from '@angular/core';
import {ActionModel} from "./models/ActionModel";
import myFunctions from "./composed-functions/myCustomFunctions";
import {CalculationConfigModel} from "./models/CalculationConfigModel";
import comparisons from "./unit-functions/comparison-functions/comparisons";
import {MixedArrayModel} from "./models/MixedArrayModel";
import {CalculationModel} from "./models/CalculationModel";
import {ComponentModel} from "./models/ComponentModel";
import {ResponsiveVisibilityConfigModel} from "./models/Visibility/ResponsiveVisibilityConfigModel";
import {VisibilityConfigPropsModel} from "./models/Visibility/VisibilityConfigPropsModel";
import {StoreService} from "./store.service";
import {ResponsiveBehaviourService} from "./responsive-behaviour.service";
import {ComponentType} from "./enums/componentTypes.enum";
import {DimensioningConfigPropsModel} from "./models/Dimensioning/self/DimensioningConfigPropsModel";
import {ResponsiveDimensioningConfigModel} from "./models/Dimensioning/self/ResponsiveDimensioningConfigModel";
import {FixedDimensioningConfigModel} from "./models/Dimensioning/self/FixedDimensioningConfigModel";
import {DimensionValueConfigType} from "./enums/dimensionValueConfigTypes.enum";
import {ResponsiveStylingConfigModel} from "./models/Styling/ResponsiveStylingConfigModel";
import {ResponsiveChildLayoutConfigModel} from "./models/ChildLayout/ResponsiveChildLayoutConfigModel"
import {ChildLayoutConfigPropsModel} from "./models/ChildLayout/ChildLayoutConfigPropsModel"
import {HorizontalLayoutConfigPropsModel} from "./models/ChildLayout/HorizontalLayoutConfigPropsModel";
import {AxisConfigType} from "./enums/axisConfigTypes.enum";
import {HeightConfigPropsModel} from './models/Dimensioning/self/HeightConfigPropsModel';
import {WidthConfigPropsModel} from "./models/Dimensioning/self/WidthConfigPropsModel";
import {DimensionUnitConfigType} from './enums/dimensionUnitConfigTypes.enum';
import {VerticalLayoutConfigPropsModel} from './models/ChildLayout/VerticalLayoutConfigPropsModel';
import {StylingConfigPropsModel} from './models/Styling/StylingConfigPropsModel';
import {
  CrossAxisHorizontalLanesPositioningConfigType
} from "./enums/crossAxisHorizontalLanesPositioningConfigTypes.enum";
import {CrossAxisVerticalLanesPositioningConfigType} from './enums/crossAxisVerticalLanesPositioningConfigTypes.enum';
import {DynamicDimensionValueConfigType} from "./enums/DynamicDimensionValueConfigTypes.enum";
import {WidthValueConfigType} from "./enums/WidthValueConfigTypes.enum";
import {MainAxisVerticalPositioningConfigType} from "./enums/mainAxisVerticalPositioningConfigTypes.enum";
import {CrossAxisHorizontalPositioningConfigType} from "./enums/crossAxisHorizontalPositioningConfigTypes.enum";
import {OverflowConfigPropsModel} from "./models/Overflow/self/OverflowConfigPropsModel";
import {OverflowValueConfigType} from "./enums/overflowValueConfigTypes.enum";
import {ResponsiveOverflowConfigModel} from './models/Overflow/self/ResponsiveOverflowConfigModel';
import {HeightValueConfigType} from "./enums/HeightValueConfigTypes.enum";
import {ResponsiveAttributesConfigModel} from './models/Attributes/ResponsiveAttributesConfigModel';
import {CrossAxisVerticalPositioningConfigType} from "./enums/crossAxisVerticalPositioningConfigTypes.enum";
import {BackgroundColorType} from "./enums/backgroundColorType.enum";
import {ConceptConfigModel} from './models/Data/ConceptConfigModel';
import {TextAttributeConfigModel} from "./models/Data/TextAttributeConfigModel";
import {ActionType} from './enums/actionTypes.enum';
import {ActionSubType} from './enums/actionSubTypes.enum';
import {TargetType} from './enums/targetTypes.enum';
import {EventType} from "./enums/eventTypes.enum";
import {InputFontSizeType} from "./enums/inputFontSizeType.enum";
import {IconType} from "./enums/iconType.enum";
import {IconPositionType} from "./enums/iconPositionType.enum";
import {RestrictionType} from "./enums/restrictionType.enum";
import {NumberInputModeType} from './enums/numberInputModeType.enum';
import {LocaleType} from './enums/localeType.enum';
import {AttributeConfigModel} from './models/Data/AttributeConfigModel';
import {NumberAttributeConfigModel} from './models/Data/NumberAttributeConfigModel';
import {CurrencyType} from "./enums/currencyType.enum";
import {CurrencyDisplayType} from "./enums/currencyDisplayType.enum";
import {ButtonClassType} from "./enums/buttonClassType.enum";
import {ButtonLayoutType} from "./enums/buttonLayoutType.enum";
import {NoValueType} from "./enums/no_value_type";
import {userConfig} from "./configuration/main";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() {
  }
  public getActionsForComponent(name:string):ActionModel[]{
    return userConfig.actions.filter(action=>{
      return action.targetName===name
    })
  }
  public getActionsForEvent(event:EventType){
    return userConfig.actions.filter(action=>{
      return action.on === event
    })
  }
  public getComponentConfig(compName: string ,component?:ComponentModel): ComponentModel | undefined {
    // todo later string [] variant toevoegen
    if(component){
      if(component.name !== compName){
        if(component.children){
          for (let j=0;j<component.children.length;j++){
            // hier ga je bv de menubar component hebben
            const comp = this.getComponentConfig(compName,component.children[j] as ComponentModel)
            if(comp){
              return comp
            }
          }
        }
      } else return component
    } else{
        for (let i=0;i<userConfig.components.length;i++){
          if(userConfig.components[i].name !== compName){
            if(userConfig.components[i].children){
              for (let k=0;k<(userConfig.components[i].children as ComponentModel[]).length;k++){
                const comp = this.getComponentConfig(compName,(userConfig.components[i].children as ComponentModel[])[k])
                if(comp){
                  return comp
                }
              }
            }
          } else return userConfig.components[i]
        }
    }
    return undefined
  }
  public getParentComponentConfigWithProperty(compName: string ,property:string, component?:ComponentModel, previousComponent?:ComponentModel): ComponentModel | undefined {
    // todo later string [] variant toevoegen
    if(component){
      if(component.name !== compName){
        if(component.children){
          for (let j=0;j<component.children.length;j++){
            let previousComponent
            if((component.children[j] as ComponentModel).hasOwnProperty(property)){
              previousComponent = component.children[j] as ComponentModel
            }
            const comp = this.getParentComponentConfigWithProperty(compName,property,component.children[j] as ComponentModel,previousComponent)
            if(comp){
              return comp
            }
          }
        }
      } else return previousComponent
    } else{
        for (let i=0;i<userConfig.components.length;i++){
          if(userConfig.components[i].name !== compName){
            if(userConfig.components[i].children){
              for (let k=0;k<(userConfig.components[i].children as ComponentModel[]).length;k++){
                let previousComponent
                if((userConfig.components[i].children as ComponentModel[])[k].hasOwnProperty(property)){
                  previousComponent = (userConfig.components[i].children as ComponentModel[])[k]
                }
                const comp = this.getParentComponentConfigWithProperty(compName,property,(userConfig.components[i].children as ComponentModel[])[k],previousComponent)
                if(comp){
                  return comp
                }
              }
            }
          } else return previousComponent
        }
    }
    return undefined
  }
  public getParentComponentConfigWithPropertyThroughAttributes(compName: string,property:string,childComp?:ComponentModel,previous?:ComponentModel): ComponentModel | undefined{
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
                if(previousComponent) component = this.getParentComponentConfigWithPropertyThroughAttributes(compName,property,l,previousComponent)
                else component = this.getParentComponentConfigWithPropertyThroughAttributes(compName,property,l,previous)
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
          if(previousComponent) component = this.getParentComponentConfigWithPropertyThroughAttributes(compName,property,(childComp.children as ComponentModel[])[j],previousComponent)
          else component = this.getParentComponentConfigWithPropertyThroughAttributes(compName,property,(childComp.children as ComponentModel[])[j],previous)
          if(component){
            return component
          }
        }
      }
    } else {
      for (let i = 0; i < userConfig.components.length; i++) {
        if (userConfig.components[i].attributes !== undefined) {
          const attributes = userConfig.components[i].attributes as ResponsiveAttributesConfigModel
          for (let [k, v] of Object.entries(attributes)) {
            if (v) {
              for (let [j, l] of Object.entries(v)) {
                if (l instanceof ComponentModel && l.name === compName) {
                  return previous
                }
                let previousComponent
                if (l instanceof ComponentModel && l.hasOwnProperty(property)) {
                  previousComponent = l
                }
                if (l instanceof ComponentModel) {
                  let component
                  if (previousComponent) component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property, l, previousComponent)
                  else component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property, l, previous)
                  if (component) return component
                }
              }
            }
          }
        }
        if (userConfig.components[i].children !== undefined) {
          for (let j = 0; j < (userConfig.components[i].children as ComponentModel[]).length; j++) {
            let previousComponent
            if ((userConfig.components[i].children as ComponentModel[])[j].hasOwnProperty(property)) {
              previousComponent = (userConfig.components[i].children as ComponentModel[])[j]
            }
            let component
            if (previousComponent) component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property, (userConfig.components[i].children as ComponentModel[])[j], previousComponent)
            else component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property, (userConfig.components[i].children as ComponentModel[])[j], previous)
            if (component) {
              return component
            }
          }
        }
      }
    }
    return undefined
  }
  public getComponentConfigThroughAttributes(compName: string,childComp?:ComponentModel): ComponentModel | undefined{
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
                const component = this.getComponentConfigThroughAttributes(compName,l)
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
          const component = this.getComponentConfigThroughAttributes(compName,(childComp.children as ComponentModel[])[j])
          if(component){
            return component
          }
        }
      }
    } else if(userConfig.components!==undefined){
      for (let i=0;i<userConfig.components.length;i++){
        if(userConfig.components[i].attributes !== undefined){
          const attributes = userConfig.components[i].attributes as ResponsiveAttributesConfigModel
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
        if(userConfig.components[i].children !== undefined){
          for (let j = 0; j < (userConfig.components[i].children as ComponentModel[]).length; j++) {
            const component = this.getComponentConfigThroughAttributes(compName,(userConfig.components[i].children as ComponentModel[])[j])
            if(component){
              return component
            }
          }
        }
      }
    }
    return undefined
  }
/*  private resolve(value: CalculationModel): MixedArrayModel {
    let paramsArr: MixedArrayModel = []
    for (let v of value.values) {
      if (typeof v === 'object' && v.hasOwnProperty('calc')) {
        paramsArr = paramsArr.concat(this.resolve(v))
      } else if (typeof v === 'object') {
        Object.values(v).forEach(val => {
          paramsArr.push(val)
        })
      } else {
        paramsArr.push(v)
      }
    }
    paramsArr.push(this.storeService.getStatePropertySubjects())
    for (let [attr, val] of Object.entries(myFunctions)) {
      if (attr === value.calc) {
        const calcRes = Reflect.apply(val.fun, null, paramsArr)
        if (typeof calcRes === 'object') {
          const result = []
          for (let val of Object.values(calcRes)) {
            result.push(val)
          }
          return result
        }
        return [calcRes]
      }
    }
    throw ('no calculation found to be executed for ' + value.calc)
  }*/

/*  private emitNewPropValueFor(componentName: string, propName: string, value: string | boolean | number | CalculationModel) {
    let valueToSet
    if (typeof value === 'object') {
      valueToSet = this.resolve(value)[0]
    } else {
      valueToSet = value
    }
    this.storeService.getStatePropertySubjects().find(subj => {
      return subj.componentName === componentName && subj.propName === propName
    })?.propValue.next(valueToSet)
  }*/

  /*  executeAction(action: ActionModel) {
      if (action.action === 'set') {
        action.props.forEach(prop => {
          if (this.conditionsMet(prop)) {
            this.emitNewPropValueFor(action.target, prop.name, prop.value)
          }
        })
      } else {
        action.props.forEach(prop => {
          for (let [attr, val] of Object.entries(myFunctions)) {
            if (attr === action.action) {
              if (this.conditionsMet(prop)) {
                const paramsArr = [
                  action.target,
                  prop.name,
                  this.storeService.getStatePropertySubjects()
                ]
                this.emitNewPropValueFor(action.target, prop.name, Reflect.apply(val.fun, null, paramsArr))
              }
              break
            }
          }
        })
      }
    }*/

/*  private conditionsMet(prop: CalculationConfigModel): boolean {
    for (let [attr, val] of Object.entries(comparisons)) {
      if (attr === prop.condition?.comparison) {
        let valuesArr: any[] = []
        prop.condition.values.forEach(v => {
          if (typeof v === 'object' && v.hasOwnProperty('calc')) {
            valuesArr = valuesArr.concat(this.resolve(v))
          } else if (typeof v === 'object') {
            // dan zijn er geen dieperliggende calculation verboregen in dit object!
            Object.values(v).forEach(val => {
              valuesArr.push(val)
            })
          } else {
            valuesArr.push(v)
          }
        })
        valuesArr.push(this.storeService.getStatePropertySubjects())
        return Reflect.apply(val.fun, null, valuesArr)
      }
    }
    return true
  }*/

  getAppTemplateData(): { components: ComponentModel[], actions: ActionModel[] } {
    return userConfig
  }
}
