import {Injectable} from '@angular/core';
import {ActionModel} from "../models/ActionModel";
import {ComponentModel} from "../models/ComponentModel";
import AppConfig from "../app-configuration/appConfig";
import {ComponentObjectModel} from "../models/ComponentObjectModel";
import {EventType} from "../enums/eventTypes.enum";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }
  public saveConfig(config:AppConfig){
    // todo laat dit verlopen via een event!
    this._appConfig.push(Object.create(config))
  }
  public get appConfig():AppConfig{
    if(this._appConfig.length>0)
      return Object.create(this._appConfig[this._appConfig.length-1])
    throw new Error('appConfig requested when not yet initialised')
  }
  private _appConfig:AppConfig[]=[]
  public getComponentObjectModelPropertyValue(comp: any, prop: string): any {
    if (!this.isComponentObjectModel(comp)) return undefined
    switch (prop) {
      case 'name':
        return comp.name
      case 'dimensions':
        return comp.dimensions
      case 'visibility':
        return comp.visibility
      case 'children':
        return comp.children
      case 'childLayout':
        return comp.childLayout
      case 'styling':
        return comp.styling
      case 'overflow':
        return comp.overflow
      case 'attributes':
        return comp.attributes
      case 'position':
        return comp.position
      case 'type':
        return comp.type
      case 'data':
        return comp.data
      default:
        throw new Error('unknown property ' + prop)
    }
  }

  public isComponentObjectModel(l: unknown): boolean {
    if (l && typeof l === 'object' && !(l instanceof ComponentModel)) {
      return Object.keys(l).filter(k => {
        return !(k in ['name', 'dimensions', 'position', 'children', 'childLayout', 'visibility', 'styling', 'overflow', 'attributes', 'type', 'data'])
      }).length > 0
    }
    return false
  }

  public convertToComponentModel(comp: ComponentObjectModel | ComponentModel | undefined | unknown): ComponentModel | undefined {
    if (this.isComponentObjectModel(comp)) {
      return new ComponentModel(
        this.getComponentObjectModelPropertyValue(comp, 'name'),
        this.getComponentObjectModelPropertyValue(comp, 'type'),
        this.getComponentObjectModelPropertyValue(comp, 'childLayout'),
        this.getComponentObjectModelPropertyValue(comp, 'position'),
        this.getComponentObjectModelPropertyValue(comp, 'dimensions'),
        this.getComponentObjectModelPropertyValue(comp, 'attributes'),
        this.getComponentObjectModelPropertyValue(comp, 'visibility'),
        this.getComponentObjectModelPropertyValue(comp, 'overflow'),
        this.getComponentObjectModelPropertyValue(comp, 'children'),
        this.getComponentObjectModelPropertyValue(comp, 'styling'),
        this.getComponentObjectModelPropertyValue(comp, 'data'))
    } else if (comp instanceof ComponentModel || comp === undefined) {
      return comp
    }
    throw new Error('convertToComponentModel method cannot be used  for any other type but ComponentObjectModel | ComponentModel | undefined')
  }
  public getActionsForComponent(name: string): ActionModel[] {
    return this.appConfig.userConfig.actions.filter((action: { targetName: string; }) => {
      return action.targetName === name
    })
  }
  public getActionsForEvent(event: EventType) {
    return this.appConfig.userConfig.actions.filter((action: { on: EventType; }) => {
      return action.on === event
    })
  }
  public getComponentConfig(compName: string, component?: ComponentModel): ComponentModel | undefined {
    if (component) {
      if (component.name !== compName) {
        if (component.children) {
          for (let j = 0; j < component.children.length; j++) {
            // hier ga je bv de menubar component hebben
            const childComp = component.children[j]
            if (typeof childComp !== 'string') {
              const comp = this.getComponentConfig(compName, this.convertToComponentModel(childComp))
              if (comp) {
                return comp
              }
            } else {
              // todo later string [] variant toevoegen
              throw new Error('string components not implemented')
            }
          }
        }
      } else return component
    } else {
      for (let i = 0; i < this.appConfig?.userConfig.components.length; i++) {
        if (this.appConfig.userConfig.components[i].name !== compName) {
          const children = this.appConfig.userConfig.components[i].children
          if (children) {
            for (let k = 0; k < children.length; k++) {
              const elTemp = children[k]
              if (typeof elTemp !== 'string') {
                const comp = this.getComponentConfig(compName, this.convertToComponentModel(elTemp))
                if (comp) {
                  return comp
                }
              } else {
                // todo later string [] variant toevoegen
                throw new Error('string components not implemented')
              }
            }
          }
        } else {
          return this.convertToComponentModel(this.appConfig.userConfig.components[i])
        }
      }
    }
    return undefined
  }

  public getComponentConfigThroughAttributes(compName: string, childComp?: ComponentModel): ComponentModel | undefined {
    if (childComp) {
      if (childComp.name === compName) return childComp
      if (childComp.attributes !== undefined) {
        for (let [k, v] of Object.entries(childComp.attributes)) {
          if (v) {
            for (let [j, l] of Object.entries(v)) {
              if ((l instanceof ComponentModel && l.name === compName)
                || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, 'name') === compName)) {
                return this.convertToComponentModel(l)
              }
              if ((l instanceof ComponentModel && (l.attributes !== undefined || l.children !== undefined))
                || (this.isComponentObjectModel(l) && (this.getComponentObjectModelPropertyValue(l, 'attributes') ||
                  this.getComponentObjectModelPropertyValue(l, 'children')))) {
                const component = this.getComponentConfigThroughAttributes(compName, this.convertToComponentModel(l))
                if (component) {
                  return component
                }
              }
              if (l instanceof Array) {
                for (let i = 0; i < l.length; i++) {
                  if ((l[i] instanceof ComponentModel && l[i].name === compName)
                    || (this.isComponentObjectModel(l[i]) && this.getComponentObjectModelPropertyValue(l[i], 'name') === compName)) {
                    console.log(this.convertToComponentModel(l[i]))
                    debugger
                    return this.convertToComponentModel(l[i])
                  }
                  if ((l[i] instanceof ComponentModel && (l[i].attributes !== undefined || l[i].children !== undefined))
                    || (this.isComponentObjectModel(l[i]) && (this.getComponentObjectModelPropertyValue(l[i], 'attributes') ||
                      this.getComponentObjectModelPropertyValue(l[i], 'children')))) {
                    const component = this.getComponentConfigThroughAttributes(compName, this.convertToComponentModel(l[i]))
                    if (component) {
                      console.log('array '+compName)
                      debugger
                      return component
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (childComp.children !== undefined) {
        for (let j = 0; j < childComp.children.length; j++) {
          const actualC = childComp.children[j]
          if (typeof actualC !== 'string') {
            const component = this.getComponentConfigThroughAttributes(compName, this.convertToComponentModel(actualC))
            if (component) {
              return component
            }
          } else {
            // todo als comp string is
            throw new Error('string components not implemented')
          }
        }
      }
    } else if (this.appConfig.userConfig.components !== undefined) {
      for (let i = 0; i < this.appConfig.userConfig.components.length; i++) {
        const childComp = this.appConfig.userConfig.components[i]
        if (childComp.attributes !== undefined) {
          for (let [k, v] of Object.entries(childComp.attributes)) {
            if (v) {
              for (let [j, l] of Object.entries(v)) {
                if ((l instanceof ComponentModel && l.name === compName)
                  || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, 'name') === compName)) {
                  return this.convertToComponentModel(l)
                }
                if (l instanceof Array) {
                  for (let i = 0; i < l.length; i++) {
                    if ((l[i] instanceof ComponentModel && l[i].name === compName)
                      || (this.isComponentObjectModel(l[i]) && this.getComponentObjectModelPropertyValue(l[i], 'name') === compName)) {
                      console.log('array '+compName)
                      debugger
                      return this.convertToComponentModel(l[i])
                    }
                  }
                }
              }
            }
          }
        }
        if (childComp.children !== undefined) {
          for (let j = 0; j < childComp.children.length; j++) {
            const actualC = childComp.children[j]
            if (typeof actualC !== 'string') {
              const component =
                this.getComponentConfigThroughAttributes(compName, this.convertToComponentModel(actualC))
              if (component) {
                return component
              }
            } else {
              // todo als comp string is
              throw new Error('string components not implemented')
            }
          }
        }
      }
    }
    return undefined
  }

  public getParentComponentConfigWithProperty(compName: string,
                                              property: string,
                                              component?: ComponentModel,
                                              previousComponent?: ComponentModel)
    : ComponentModel | undefined {
    // todo ga na of de referenties mekaar niet beginnen wijzigen en er dus deep copies nodig zijn
    if (component) {
      if (component.name !== compName) {
        if (component.children) {
          for (let j = 0; j < component.children.length; j++) {
            let previousComponent
            let componentNow: ComponentModel | undefined | string = (component.children[j])
            if (typeof componentNow !== 'string') {
              componentNow = this.convertToComponentModel(componentNow)
              if (componentNow && componentNow.hasOwnProperty(property)
                && componentNow.getPropertyValue
                && componentNow.getPropertyValue(property) !== undefined
              ) {
                previousComponent = componentNow
              }
              const comp = this.getParentComponentConfigWithProperty(compName, property, componentNow, previousComponent)
              if (comp) {
                return comp
              }
            } else {
              // todo als comp string is
              throw new Error('string components not implemented')
            }
          }
        }
      } else return previousComponent
    } else {
      for (let i = 0; i < this.appConfig.userConfig.components.length; i++) {
        if (this.appConfig.userConfig.components[i].name !== compName) {
          const childComponents = this.appConfig.userConfig.components[i].children
          if (childComponents) {
            for (let k = 0; k < childComponents.length; k++) {
              let previousComponent
              let childComp = childComponents[k]
              if (typeof childComp !== 'string') {
                const componentNow = this.convertToComponentModel(childComp)
                if (componentNow && componentNow.hasOwnProperty(property)
                  && componentNow.getPropertyValue
                  && componentNow.getPropertyValue(property) !== undefined
                ) {
                  previousComponent = componentNow
                }
                const comp = this.getParentComponentConfigWithProperty(compName, property, componentNow, previousComponent)
                if (comp) {
                  return comp
                }
              } else {
                // todo als comp string is
                throw new Error('string components not implemented')
              }
            }
          }
        } else return previousComponent
      }
    }
    return undefined
  }

  public getParentComponentConfigWithPropertyThroughAttributes(compName: string,
                                                               property: string,
                                                               childComp?: ComponentModel,
                                                               previous?: ComponentModel): ComponentModel | undefined {
    if (childComp) {
      if (childComp.name === compName) return previous
      if (childComp.attributes !== undefined) {
        for (let [k, v] of Object.entries(childComp.attributes)) {
          if (v) {
            for (let [j, l] of Object.entries(v)) {
              if (
                (l instanceof ComponentModel && l.name === compName)
                || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, 'name') === compName)
              ) {
                return previous
              }
              if (l instanceof Array) {
                for (let i = 0; i < l.length; i++) {
                  if ((l[i] instanceof ComponentModel && l[i].name === compName)
                    || (this.isComponentObjectModel(l[i]) && this.getComponentObjectModelPropertyValue(l[i], 'name') === compName)) {
                    console.log('array '+compName)
                    debugger
                    return previous
                  }
                }
              }
              let previousComponent
              if ((l instanceof ComponentModel && l.hasOwnProperty(property)
                  && l.getPropertyValue
                  && l.getPropertyValue(property) !== undefined)
                || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, property) !== undefined)) {
                previousComponent = l
              }
              if (l instanceof Array) {
                for (let i = 0; i < l.length; i++) {
                  if ((l[i] instanceof ComponentModel && l[i].hasOwnProperty(property)
                      && l[i].getPropertyValue
                      && l[i].getPropertyValue(property) !== undefined)
                    || (this.isComponentObjectModel(l[i]) && this.getComponentObjectModelPropertyValue(l[i], property) !== undefined)) {
                    previousComponent = l
                    console.log('break missing!')
                    debugger
                    // todo hier lijkt een break te missen
                  }
                }
              }
              if ((l instanceof ComponentModel && (l.attributes !== undefined || l.children !== undefined))
                || (this.isComponentObjectModel(l) && (this.getComponentObjectModelPropertyValue(l, 'attributes') ||
                  this.getComponentObjectModelPropertyValue(l, 'children')))) {
                let component
                if (previousComponent) component =
                  this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                    this.convertToComponentModel(l),
                    this.convertToComponentModel(previousComponent))
                else component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                  this.convertToComponentModel(l), previous)
                if (component) {
                  return component
                }
              }
              if (l instanceof Array) {
                for (let i = 0; i < l.length; i++) {
                  if ((l[i] instanceof ComponentModel && (l[i].attributes !== undefined || l[i].children !== undefined))
                    || (this.isComponentObjectModel(l[i]) && (this.getComponentObjectModelPropertyValue(l[i], 'attributes') ||
                      this.getComponentObjectModelPropertyValue(l[i], 'children')))) {
                    let component
                    if (previousComponent){
                      console.log('array '+compName)
                      debugger
                      component =
                        this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                          this.convertToComponentModel(l[i]),
                          this.convertToComponentModel(previousComponent))
                    } else{
                      console.log('array '+compName)
                      debugger
                      component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                        this.convertToComponentModel(l[i]), previous)
                    }
                    if (component) {
                      console.log('array '+compName)
                      debugger
                      return component
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (childComp.children !== undefined) {
        for (let j = 0; j < childComp.children.length; j++) {
          let previousComponent
          const actualComp = childComp.children[j]
          if (typeof actualComp !== 'string') {
            const componentNow = this.convertToComponentModel(actualComp)
            if ((componentNow instanceof ComponentModel && componentNow.hasOwnProperty(property)
                && componentNow.getPropertyValue
                && componentNow.getPropertyValue(property) !== undefined)
              || (this.isComponentObjectModel(componentNow) && this.getComponentObjectModelPropertyValue(componentNow, property) !== undefined)) {
              previousComponent = componentNow
            }
            let component
            if (previousComponent) component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
              componentNow, previousComponent)
            else component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
              componentNow, previous)
            if (component) {
              return component
            }
          } else {
            // todo als comp string is
            throw new Error('string components not implemented')
          }

        }
      }
    } else {
      for (let i = 0; i < this.appConfig.userConfig.components.length; i++) {
        const comp = this.appConfig.userConfig.components[i]
        if (comp.attributes !== undefined) {
          for (let [k, v] of Object.entries(comp.attributes)) {
            if (v) {
              for (let [j, l] of Object.entries(v)) {
                // todo array wordt niet gecontroleerd
                if ((l instanceof ComponentModel && l.name === compName)
                  || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, 'name') === compName)) {
                  return previous
                }
                let previousComponent
                if ((l instanceof ComponentModel && l.hasOwnProperty(property)
                    && l.getPropertyValue
                    && l.getPropertyValue(property) !== undefined)
                  || (this.isComponentObjectModel(l) && this.getComponentObjectModelPropertyValue(l, property) !== undefined)) {
                  previousComponent = l
                }
                if (l instanceof ComponentModel || this.isComponentObjectModel(l)) {
                  let component
                  if (previousComponent) component =
                    this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                      this.convertToComponentModel(l), this.convertToComponentModel(previousComponent))
                  else component = this.getParentComponentConfigWithPropertyThroughAttributes(compName, property,
                    this.convertToComponentModel(l), previous)
                  if (component) return component
                }
                console.log('NIET array '+compName)
                debugger
              }
            }
          }
        }
        if (comp.children !== undefined) {
          for (let j = 0; j < comp.children.length; j++) {
            let previousComponent
            const actualC = comp.children[j]
            if (typeof actualC !== 'string') {
              const componentNow = this.convertToComponentModel(actualC)
              if ((componentNow instanceof ComponentModel && componentNow.hasOwnProperty(property)
                  && componentNow.getPropertyValue
                  && componentNow.getPropertyValue(property) !== undefined)
                || (this.isComponentObjectModel(componentNow) && this.getComponentObjectModelPropertyValue(componentNow, property) !== undefined)) {
                previousComponent = actualC
              }
              let component
              if (previousComponent) component =
                this.getParentComponentConfigWithPropertyThroughAttributes(compName,
                  property, componentNow, previousComponent)
              else component =
                this.getParentComponentConfigWithPropertyThroughAttributes(compName,
                  property, componentNow, previous)
              if (component) {
                return component
              }
            } else {
              // todo als comp string is
              throw new Error('string components not implemented')
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

  getAppTemplateData(): { components: ComponentModel[], actions: ActionModel[] }|undefined {
    return this.appConfig?.userConfig
  }
}
